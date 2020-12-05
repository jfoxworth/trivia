
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../tictactoeStyle.css';

// Bootstrap Items
import Button from 'react-bootstrap/Button';

// Action creators
import { editGame } from '../../../store/actions/gameActions';




class TicTacToeSquare extends React.Component 
{
	constructor(props) {
		super(props);
	}



	showOptions = (index) => {

		let newSquares =  JSON.parse(JSON.stringify(this.props.game.squares));
		newSquares[index]['displayOptions']=1;
		this.props.editGame({...this.props.game, squares:newSquares, activeSquare:index } , this.props.gameId);

	}




	// Retrieves a question either from a board or from the bank of questions
	// meeting the prescribed criteria
	getQuestion = (index) => {

		let newQuestion = {};

		let flag=0;
		while (flag==0)
		{
			let num = Math.floor(Math.random() * this.props.questions.length) + 1  ;
			console.log(num);
			if ( !this.props.game.answeredArray.includes(this.props.questions[num]['id']) )
			{
				newQuestion = this.props.questions[num];
				flag=1;
			}
		}
		return newQuestion

	}



	// Take in a question and a square index
	// Make the question the active one for the player to solve it
	attemptQuestion = (question, index) => {


		this.props.editGame({...this.props.game, 
														activeQuestion:{...question, displayOptions:1},
														boardState:1,
														squares:this.props.game.squares.map((el, mapIndex)=>
														{ if (index==mapIndex){ return {...el, inPlay:true, question:question}}else{ return {...el, inPlay:false }}})}, 
													this.props.gameId)
													.then( this.props.questionCountdown() );

	}


	render(){

		{/*// If the game is over
		if ( this.props.gameOver )
		{
			return (
				<div style={{width:150, height:150}}></div>
			)



		// The square has been answered for team 0
		}else 
	*/}
		
		if ( ( this.props.game.squares[this.props.square].isAnswered) &&
				 ( this.props.game.squares[this.props.square].answerPlayer == 0 ) )
		{
			return (
				<img src="/images/greencircle.png" height="150px" width="150px"/>		
			)



		// The square has been answered for team 1
		}else if ( ( this.props.game.squares[this.props.square].isAnswered) &&
				 ( this.props.game.squares[this.props.square].answerPlayer == 1 ) )
		{
			return (
				<img src="/images/redx.png" height="150px" width="150px"/>		
			)
		

		
		// The options are being shown for this unanswered square
		}else if ( ( this.props.game.squares[this.props.square].displayOptions == 1 ) &&
							 ( !this.props.game.squares[this.props.square].inPlay ) &&
							 ( this.props.game.activeSquare == this.props.square ) &&
								 !this.props.game.gameOver )
		{
			return (
				<div className="showPrompts marginTopBig">
					<Button variant="success"
									onClick={ ()=>{ this.attemptQuestion( this.getQuestion(this.props.square), this.props.square ) } }>
						Attempt this question
					</Button>
				</div>
			)



		// This square is in play right now
		}else if ( this.props.game.squares[this.props.square].inPlay ) 
		{
			if ( this.props.game.activeUser == 0 )
			{
				return (
					<div>
						<img src="/images/greyCircle.png"  height="150px" width="150px"/>
					</div>
				)
			
			}else if ( this.props.game.activeUser == 1 )
			{
				return (
					<div>
						<img src="/images/greyX.png"  height="150px" width="150px"/>
					</div>
				)

			}
		

		// The board is locked because someone is attempting a question
		}else if ( this.props.game.boardState==1 || this.props.game.gameOver ) 
		{
			return (
				<div style={{width:150, height:150}}></div>
			)

		



		// The square is idle with no answer
		}else{

			if ( ( ( this.props.game.playerType==1 ) && 
						 ( this.props.game.players[this.props.game.activeUser]['id'] == this.props.userId ) ) ||
						 ( this.props.game.playerType==0 ) )	
			{
				return (
					<div style={{width:150, height:150}}
								onClick={ ()=>{ this.showOptions(this.props.square) } }>
					</div>
				)

			}else
			{
				return (
					<div style={{width:150, height:150}}></div>
				)
			}
		}
	}
}



const mapDispatchToProps = (dispatch) => {
  return {
      editGame: (game, gameId) => dispatch(editGame(game, gameId))
  }
}


export default connect(null, mapDispatchToProps)(TicTacToeSquare);


