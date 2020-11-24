
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import './editQuestionStyle.css';
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


// Action creators
import { editQuestion } from '../../store/actions/questions';



class QuestionText extends React.Component {

    constructor(props) {
				super(props);
				this.textInput = React.createRef();
		}
		
		updateText = (text)=>{
			this.props.editQuestion({...this.props.question, text:text } , this.props.questionId);
		}

		_handleKeyDown = (e) =>{
			if (e.key === 'Enter') {
				console.log('Enter Pressed');
				this.updateText(this.textInput.current.value);
			}
		}


    render(){

      return (

        <Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={2}>
							<div className="lead">Text of Question</div>
					</Col>

	        <Col sm={10}>
						<Container>
							<InputGroup>
								<FormControl as="textarea" 
														 aria-label="With textarea" 
														 defaultValue={this.props.question.text} 
														 ref = {this.textInput}
														 onBlur={()=>{this.updateText(this.textInput.current.value)}}
														 onKeyDown={this._handleKeyDown}/>
							</InputGroup>
						</Container>
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

export default connect(null, mapDispatchToProps)(QuestionText);
