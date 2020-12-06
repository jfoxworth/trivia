
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// Action creators
import { editGame } from '../../../store/actions/gameActions';


class QuestionsPer extends React.Component {

    constructor(props) {
        super(props);
		}
					

		changeQuestions = (qPer)=>{
        this.props.editGame({...this.props.game, questionsPerColumn:qPer.val } , this.props.gameId);
    }
    
    
		render(){

      return (

        <Container className="mt-large mb-large">

          <Row>

            <Col lg={4} className="mt-tiny">
              <h4>Questions per Column</h4>
            </Col>
          
            <Col lg={4}>

              <Form className="width-300 center-me">
                <Form.Group controlId="qPer" >
                  <Form.Control as="select" 
                    className="width-300 center-me"
                    value={this.props.game.questionsPerColumn}
                    onChange={e => this.changeQuestions({ val: e.target.value })}>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
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

export default connect(null, mapDispatchToProps)(QuestionsPer);
