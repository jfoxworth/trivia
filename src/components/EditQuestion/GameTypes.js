
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import './editQuestionStyle.css';
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


// Action creators
import { editQuestion } from '../../store/actions/questions';



class GameTypes extends React.Component {

    constructor(props) {
        super(props);
	}
		
	changeTicTacToe = (status)=>{
		this.props.editQuestion({...this.props.question, tictactoe:status } , this.props.questionId);
	}

	changeBigBoard = (status)=>{
		this.props.editQuestion({...this.props.question, bigboard:status } , this.props.questionId);
	}

    render(){

			const answerTypes = ['Tic Tac Toe', 'Big Board'];

			return (

				<Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={2}>
						<div className="lead">Question Type</div>
					</Col>

					<Col sm={10}>
						<Row>
							<Col sm={4}>
								<Container>
                  <Row key="T1">

                    { this.props.question.tictactoe &&
                      <Button variant="success" 
                            className="center-me mb-3 width-175"
                            onClick={()=>{this.changeTicTacToe(false)}}>
                        <Row className="ml-large mr-tiny text-center ">
                            <FontAwesomeIcon icon={faCheck} className="mr-tiny mt-tiny" />
                            <div>Tic Tac Toe</div>
                        </Row>
                    </Button>}

                    { !this.props.question.tictactoe &&
                      <Button variant="secondary" 
                            className="center-me mb-3 width-175"
                            onClick={()=>{this.changeTicTacToe(true)}}>
                        <Row className="ml-large mr-tiny text-center ">
                            <div>Tic Tac Toe</div>
                        </Row>
                    </Button>}

                    { this.props.question.bigboard &&
                      <Button variant="success" 
                            className="center-me mb-3 width-175"
                            onClick={()=>{this.changeBigBoard(false)}}>
                        <Row className="ml-large mr-tiny text-center ">
                            <FontAwesomeIcon icon={faCheck} className="mr-tiny mt-tiny" />
                            <div>Big Board</div>
                        </Row>
                    </Button>}

                    { !this.props.question.bigboard &&
                      <Button variant="secondary" 
                            className="center-me mb-3 width-175"
                            onClick={()=>{this.changeBigBoard(true)}}>
                        <Row className="ml-large mr-tiny text-center ">
                            <div>Big Board</div>
                        </Row>
                    </Button>}

                  </Row>
								</Container>
							</Col>

							<Col>
								<p className="text-justify">Questions can be used in one or both games. Checking the appropriate box will allow this question to be used in that game.</p>
							</Col>
						</Row>
					</Col>

				</Row>

			) 
		}
}


const mapDispatchToProps = (dispatch) => {
    return {
        editQuestion: (question, questionId) => dispatch(editQuestion(question, questionId))
    }
}

export default connect(null, mapDispatchToProps)(GameTypes);
