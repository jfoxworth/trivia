
import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import '../../mainCSS.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


// Import Components
import TicTacToeSquare from './TicTacToeSquare';


// Action creators
import { editGame } from '../../../store/actions/gameActions';




class MainBoard extends React.Component {

    constructor(props) {
        super(props);
      }

		render(){

      return (

        <div className="mainBoard">

          <h4 className="mt-large mb-large text-center">Game Board</h4>

          <Row>

            <Col className="no-padding col-4">
              <div className="top-square ttt-square">
                <TicTacToeSquare game={ this.props.game }
                                 gameId={ this.props.gameId }
                                 showOptions = {this.showOptions}
                                 questions = { this.props.questions }
                                 userId = { this.props.userId }
                                 questionCountdown={this.props.questionCountdown}
                                 square={0}/>
              </div>
            </Col>

            <Col className="no-padding col-4">
              <div className="center-square top-square ttt-square">
                <TicTacToeSquare game={ this.props.game }
                                 gameId={ this.props.gameId }
                                 showOptions = {this.showOptions}
                                 questions = { this.props.questions }
                                 userId = { this.props.userId }
                                 questionCountdown={this.props.questionCountdown}
                                 square={1}/>
              </div>
            </Col>

            <Col className="no-padding col-4">
              <div className="top-square ttt-square">
                <TicTacToeSquare game={ this.props.game }
                                 gameId={ this.props.gameId }
                                 showOptions = {this.showOptions}
                                 questions = { this.props.questions }
                                 userId = { this.props.userId }
                                 questionCountdown={this.props.questionCountdown}
                                 square={2}/>
              </div>
            </Col>

          </Row>

          <Row>

            <Col className="no-padding col-4">
              <div className="ttt-square">
                <TicTacToeSquare game={ this.props.game }
                                 gameId={ this.props.gameId }
                                 showOptions = {this.showOptions}
                                 questions = { this.props.questions }
                                 userId = { this.props.userId }
                                 questionCountdown={this.props.questionCountdown}
                                 square={3}/>
              </div>
            </Col>

            <Col className="no-padding col-4">
              <div className="center-square ttt-square">
                <TicTacToeSquare game={ this.props.game }
                                 gameId={ this.props.gameId }
                                 showOptions = {this.showOptions}
                                 questions = { this.props.questions }
                                 userId = { this.props.userId }
                                 questionCountdown={this.props.questionCountdown}
                                 square={4}/>
              </div>
            </Col>

            <Col className="no-padding col-4">
              <div className="ttt-square">
                <TicTacToeSquare game={ this.props.game }
                                 gameId={ this.props.gameId }
                                 showOptions = {this.showOptions}
                                 questions = { this.props.questions }
                                 userId = { this.props.userId }
                                 questionCountdown={this.props.questionCountdown}
                                 square={5}/>
              </div>
            </Col>

          </Row>

          <Row>

            <Col className="no-padding col-4">
              <div className="bottom-square ttt-square">
                <TicTacToeSquare game={ this.props.game }
                                 gameId={ this.props.gameId }
                                 showOptions = {this.showOptions}
                                 questions = { this.props.questions }
                                 userId = { this.props.userId }
                                 questionCountdown={this.props.questionCountdown}
                                 square={6}/>
              </div>
            </Col>

            <Col className="no-padding col-4">
              <div className="center-square bottom-square ttt-square">
                <TicTacToeSquare game={ this.props.game }
                                 gameId={ this.props.gameId }
                                 showOptions = {this.showOptions}
                                 questions = { this.props.questions }
                                 userId = { this.props.userId }
                                 questionCountdown={this.props.questionCountdown}
                                 square={7}/>
                                </div>
            </Col>

            <Col className="no-padding col-4">
              <div className="bottom-square ttt-square">
                <TicTacToeSquare game={ this.props.game }
                                 gameId={ this.props.gameId }
                                 showOptions = {this.showOptions}
                                 questions = { this.props.questions }
                                 userId = { this.props.userId }
                                 questionCountdown={this.props.questionCountdown}
                                 square={8}/>
              </div>
            </Col>

          </Row>

        </div>


			) 
		}
}


const mapDispatchToProps = (dispatch) => {
  return {
      editGame: (game, gameId) => dispatch(editGame(game, gameId))
  }
}


export default connect(null, mapDispatchToProps)(MainBoard);
