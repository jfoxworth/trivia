
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
			}
		 }, 1000);
//			this.props.editGame({...this.props.game, Countdown:type } , this.props.gameId);
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
