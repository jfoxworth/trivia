
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

// Import Components
import NavBar from '../NavBar/NavBar';
import BoardName from './BoardName';
import Difficulty from './Difficulty';
import GameType from './GameType';
import Tags from './Tags';
import BoardQuestions from './BoardQuestions';
import Footer from '../Footer/FooterPage';

// Import CSS
import '../Boards/boardsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';





const EditBoardPage = (props) => {

	const {board}=props;
	const {tags}=props;
	console.log(props);

	if (board){
		
		return(
			<div>
				<NavBar />

				<Container className="mt-large edit-container">
					<Col>
							<h1 className="center-me text-center mb-small">Edit Board</h1>
							<div className="center-me text-center">(<Link to="/boards"><small className="text-muted">Back to Boards</small></Link>)</div>
					</Col>
					<BoardName board={board} boardId={props.boardId} />
					<GameType board={board} boardId={props.boardId} />
					<Tags board={board} boardId={props.boardId} tags={tags}/>
					<Difficulty board={board} boardId={props.boardId} />
					<BoardQuestions board={board} boardId={props.boardId} />

				</Container>

				<Footer />
			</div>
		)

	}else{

		return (
			<div>
				<NavBar />
				<p>Loading</p>
			</div>
		)
	}
	
}


const mapStateToProps = (state, ownProps)=>{
	const boardId = ownProps.match.params.boardId;
	const boards = state.firestore.data.boards ? state.firestore.data.boards : [];
	const board = boards ? boards[boardId] : null;
	return {
		board:board,
		tags:state.firestore.ordered.tags,
		boardId : boardId
	}
}
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection:'tags' },
		{ collection:'questions' },
		{ collection:'boards' }
	])
)(EditBoardPage);
