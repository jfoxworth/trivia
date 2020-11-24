
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


const diff = ['Easy', 'Medium', 'Difficult', 'Trivia Master'];
const diffColor = ['easy-color', 'medium-color', 'difficult-color', 'trivia-master-color'];


class Difficulty extends React.Component {

    constructor(props) {
        super(props);
		}
		
		changeDiff = (diff)=>{
			this.props.editQuestion({...this.props.question, difficulty:diff } , this.props.questionId);
		}

			
		render(){

      return (

				<Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={2}>
						<div className="lead">Difficulty Level</div>
					</Col>

					<Col sm={10} className="center-me">
						<Row>
							<Col sm={4}>
								<Container>
										{diff.map((diffLevel, index) => (
												<Row key={this.props.question.difficulty+''+diffLevel}
														className="mb-2 center-me">
														<div className={diffColor[index]+" center-me width-175 white-text pt-small pb-small hover-me curve-small"}
																		onClick={()=>{this.changeDiff(diffLevel)}}>
																		{ this.props.question.difficulty==diffLevel ? <FontAwesomeIcon icon={faCheck} 
																																						className="mr-tiny mt-tiny"
																																						onClick={()=>{} } />  :'' }
																		{diffLevel}
														</div>
												</Row>
										))}
								</Container>
							</Col>

							<Col sm={8}>
								<p className="text-justify">The difficuly level is simply another filter that a user can apply to better select the appropriate questions for a game board. Simply click on the desired setting.</p>
							</Col>

						</Row>
					</Col>
				</Row>

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

export default connect(mapStateToProps, mapDispatchToProps)(Difficulty);
