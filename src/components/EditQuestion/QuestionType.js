
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



class QuestionType extends React.Component {

    constructor(props) {
        super(props);
	}
		
	changeType = (type)=>{
		this.props.editQuestion({...this.props.question, type:type } , this.props.questionId);
	}


    render(){

			const answerTypes = ['Select', 'Enter'];

			return (

				<Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={2}>
						<div className="lead">Question Type</div>
					</Col>

					<Col sm={10}>
						<Row>
							<Col sm={4}>
								<Container>
									{answerTypes.map((answerType, index) => (
										<Row key={answerType}>
											<Button variant="secondary" 
															className="center-me mb-3 width-175"
															onClick={()=>{this.changeType(answerType)}}>
													<Row className="ml-tiny mr-tiny text-center text-center-hard">
															{ this.props.question.type==answerType ? <FontAwesomeIcon icon={faCheck} 
																																			className="mr-tiny mt-tiny"
																																			onClick={()=>{} } />  :'' }
															<div>{answerType}</div>
													</Row>
											</Button>
										</Row>
									))}
								</Container>
							</Col>

							<Col>
								<p className="text-justify">There are two types of questions. In the 'Select' type, the user is presented with 3 to 5 options and selects the one that they believe to be correct. For the 'Enter' type, the user must manually enter the answer.</p>
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

export default connect(null, mapDispatchToProps)(QuestionType);
