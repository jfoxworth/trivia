
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


// Action creators
import { editGame } from '../../../store/actions/gameActions';


class TimeSettings extends React.Component {

    constructor(props) {
        super(props);
		}
		
		changeTimerType = (time)=>{
			this.props.editGame({...this.props.game, timeLimited:time } , this.props.gameId);
		}

		changeTimer = (event)=>{
			this.props.editGame({...this.props.game, timeLimit:event.target.value } , this.props.gameId);
		}

    handleChange =(selectedOptions) =>{
      console.log(selectedOptions);
    }

    
		render(){

      return (

				<Container className="mt-large mb-large">

          <Row>
            
            <Col lg={4}>
              <h4>How much time do you want to allow for each question</h4>            
            </Col>

            <Col lg={4}>

              <div className="center-me text-center">

                { !this.props.game.timeLimited && 
                  <Button className="bg-success mb-small width-250">
                    <FontAwesomeIcon icon={faCheck} 
                                    className="margin-right-small mt-tiny hover-me"/>
                    No Time Limit
                  </Button>
                }

                { this.props.game.timeLimited && 
                  <Button className="bg-secondary mb-small width-250"
                          onClick={ ()=>{this.changeTimerType(false) } }>
                    No Time Limit
                  </Button>
                }
              </div>

              <div className="center-me text-center">

                { this.props.game.timeLimited && 
                  <Button className="bg-success mb-small width-250">
                      <FontAwesomeIcon icon={faCheck} 
                                    className="margin-right-small mt-tiny hover-me"/>
                    Use Time Limit
                  </Button>
                }

                { !this.props.game.timeLimited && 
                  <Button className="bg-secondary mb-small width-250"
                          onClick={ ()=> {this.changeTimerType(true) } }>
                    Use Time Limit
                  </Button>
                }

              </div>

            </Col>

            <Col lg={4}>

              <Form className="width-300 center-me">
                <Form.Group controlId="timeId" >
                  <Form.Label>Time Limit</Form.Label>
                  <Form.Control as="select" custom disabled={!this.props.game.timeLimited}
                    className="width-300 center-me"
                    onChange={ ()=>{this.changeTimer(event) } }>
                    <option value="30">30s</option>
                    <option value="45">45s</option>
                    <option value="60">60s</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            
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

export default connect(null, mapDispatchToProps)(TimeSettings);
