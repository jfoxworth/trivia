

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


// Import CSS
import '../mainCSS.css';

// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

// Action creators
import { createGame } from '../../store/actions/gameActions';


// Model
import modelGame from '../../models/game.js';


  
class TicTacToeOption extends React.Component {

  constructor(props) {
      super(props);
      this.state = { }
  }
  
  render(){

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }


    return(

      <div className="text-center">

        <Row><h1 className="center-me mt-large mb-large">Trivia Tic Tac Toe</h1></Row>

        <Row className="mt-3 mb-3">
      
          <Col lg={1}></Col>

          <Col lg={4}>
            <div><img src="/images/TTT1.png" height="200" /></div>
          </Col>
          <Col lg={6}>
            <p className="text-justify lead">Start a Tic Tac Toe trivia game by clicking the button below the image. You can then 
            choose to import a board of questions or just use tags and difficulty settings. You 
            can play the game from your computer by taking turns or by challenging another user 
            playing on another computer.</p>
          </Col>

          <Col lg={1}></Col>

        </Row>


        <Row>
  
          <Col lg={1}></Col>

          <Col lg={4}>
            { this.props.auth &&
              <div className="mt-3 mb-3">
                  <Button variant="primary" onClick={()=>{this.props.createGame(modelGame).then((id)=> 
                                                      { this.setState({ redirect: "/TicTacToe/"+id });} )}}>
                    Start Tic Tac Toe Game
                  </Button>
            </div> }
          </Col>
          <Col lg={6}>
            { !this.props.auth &&
              <div className="mt-3 mb-3">
                  <Button variant="info" onClick={()=>{ this.setState({ redirect: "/register"+id });} }>
                    Create an account
                  </Button>
              </div>
            }
          </Col>

          <Col lg={1}></Col>

        </Row>
      
      </div>
    );

  }

}


const mapDispatchToProps = (dispatch) => {
  return {
      createGame: (game) => dispatch(createGame(game))
  }
}

export default connect(null, mapDispatchToProps)(TicTacToeOption);