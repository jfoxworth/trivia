
import React from 'react';


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


class TicTacToeBoard extends React.Component 
{
	constructor(props) {
		super(props);
	}


	render(){
		
		return (

			<Container className="center-me">

				<Row>

					<Col sm={8}>

						<MainBoard questions={ this.props.questions } 
											 game={ this.props.game }
											 gameId={ this.props.gameId }
											 userId = { this.props.userId } />

					</Col>

					<Col sm={4}>

						<TurnDisplay game = { this.props.game }  />

						<hr />

						<ActiveQuestion game = { this.props.game } 
														gameId={ this.props.gameId }
														userId = { this.props.userId } />

						<hr />
						
						<GameWinner game = { this.props.game } />
					
					</Col>


				</Row>

				<ActionList actions={ this.props.game.actions }/>

			</Container>


		);
	
	}

}


export default TicTacToeBoard;
