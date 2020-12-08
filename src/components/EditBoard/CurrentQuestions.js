
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../Boards/boardsStyle.css';
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


// Action creators
import { editBoard } from '../../store/actions/boardActions';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

// Components
import DiffBadge from '../Shared/Badges/DiffBadge';
import QuestionType from '../Questions/QuestionType';
import TagList from '../Questions/TagList';


const diff = ['Easy', 'Medium', 'Difficult', 'Trivia Master'];
const diffColor = ['easy-color', 'medium-color', 'difficult-color', 'trivia-master-color'];


class CurrentQuestions extends React.Component {

    constructor(props) {
        super(props);
		}
		

		removeQuestion = (board, question)=>{
      let newDiffSums = JSON.parse(JSON.stringify(board.diffSums));
      newDiffSums[diff.indexOf(question.difficulty)] = newDiffSums[diff.indexOf(question.difficulty)]-1;
      this.props.editBoard({...this.props.board, questions:this.props.board.questions.filter((q)=>q.id!=question.id),
                                                 diffSums:newDiffSums } , this.props.boardId);
		}


		render(){

      return (

      <div className="center-me width-80p mt-medium">
          <h4 className="center-me text-center mt-3 mb-3">Current Board Questions</h4>

          {this.props.board.questions.length==0 &&
            <div className="center-me text-center">There are currently no questions on this board</div> }


          <ListGroup>
          {this.props.board.questions.map((ques, index) => (
            <ListGroup.Item className="sidebar-item" key={ques.id}>
              <Row>
                <Col xs={1}>
                  <Button variant="outline-danger" size="sm"
                          onClick={()=>{this.removeQuestion(this.props.board, ques)}}>
                    <FontAwesomeIcon icon={faMinus} className="" />
                  </Button>{' '}
                </Col>
                <Col xs={1}>
                    <DiffBadge badgeType = {ques.difficulty}/>
                </Col>
                <Col xs={1}>
                    <QuestionType questionType={ques.type}/>
                </Col>
                <Col xs={7}>
                    <Row>
                      <div>
                        {ques.text}
                      </div>
                    </Row>
                </Col>
                <Col xs={2}>
                    <TagList tags = {ques.tags} />
                </Col>
              </Row>
                    
            </ListGroup.Item>
          ))}
          </ListGroup>
				
      </div>

			) 
		}
}



const mapStateToProps = (state, ownProps)=>{
	const boardId = ownProps.boardId;
	const boards = state.firestore.data.boards;
	const board = boards ? boards[boardId] : null;
	return {
		board:board,
		boardId : boardId
	}
}


const mapDispatchToProps = (dispatch) => {
  return {
      editBoard: (board, boardId) => dispatch(editBoard(board, boardId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CurrentQuestions);
