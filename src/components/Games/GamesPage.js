
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


// Import Components
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/FooterPage';
import TicTacToeOption from './TicTacToeOption';
import BigBoardOption from './BigBoardOption';
import GameList from '../Profile/GameList';


// Import CSS
import './gameStyle.css';


// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';





const GamesPage = (props) => {


	return(

		<div className="">

			<NavBar />

			<Container className="mt-medium">

				<div className="sidebar-container mt-large">

					<Row className="mb-large">
						<TicTacToeOption auth={props.auth}/>
					</Row>

					<Row className="mb-large">
						<BigBoardOption auth={props.auth} />
					</Row>

					<Row>
						<GameList games={props.games} auth={props.auth}/>
					</Row>

				</div>

			</Container>

			<Footer />

		</div>
	)
}




const mapStateToProps = (state) => {
	return {
		auth:state.firebase.auth,
		games : state.firestore.ordered.games ? state.firestore.ordered.games : [],
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect(props=>[
		{ collection:'games',
			where :['playersArray', 'array-contains', props.auth.uid ? props.auth.uid : '' ]},
	])
)(GamesPage);
