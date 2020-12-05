
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import NavBar from '../NavBar/NavBar';
import ProfileImage from './ProfileImage';
import ProfileTags from './ProfileTags';
import Footer from '../Footer/FooterPage';
import ChallengeList from './ChallengeList';
import GameList from './GameList';




const ProfilePage = (props) => (

	<div className="">

		<NavBar />

		<Container>
			<Row>
				
				<Col sm={6}>
					<ProfileImage uid={props.auth.uid} profile={props.profile} />
				</Col>

				<Col sm={6}>
					<ProfileTags questions={props.questions}
											 tags={props.tags}
											 challenges={props.challenges}
											 boards={props.boards}
											 games={props.games} />
				</Col>
			
			</Row>

			<Row>

				<Container>
					<Col>
						<ChallengeList challenges={props.challenges} games={props.games}/>
						<GameList games={props.games} auth={props.auth}/>
					</Col>
				</Container>


			</Row>
		</Container>

		<Footer />

	</div>
);



const mapStateToProps = (state) => {
	return {
			questions : state.firestore.ordered.questions ? state.firestore.ordered.questions : [],
			auth:state.firebase.auth,
			profile:state.firebase.profile ? state.firebase.profile : {},
			tags : state.firestore.ordered.tags ? state.firestore.ordered.tags : [],
			challenges : state.firestore.ordered.challenges ? state.firestore.ordered.challenges : [],
			boards : state.firestore.ordered.boards ? state.firestore.ordered.boards : [],
			games : state.firestore.ordered.games ? state.firestore.ordered.games : [],
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect(props=>[
		{ collection:'games',
			where :['playersArray', 'array-contains', props.auth.uid ]},
		{ collection:'challenges',
			where :[['challengedId', '==', props.auth.uid ],
						 ['accepted', '==', false]]},
		{ collection:'boards',
			where :['userId', '==', props.auth.uid ]},
		{ collection:'questions',
			where :['userId', '==', props.auth.uid ]},
		{ collection:'tags',
			where :['userId', '==', props.auth.uid ]}
	])
)(ProfilePage);
