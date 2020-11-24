
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


class ApproveButton extends React.Component {

    constructor(props) {
        super(props);
		}
		
		approveQuestion = ()=>{
			this.props.editQuestion({...this.props.question, status:1 } , this.props.questionId);
		}

			
		render(){

      return (

				<div className="mt-large mb-3 center-me text-center">


          {this.props.question.status==0 && 
            <div className="center-me text-center">
              <Button variant="warning" onClick={()=>{this.approveQuestion()}}>Approve Question</Button>
            </div> }

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

export default connect(mapStateToProps, mapDispatchToProps)(ApproveButton);
