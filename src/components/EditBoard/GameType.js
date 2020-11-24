
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


// Action creators
import { editBoard } from '../../store/actions/boardActions';



class GameType extends React.Component {

    constructor(props) {
        super(props);
	}
		
	changeType = (type)=>{
		this.props.editBoard({...this.props.board, gameType:type } , this.props.boardId);
	}


    render(){

			const gameTypes = ['Tic Tac Toe', 'Big Board'];

			return (

				<Row className="mt-large mb-3 ml-large mr-large text-center">

					<Col sm={2}>
						<div className="lead">Game Type</div>
					</Col>

					<Col sm={10}>
						<Row>
							<Col sm={4}>
								<Container>
									{gameTypes.map((gameType, index) => (
										<Row key={gameType}>
											<Button variant="secondary" 
															className="center-me mb-3 width-175"
															onClick={()=>{this.changeType(index)}}>
													<Row className="ml-tiny mr-tiny text-center text-center-hard">
															{ this.props.board.gameType==index ? <FontAwesomeIcon icon={faCheck} 
																																			className="mr-tiny mt-tiny"
																																			onClick={()=>{} } />  :'' }
															<div>{gameType}</div>
													</Row>
											</Button>
										</Row>
									))}
								</Container>
							</Col>

							<Col>
								<p className="text-justify">There are two games. One is similar to Tic Tac Toe and the other lets the players select and answer questions from a board for points. Select the game for which this board is to be used.</p>
							</Col>
						</Row>
					</Col>

				</Row>

			) 
		}
}


const mapDispatchToProps = (dispatch) => {
    return {
        editBoard: (board, boardId) => dispatch(editBoard(board, boardId))
    }
}

export default connect(null, mapDispatchToProps)(GameType);
