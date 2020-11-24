
import React from 'react';

import '../tictactoeStyle.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



class ActiveQuestion extends React.Component 
{
	constructor(props) {
		super(props);
	}
		/*
		this.state = { questions : props.questions,
									 question : {},
									 activeId : props.activeId,
									 gameOver : props.game.gameOver }
	
		}

	componentDidUpdate(prevProps) {
		if(prevProps.activeId !== this.props.activeId) {
			this.setState({	questions: this.props.game.activeQuestions, 
											activeId : this.props.activeId,
											gameOver : this.props.game.gameOver,
											question : this.props.game.activeQuestions.filter(que => que.id==this.props.activeId)[0]	});
		console.log('here');
		}
	}
		*/

	


	render(){


		// Nothing given in props
		if ( ( this.props.game.activeQuestion.displayOptions===undefined ) &&
				 ( !this.props.game.gameOver ) )
		{
			return (
				<div className="text-center">
					<h4 className="text-center mt-3 mb-3">Current Question</h4>
					Select a square to start
				</div>
			);
		

		// When the game is over, display nothing
		}else if ( this.props.game.gameOver )
		{
			return (<div></div>);

		// When the question is in play
		}else if ( this.props.game.activeQuestion.inPlay )
		{

			if ( this.props.game.activeQuestion.type == 'select' )
			{
				return (
					<div className="ml-3">
						<h4 className="text-center mt-3 mb-3">Current Question</h4>
						<div className="text-center mt-3 mb-3">
							{this.props.game.activeQuestion.text}
						</div>
						<Form onChange={e => this.props.setAnswer( e.target.value )}>
							{this.props.game.activeQuestion.answerOptions.map((answer) => (
								<div key={answer} className="mb-3">
									<Form.Check type='radio' id={`check-api-${answer}`}>
										<Form.Check.Input type='radio' isValid value={answer} />
										<Form.Check.Label className="answer-text">{answer}</Form.Check.Label>
									</Form.Check>
								</div>
							))}

							<Button variant="primary"
											onClick={ ()=>{ this.props.answerQuestion( this.props.game.activeQuestion.id ) } }>
								Submit Answer
							</Button>
						</Form>

						<div className="mt-3">Select your desired choice from the list above and click submit</div>
					</div>
				);
			



			}else if ( this.props.game.activeQuestion.type == 'enter' )
			{

				return (
					<div className="ml-3">
						<h4 className="text-center mt-3 mb-3">Current Question</h4>
						<div className="text-center mt-3 mb-3">
							{this.props.game.activeQuestion.text}
						</div>
						<Form>

							<InputGroup className="mb-3">
								<InputGroup.Prepend>
									<InputGroup.Text id="enter-answer">
										Enter your answer
									</InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl id="enter-answer" 
														 onChange={e => this.props.setAnswer( e.target.value )}
														 aria-describedby="enter-answer" />
							</InputGroup>

							<Button variant="primary"
											onClick={ ()=>{ this.props.answerQuestion( this.props.game.activeQuestion.id ) } }>
								Submit Answer
							</Button>
						</Form>

						<div className="mt-3">Enter your answer and click submit</div>
					</div>
				);


			}


		// The question has not been viewed
		}else
		{
			return (
				<div>
				   No Status
				</div>
			);
		}

	}


}

export default ActiveQuestion;
