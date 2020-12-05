
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../mainCSS.css';

// Import Bootstrap Items
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';


class TagList extends React.Component {

  constructor(props) {
    super(props);
    this.state={};
    this.state.tagPrompt = '';
  }

  handleChange =(tagPrompt) =>{
    this.setState({ tagPrompt:tagPrompt });
  }

  render(){

    return(

      <div className="width-80p center-me">


        { !!this.props.userId && <div>
          <h2 className="text-center mt-large">My Tags</h2>

          {this.props.tags.filter((tag)=>{if (tag.userId==this.props.userId){ return true }})
            .length==0 && <div className="lead">You have not created any tags</div> }

        </div>}



        <h2 className="text-center mt-large">List of Tags</h2>

        <ListGroup variant="flush" className="mt-large no-bg">

          {this.props.tags.filter((tag)=>{if (tag.userId==this.props.userId){ return true }})
              .filter((tag)=>tag.tagName.match(this.state.tagPrompt))
              .map((tag, index) => (
                <ListGroup.Item  key={tag.id} className="no-bg">
                  <Row className="border-me pb-medium">
                    <Col sm={3}>{tag.tagName}</Col>
                    <Col sm={8}><small className="text-muted">{tag.description}</small></Col>
                    <Col sm={1}><FontAwesomeIcon icon={faStar} className="margin-right-small" /></Col>
                  </Row>
                </ListGroup.Item>
              ))}

          {this.props.tags.filter((tag)=>{if ((tag.status==1) && (tag.userId!=this.props.userId)){ return true }})
            .map((tag, index) => (
              <ListGroup.Item  key={tag.id} className="no-bg">
                <Row className="border-me pb-medium">
                  <Col sm={3}>{tag.tagName}</Col>
                  <Col sm={8}><small className="text-muted">{tag.description}</small></Col>
                  <Col sm={1}></Col>
                </Row>
              </ListGroup.Item>
            ))}

        </ListGroup>

      </div>
    )
  }

};


export default connect(null, null)(TagList);
