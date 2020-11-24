
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
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


// Action creators
import { editQuestion } from '../../store/actions/questions';




class AnswerOptions extends React.Component {

    constructor(props) {
				super(props);
				this.input0 = React.createRef();
				this.input1 = React.createRef();
				this.input2 = React.createRef();
				this.input3 = React.createRef();
				this.input4 = React.createRef();
				this.input5 = React.createRef();
		}
		
		addAnswer = (e)=>{
			this.props.editQuestion({...this.props.question, answerOptions:this.props.question.answerOptions.concat('Answer Option') } , this.props.questionId);
		}

		updateText = (index, text)=>{
			let temp = JSON.parse(JSON.stringify(this.props.question.answerOptions));
			temp[index] = text;
			this.props.editQuestion({...this.props.question, answerOptions:temp } , this.props.questionId);
		}

		updateSelected = (index)=>{
			this.props.editQuestion({...this.props.question, correctAnswer:index } , this.props.questionId);
		}


		render(){

      return (

				<div>
				<Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={2}>
						<div className="lead">
							Answer Options
							{this.props.question.answerOptions.length<7 ? 
								<FontAwesomeIcon icon={faPlusCircle}	
															 className="ml-small mt-tiny hover-me easy-text" 
															 onClick={()=>{this.addAnswer()} } />:''}
						</div>
					</Col>

					<Col sm={10}>
						<Row>
							<Col sm={4}>
								<Container>
									{this.props.question.answerOptions.length==0 ? <div className="center-me">Click plus to add option</div> : ''}

										{this.props.question.answerOptions.map((answerOption, index) => (
											<div key={answerOption+"-"+index}>
												<InputGroup className="mb-3 width-175 center-me">
													
													{this.props.question.type=='Select' ? <InputGroup.Prepend>
														<InputGroup.Radio aria-label="Correct Answer" 
																							onChange={()=>{this.updateSelected(index)}}
																							checked={index===this.props.question.correctAnswer?true:false} />
													</InputGroup.Prepend>:''}

													<FormControl
														placeholder="Enter Input"
														aria-label="Tag Name"
														aria-describedby="email"
														ref = {this["input"+index]}
														defaultValue={this.props.question.answerOptions[index]}
														onBlur={()=>{this.updateText(index, this["input"+index].current.value)}}
														/>  
												</InputGroup>
											</div>

										))}
								</Container>
							</Col>
							<Col sm={8}>
								<p className="text-justify">For questions where the user selects the answer, the options you enter here will be presented to them and players must choose the option you mark as correct.</p>
								<p className="text-justify">For questions where the user enters the answer, the options you enter here can be variations on the correct answer such as misspellings. If what the user enters matches any of the values entered, the answer will be marked as correct.</p>
							</Col>
						</Row>
					</Col>

				</Row>

				</div>
			) 
		}
}



const mapStateToProps = (state, ownProps)=>{
	const questionId = ownProps.questionId;
	const questions = state.firestore.data.questions;
	const question = questions ? questions[questionId] : null;
	return {
		question:question,
		questionId : questionId
	}
}


const mapDispatchToProps = (dispatch) => {
    return {
        editQuestion: (question, questionId) => dispatch(editQuestion(question, questionId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);
