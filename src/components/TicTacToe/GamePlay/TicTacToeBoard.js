
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../tictactoeStyle.css';

// Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Components
import MainBoard from './MainBoard';
import ActiveQuestion from './ActiveQuestion';
import ActionList from './ActionList';
import TurnDisplay from './TurnDisplay';
import GameWinner from './GameWinner';
import Countdown from './Countdown';


// Action creators
import { editGame } from '../../../store/actions/gameActions';

// Squares label
const squareLabels = [
	'top left',
	'top center',
	'top right',
	'middle left',
	'center',
	'middle right',
	'bottom left',
	'bottom center',
	'bottom right'
];

// Users Labels
const userLabels = [
	'Player O',
	'Player X'
];



class TicTacToeBoard extends React.Component 
{
	constructor(props) {
		super(props);
		this.state={timeRemaining: this.props.game.timeLimit };
	}



	questionCountdown = ()=>{
		this.setState({
      timeRemaining: this.props.game.timeLimit
    });
		let myTimer = setInterval(()=>{ 

			this.setState({
				timeRemaining: this.state.timeRemaining-1
			});
				console.log(this.state.timeRemaining);
			if (this.state.timeRemaining<0)
			{
				clearInterval(myTimer);
				this.timedOutFail();
			}
			
			if (this.props.game.boardState==0)
			{
				clearInterval(myTimer);
			}
		 }, 1000);
	}



	timedOutFail = () =>{
		console.log('FAIL');

		// Update the game and move on
		this.props.editGame({...this.props.game, activeUser:this.props.game.activeUser == 0 ? 1 : 0,
			boardState:0,
			actions: this.props.game.actions.concat(this.setActionStatement(this.props.game.playerType, this.props.game.activeQuestion)),
			activeQuestion:{},
			activeSquare:'',
			answeredArray:this.props.game.answeredArray.concat(this.props.game.activeQuestion.id),
			squares:this.props.game.squares.map((el, mapIndex)=>{ return {...el, inPlay:false, displayOptions:0 } } 
					), 
		}, this.props.gameId);

	}



	setActionStatement = (type, question) =>{
    if (type==1)
    {
      return { correct:false,
               type:type,
               question:question,
               dateTime: new Date(),
               text: this.props.game.players[this.props.game.activeUser]['username']+' ran out of time trying to answer the '+squareLabels[this.props.game.activeSquare]+' square'
      }
    
    }else if ( type==0)
    {
      return { correct:false,
        type:type,
        question:question,
        dateTime: new Date(),
        text: userLabels[this.props.game.activeUser]+' ran out of time trying to answer the '+squareLabels[this.props.game.activeSquare]+' square'
      }
		}
	}

	render(){
		
		return (

			<Container className="center-me">

				<Row>

					<Col sm={8}>

						<MainBoard questions={ this.props.questions } 
											 game={ this.props.game }
											 gameId={ this.props.gameId }
											 userId = { this.props.userId } 
											 questionCountdown={this.questionCountdown} />

					</Col>

					<Col sm={4}>

						<TurnDisplay game = { this.props.game }  />

						{ !this.props.game.gameOver && <hr />}

						{ this.props.game.timeLimited &&
							!this.props.game.gameOver &&
						<Countdown game = { this.props.game }
											 timeRemaining={ this.state.timeRemaining } /> }
						<div>{this.timeRemaining}</div>

						{ !this.props.game.gameOver && <hr />}
						

						{ !this.props.game.gameOver &&
						<ActiveQuestion game = { this.props.game } 
														gameId={ this.props.gameId }
														userId = { this.props.userId }
						questionCountdown={this.questionCountdown} /> }


						{ !this.props.game.gameOver && <hr />}


						{ this.props.game.gameOver &&
							<GameWinner game = { this.props.game } />}
					
					</Col>


				</Row>

				<ActionList actions={ this.props.game.actions }/>

			</Container>


		);
	
	}

}




const mapDispatchToProps = (dispatch) => {
	return {
			editGame: (game, gameId) => dispatch(editGame(game, gameId))
	}
}

export default connect(null, mapDispatchToProps)(TicTacToeBoard);
