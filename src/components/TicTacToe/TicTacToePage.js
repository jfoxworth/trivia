
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


// Import Components
import NavBar from '../NavBar/NavBar';
import TicTacToeBoard from './GamePlay/TicTacToeBoard';
import TicTacToeSetup from './Setup/TicTacToeSetup';
import Footer from '../Footer/FooterPage';


// Import CSS
import './tictactoeStyle.css';

// Import Bootstrap
import Container from 'react-bootstrap/Container'


const TicTacToePage = (props) => {
			

	return(

	<div>


		<NavBar />


		{ props.game.status==0 &&
		<TicTacToeSetup game={ props.game }  
										gameId={props.match.params.gameId} 
										tags={props.tags}
										questions={props.questions}
										users={props.users}
										boards={props.boards} />}


		{ props.game.status==1 && 
			!props.game.challengeAccepted &&
			<Container className="full-height">
				<div className="alert alert-info mt-large">
					<strong>Waiting on Challenger to Accept!</strong> Please be patient.
				</div>
			</Container>	}


		{ props.game.status==1 && 
			props.game.challengeAccepted &&
			<Container>
				<TicTacToeBoard game={ props.game } 
												gameId={props.match.params.gameId}
												questions={props.questions} 
												userId={props.userId} />
			</Container>}



		<Footer />

	</div>
);
}

const mapStateToProps = (state, ownProps) => {

	const setQuestions = ()=>{

		let game=state.firestore.data.games[ownProps.match.params.gameId];

		return state.firestore.ordered.questions.filter((ques)=>{
			if (((ques.difficulty=="Easy" && game.diff[0]) ||
					 (ques.difficulty=="Medium" && game.diff[1]) ||
					 (ques.difficulty=="Difficult" && game.diff[2]) ||
					 (ques.difficulty=="Trivia Master" && game.diff[3])) &&
					 (ques.tagList.some(r=> game.tagList.includes(r))))
					 {
						 return true
					 }
		});
	
	}

	return {
			auth:state.firebase.auth,
            games : state.firestore.ordered.games ? state.firestore.ordered.games : [],
            game: state.firestore.ordered.games ? state.firestore.data.games[ownProps.match.params.gameId]: {},
            tags : state.firestore.ordered.tags ? state.firestore.ordered.tags : [],
            users : state.firestore.ordered.users ? state.firestore.ordered.users : [],
            boards : state.firestore.ordered.boards ? state.firestore.ordered.boards : [],
						questions : state.firestore.data.games && state.firestore.ordered.questions ? setQuestions() : [],
						userId : state.firebase.auth ? state.firebase.auth.uid : '',
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection:'games' },
		{ collection:'tags' },
		{ collection:'users' },
		{ collection:'boards' },
		{ collection:'questions' },
	])
)(TicTacToePage);