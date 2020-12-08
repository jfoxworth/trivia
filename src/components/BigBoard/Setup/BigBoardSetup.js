
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


  /* This function is called often and sets the questions for the board
     whenever a parameter is changed. */
  setQuestions = ()=>{

    let diffSum = (this.props.game.diff[0] ? 1 : 0) + (this.props.game.diff[1] ? 1 : 0) +(this.props.game.diff[2] ? 1 : 0);  // Not using trivia master on purpose here
    let qBreak = Math.round(this.props.game.questionsPerColumn/diffSum);
    let diffArray = ['Easy', 'Medium', 'Difficult'];

    let questionSet={};
    questionSet.qBreak=qBreak;
    questionSet.tagArray = JSON.parse(JSON.stringify(this.props.game.tagList));
    questionSet.questions=[];
    let answeredArray = [];

    questionSet.tagArray.forEach((tag, index) => {
      diffArray.forEach((diff, diffIndex) => {

        if ( this.props.game.diff[diffIndex] )
        {
          let eQues = this.props.questions.filter((ques)=>{
            if ( ( ques.difficulty==diffArray[diffIndex]) && (ques.tagList.includes(tag))){ return true }
          });
          let eArr=this.shuffle(eQues.length, qBreak);
          for (let a=0; a<eArr.length; a++){
            questionSet.questions.push(eQues[eArr[a]]);
            answeredArray.push(eArr[a]['id']);
          }
        }

      });
    });

    questionSet.bonusQuestion = this.setBonusQuestion(questionSet, diffArray);
    console.log(questionSet);

    this.props.editGame({...this.props.game, questionSet:questionSet } , this.props.gameId);

  }




  setBonusQuestion =(questionSet, diffArray)=>{
    /* Set the bonus question at the end of the game */
    let bonusIndex = this.props.game.diff[3] ? 3 : 
                     this.props.game.diff[2] ? 2 : 
                     this.props.game.diff[1] ? 1 :
                     this.props.game.diff[0] ? 0 : '';
    let tagIndex = Math.floor(Math.random() * questionSet.tagArray.length);

    let tempB = this.props.questions.filter((ques)=>{
      if ( ( ques.difficulty==diffArray[bonusIndex]) && 
           (ques.tagList.includes(questionSet.tagArray[tagIndex])) &&
           !this.props.game.answeredArray.includes(ques.id)){ return true }
    });

    if (tempB.length==0)
    {
      tempB = this.props.questions.filter((ques)=>{
        if ( ( ques.difficulty==diffArray[bonusIndex-1]) && 
             (ques.tagList.includes(questionSet.tagArray[tagIndex])) &&
             !this.props.game.answeredArray.includes(ques.id)){ return true }
      });  
    }
    return tempB[Math.floor(Math.random() * tempB.length)];
    

  }





  /* Takes is a length of an array, generates array from 0 to that length, 
     randomizes it, returns first returnNum values. Equivalent to selecting random values */
  shuffle = (arrLength, returnNum)=> {
    for (var array=[],i=0;i<arrLength;++i) array[i]=i;
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array.splice(0,returnNum);
  }
  






	render(){

			return (
				<Container>
				   <h1 className="center-me mt-large mb-small text-center">Setup your Big Board Game</h1>
          
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
                        gameId={ this.props.gameId }
                        setQuestions={this.setQuestions} />

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