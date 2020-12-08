
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


// Import Components
import NavBar from '../NavBar/NavBar';
import BigBoardBoard from './GamePlay/BigBoardBoard';
import BigBoardSetup from './Setup/BigBoardSetup';
import ChallengeStatus from './ChallengeStatus';
import Footer from '../Footer/FooterPage';


// Import Bootstrap
import Container from 'react-bootstrap/Container'


const BigBoardPage = (props) => {
			

	return(

	<div>


		<NavBar />


		{ props.game.status==0 &&
		<BigBoardSetup game={ props.game }  
										gameId={props.match.params.gameId} 
										tags={props.tags}
										questions={props.questions}
										users={props.users}
										boards={props.boards} />}


		{ props.game.status==1 && 
			!props.game.challengeAccepted &&
			<Container className="full-height">
				<div className="alert alert-info mt-large">
					<strong>Waiting on Challenger(s) to Accept!</strong> Please be patient.
				</div>
				<ChallengeStatus game={ props.game } 
												gameId={props.match.params.gameId} />
			</Container>	}


		{ props.game.status==1 && 
			props.game.challengeAccepted &&
			<Container>
				<BigBoardBoard game={ props.game } 
												gameId={props.match.params.gameId}
												questions={props.questions} 
												userId={props.userId} 
												profile={props.profile}/>
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
						profile:state.firebase.profile ? state.firebase.profile : {},
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect((props)=>[
		{ collection:'games' },
		{ collection:'tags' },
		{ collection:'users' },
		{ collection:'boards' },
		{ collection:'questions' },
	])
)(BigBoardPage);
