
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

// Import Components
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/FooterPage';
import QuestionText from './QuestionText';
import QuestionType from './QuestionType';
import AnswerOptions from './AnswerOptions';
import GameTypes from './GameTypes';
import Tags from './Tags';
import Difficulty from './Difficulty';
import ApproveButton from './ApproveButton';

// Import CSS
import '../Questions/questionsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';





const EditQuestionPage = (props) => {

	const {question}=props;
	const {tags}=props;
	const {admin}=props;

	if (question){
		
		return(
			<div>
				<NavBar />

				<Container className="mt-large edit-container">
					<Col>
							<h1 className="center-me text-center mb-small">Edit Question</h1>
							<div className="center-me text-center">(<Link to="/myQuestions"><small className="text-muted">Back to Questions</small></Link>)</div>
					</Col>
					{admin && <ApproveButton question={question} questionId={props.questionId}/>}
					<QuestionText question={question} questionId={props.questionId} />
					<Tags question={question} questionId={props.questionId} tags={tags}/>
					<Difficulty question={question} questionId={props.questionId} />
					<QuestionType question={question} questionId={props.questionId} />
					<GameTypes question={question} questionId={props.questionId} />
					<AnswerOptions question={question} questionId={props.questionId} />
				</Container>

				<Footer />
			</div>
		)

	}else{

		return (
			<div>
				<NavBar />
				<p>Loading</p>
			</div>
		)
	}
	
}


const mapStateToProps = (state, ownProps)=>{
	const questionId = ownProps.match.params.questionId;
	const questions = state.firestore.data.questions;
	const question = questions ? questions[questionId] : null;
	
	return {
		question:question,
		tags:state.firestore.ordered.tags,
		questionId : questionId,
		admin:state.firebase.profile.admin,
	}
}
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection:'tags' },
		{ collection:'questions' }
	])
)(EditQuestionPage);


