
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


// Import CSS
import '../Boards/boardsStyle.css';
import '../mainCSS.css';


// Import Bootstrap Items
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Action creators
import { createBoard } from '../../store/actions/boardActions';


// Model
import modelBoard from '../../models/board.js';


class BoardHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }
		}
		
		handleClick = (e)=>{
			this.props.createQuestion(modelQuestion).then((id)=>
			{ this.setState({ redirect:"/editBoard/"+id })});
		}

    render(){

      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
  
      return (

				<div className="mt-3 mb-3">

          <h1 className="text-center mt-large mb-large">Boards</h1>

          {this.props.authId && <Row className="mb-3">

            <Col sm={8}>
              <p className="lead ml-large text-justify">
                  Boards are simply collections of questions to be used in a game. They are not necessary to play a game, 
                  but are useful if you want to ask specific questions instead of just relying on the tags. Create and edit
                  a board from here and pull it in when you start a game.
              </p>
            </Col>

            <Col sm={4} className="text-center mt-2">
              <Button className="red-color no-border"
                      onClick={()=>{this.handleClick()}}>
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  Add Board
              </Button>{' '}
            </Col>

          </Row>}



          {!this.props.authId && <Row className="mb-3">

            <Col sm={1}></Col>

            <Col sm={10}>
              <p className="lead ml-large text-justify">
                  Boards are simply collections of questions to be used in a game. They are not necessary to play a game, 
                  but are useful if you want to ask specific questions instead of just relying on the tags. Create and edit
                  a board from here and pull it in when you start a game.
              </p>
            </Col>

          </Row>}


				</div>
			)
		}
}


const mapDispatchToProps = (dispatch) => {
    return {
        createBoard: (board) => dispatch(createBoard(board))
    }
}

export default connect(null, mapDispatchToProps)(BoardHeader);
