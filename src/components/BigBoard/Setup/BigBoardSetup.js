
import React from 'react';
import { connect } from 'react-redux';


import '../bigboardStyle.css';

import Container from 'react-bootstrap/Container';
import PlayerType from './PlayerType';
import TimeSettings from './TimeSettings';
import TagImport from './TagImport';
import DiffSelect from './DiffSelect';
import StartButton from './StartButton';
import NumQue from './NumQue';
import QuestionsPer from './QuestionsPer';
import Warnings from './Warnings';

// Action creators
import { editGame } from '../../../store/actions/gameActions';

// Import models
import showProps from '../../../models/showProps.js';


class BigBoardSetup extends React.Component 
{

	constructor(props) {
		super(props);
    this.state = { }
    this.state = { showProps:showProps }
	}


  setQuestions = ()=>{

    let questionSet = this.props.questions.filter((ques)=>{
      if (((ques.difficulty=="Easy" && this.props.game.diff[0]) ||
           (ques.difficulty=="Medium" && this.props.game.diff[1]) ||
           (ques.difficulty=="Difficult" && this.props.game.diff[2]) ||
           (ques.difficulty=="Trivia Master" && this.props.game.diff[3])) &&
           (ques.tagList.some(r=> this.props.game.tagList.includes(r))))
           {
             return true
           }
    });

    this.props.editGame({...this.props.game, potentialQuestions:questionSet.length } , this.props.gameId);
  }

  
	render(){

			return (
				<Container>
				   <h1 className="center-me mt-large mb-small text-center">Setup your Tic Tac Toe Game</h1>
          
          <PlayerType game={ this.props.game } 
                      gameId={ this.props.gameId } 
                      users={this.props.users} 
                      showProps={this.state.showProps}/>

          <hr/>
           
          <TimeSettings game={ this.props.game } 
                        gameId={ this.props.gameId } 
                        showProps={this.state.showProps}/>

          <hr/>


          <TagImport game={ this.props.game } 
                     gameId={ this.props.gameId }
                     tags={ this.props.tags } 
                     showProps={this.state.showProps}
                     setQuestions={this.setQuestions}/>

          <DiffSelect game={ this.props.game } 
                      gameId={ this.props.gameId } 
                      showProps={this.state.showProps}
                      setQuestions={this.setQuestions}/>

          <QuestionsPer game={ this.props.game } 
                        gameId={ this.props.gameId } />

          <NumQue game={ this.props.game } 
                  gameId={ this.props.gameId } />

          <hr/>

          <Warnings game={this.props.game} />

          { ( (this.props.game.players[1] && this.props.game.playerType==1) ||
              ( this.props.game.playerType==0)) &&
            this.props.game.potentialQuestions>=9 &&
            <StartButton game={ this.props.game } 
                       gameId={ this.props.gameId }/>}



				</Container>
			)

	}


}



const mapDispatchToProps = (dispatch) => {
    return {
        editGame: (game, gameId) => dispatch(editGame(game, gameId))
    }
}

export default connect(null, mapDispatchToProps)(BigBoardSetup);