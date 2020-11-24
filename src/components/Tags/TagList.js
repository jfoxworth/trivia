
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../mainCSS.css';

// Import Bootstrap Items
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';


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


        <h3 className="mt-medium mb-small">Find a Tag</h3>


        {this.props.tags && 
          <Form.Group>
            <Typeahead
              id="tagValue"
              onInputChange={this.handleChange}
              labelKey="tagName"
              options={this.props.tags}
              placeholder="Start Typing to see matching tags ..."
              onChange={this.handleChange}
            />
          </Form.Group>}

        

          <ListGroup variant="flush" className="mt-large">

            {this.props.tags.filter((tag)=>{if ((tag.status==1) || (tag.userId==this.props.userId)){ return true }})
              .filter((tag)=>tag.tagName.match(this.state.tagPrompt))
              .map((tag, index) => (
                <ListGroup.Item  key={tag.id}>
                  {tag.tagName} : <small className="text-muted">{tag.description}</small> 
                </ListGroup.Item>
              ))}

          </ListGroup>




        <ListGroup variant="flush" className="mt-large">

          {this.props.tags.filter((tag)=>{if ((tag.status==1) || (tag.userId==this.props.userId)){ return true }})
            .map((tag, index) => (
              <ListGroup.Item  key={tag.id}>
                {tag.tagName} : <small className="text-muted">{tag.description}</small> 
              </ListGroup.Item>
            ))}

        </ListGroup>

      </div>
    )
  }

};


export default connect(null, null)(TagList);
