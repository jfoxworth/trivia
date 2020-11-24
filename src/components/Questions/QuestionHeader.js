
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


// Import CSS
import '../mainCSS.css';


// Import Bootstrap Items
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Action creators
import { createQuestion } from '../../store/actions/questions';


// Model
import modelQuestion from '../../models/question.js';


class QuestionHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }
		}
		
		handleClick = (e)=>{
			this.props.createQuestion(modelQuestion).then((id)=>
			{ this.setState({ redirect:"/editQuestion/"+id })});
		}

    render(){

			if (this.state.redirect) {
				return <Redirect to={this.state.redirect} />
			}

			return (

				<div className="mt-3 mb-3">

						<h1 className="mt-large mb-large text-center center-me">Questions</h1>

						<Row className="mb-3">

								<Col sm={8}>
										<p className="lead ml-large text-justify">
												On this page, you can add questions that can then be used in games. You can set the 
												types of games that the questions can be used in, the difficulty level, and then tag them 
												to specific subjects to make them easier for users to find.
										</p>
								</Col>

								<Col sm={4} className="text-center mt-2">
										<Button className="red-color no-border"
														onClick={()=>{this.handleClick()}}>
												<FontAwesomeIcon icon={faPlus} className="mr-2" />
												Add Question
										</Button>{' '}
								</Col>

						</Row>
		
				</div>
			)
		}
}


const mapDispatchToProps = (dispatch) => {
    return {
        createQuestion: (question) => dispatch(createQuestion(question))
    }
}

export default connect(null, mapDispatchToProps)(QuestionHeader);
