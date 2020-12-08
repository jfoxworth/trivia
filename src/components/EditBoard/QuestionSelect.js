
import React, { useState } from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../Boards/boardsStyle.css';
import '../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


// Action creators
import { editBoard } from '../../store/actions/boardActions';


// Components
import DiffBadge from '../Shared/Badges/DiffBadge';
import QuestionType from '../Questions/QuestionType';
import TagList from '../Questions/TagList';


// Typeahead stuff
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';


const diff = ['Easy', 'Medium', 'Difficult', 'Trivia Master'];
const diffColor = ['easy-color', 'medium-color', 'difficult-color', 'trivia-master-color'];


class QuestionSelect extends React.Component {

    constructor(props) {
        super(props);
        this.tagInput = React.createRef();
        this.state={};
        this.state.tag='';
        this.state.diff="All";
    }
		
		addQuestion = (board, question)=>{
      let newDiffSums = JSON.parse(JSON.stringify(board.diffSums));
      newDiffSums[diff.indexOf(question.difficulty)] = newDiffSums[diff.indexOf(question.difficulty)]+1;
      this.props.editBoard({...this.props.board, questions:this.props.board.questions.concat(question),
                                                 diffSums:newDiffSums } , this.props.boardId);
		}

    handleChange =(selectedOptions) =>{
      if (selectedOptions[0])
      {
        console.log(selectedOptions[0]['tagName']);
        this.setState({ tag: selectedOptions[0]['tagName'] })
      }
    }

    handleSelect = (event)=>{
      this.setState({diff: event.target.value});
    }


		render(){

      return (

        <div className="center-me width-80p">

          <h4 className="center-me text-center mb-small mt-large">Select Questions to Add to Board</h4>

          <Row>

            <Col sm={6}>
              <FormControl as="select" defaultValue="Difficulty Level" onChange={this.handleSelect}>
                <option value="All">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Difficult">Difficult</option>
                <option value="Trivia Master">Trivia Master</option>
              </FormControl>
            </Col>

            <Col sm={6}>
              <Form.Group>
                <Typeahead
                  id="tagValue"
                  labelKey="tagName"
                  options={this.props.tags}
                  placeholder="Choose a tag..."
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>

          </Row>

          <ListGroup>

          { this.props.questions.filter((ques)=> ques.tagList.includes(this.state.tag) && 
                                              ((ques.difficulty==this.state.diff)||(this.state.diff=="All"))
          ).map((ques, index) => (
            <ListGroup.Item className="sidebar-item" key={ques.id}>
              <Row>
                <Col xs={1}>
                  <Button variant="outline-success" 
                          size="sm"
                          onClick={()=>{ this.addQuestion(this.props.board, ques) }} >
                    <FontAwesomeIcon icon={faPlus} className="" />
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
	const boards = state.firestore.data.boards ? state.firestore.data.boards : [];
  const board = boards ? boards[boardId] : null;
	return {
		board:board,
    boardId : boardId,
    questions:state.firestore.ordered.questions ? state.firestore.ordered.questions : [],
    tags : state.firestore.ordered.tags ? state.firestore.ordered.tags : []
	}
}


const mapDispatchToProps = (dispatch) => {
    return {
        editBoard: (board, boardId) => dispatch(editBoard(board, boardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSelect);
