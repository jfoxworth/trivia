

import React from 'react';


// Import CSS
import './profileStyle.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const ProfileTags = (props) => (

	<Container className="mt-large">

		<Row><div className="text-center h4 center-me">My Activity</div></Row>

		<Row className="mt-small mb-small">
			<Col sm={8}>
				<div className="ml-large">Number of Challenges</div>
			</Col>
			<Col sm={4} className="text-center" >
				{ props.challenges.length }
			</Col>
		</Row>

		<hr />

		<Row className="mt-small mb-small">
			<Col sm={8}>
				<div className="ml-large">Number of Questions</div>
			</Col>
			<Col sm={4} className="text-center" >
				{ props.questions.length }
			</Col>
		</Row>

		<hr />


		<Row className="mt-small mb-small">
			<Col sm={8}>
			<div className="ml-large">Number of Boards</div>
			</Col>
			<Col sm={4} className="text-center" >
				{ props.boards.length }
			</Col>
		</Row>

		<hr />


		<Row className="mt-small mb-small">
			<Col sm={8}>
				<div className="ml-large">Number of Games</div>
			</Col>
			<Col sm={4} className="text-center">
				{ props.games.length }
			</Col>
		</Row>

		<hr />


	</Container>

);


export default ProfileTags;

