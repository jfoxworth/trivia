
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';


// Action creators
import { editGame } from '../../../store/actions/gameActions';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


class TagImport extends React.Component {

    constructor(props) {
        super(props);
		}
		
		addTag = (tag)=>{
      if (tag[0])
      {
          this.props.editGame({...this.props.game, tags:this.props.game.tags.concat(tag[0]), 
                                                tagList:this.props.game.tagList.concat(tag[0]['tagName']) } , this.props.gameId)
                                                .then(()=>{ this.props.setQuestions()});
      }
    }
			

		removeTag = (tag)=>{
      console.log(tag)
        this.props.editGame({...this.props.game, tags:this.props.game.tags.filter(el=>el.tagName!=tag.tagName),
                                                tagList:this.props.game.tagList.filter(el=>el!=tag.tagName)	 } , this.props.gameId)
                                                .then(()=>{ this.props.setQuestions()});
    }
    
    
		render(){

      return (

        <Container className="mt-large mb-large">

          <Row>

            <Col lg={4} className="mt-tiny">
              <h4>Select Tags - Columns in Game</h4>
            </Col>
          
            
            <Col lg={4}>
              <div className="center-me mt-small">
                <Form.Group>
                  <Typeahead
                    id="tagValue"
                    labelKey="tagName"
                    options={this.props.tags}
                    placeholder="Start Typing Tag"
                    onChange={this.addTag}
                    className="width-300 center-me"
                  />
                </Form.Group>
              </div>
            </Col>

            <Col lg={4}>
              <Row>
              {this.props.game.tags.map((tag, index) => (
                <div className="text-center mt-small" key={index}>
                  <Badge pill variant="secondary" key={tag.tagName} className="right-me mr-small">
                    <div className="mb-tiny">{tag.tagName}
                    <FontAwesomeIcon icon={faMinus}	
                            className="ml-small mb-tiny hover-me easy-text badge-icon" 
                            onClick={()=>{this.removeTag(tag)} } />
                    </div>
                  </Badge>
                </div>
              ))}
              </Row>
            </Col>



          </Row>

				</Container>

			) 
		}
}



const mapDispatchToProps = (dispatch) => {
    return {
        editGame: (game, gameId) => dispatch(editGame(game, gameId))
    }
}

export default connect(null, mapDispatchToProps)(TagImport);
