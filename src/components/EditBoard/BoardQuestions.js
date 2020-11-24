
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

// Components
import CurrentQuestions from './CurrentQuestions';
import QuestionSelect from './QuestionSelect';



class BoardQuestions extends React.Component {

    constructor(props) {
        super(props);
	}
		
	changeType = (type)=>{
		this.props.editBoard({...this.props.board, gameType:type } , this.props.boardId);
	}


    render(){

			return (

        <div className="center-me text-center">
          <Row className="mt-large mb-3 ml-large mr-large text-center">

            <Col sm={2}>
              <div className="lead">Game Questions</div>
            </Col>

            <Col sm={10}>
              <Row>
                <div className="ml-large mr-large">
                <p className="text-justify">In the section below, select the questions that you want to appear in any game played with this board. You can narrow the list of questions by choosing the difficulty level and subject matter through the tags.</p>

                {this.props.board.gameType==0 && 
                  <p className="text-justify">A minimum of 9 questions is required (1 for each square). It is recommended that boards contain more than this number so that questions answewred incorrectly are not repeated.</p> }

                {this.props.board.gameType==1 && 
                <p className="text-justify">Add up to 5 columns and up to 7 questions for each column. It is not required that the questions for each column share tag, but that is recommended.</p> }
                </div>
              </Row>
            </Col>

          </Row>

          <Row>
            <CurrentQuestions board={this.props.board} boardId={this.props.boardId}/>
          </Row>

          <Row>
            <QuestionSelect questions={this.props.questions}  boardId={this.props.boardId}/>
          </Row>

        </div>

			) 
		}
}


const mapDispatchToProps = (dispatch) => {
    return {
        editBoard: (board, boardId) => dispatch(editBoard(board, boardId))
    }
}

export default connect(null, mapDispatchToProps)(BoardQuestions);
