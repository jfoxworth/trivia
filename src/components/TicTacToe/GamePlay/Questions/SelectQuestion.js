
import React from 'react';
import { connect } from 'react-redux';

import '../../tictactoeStyle.css';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Action creators
import { editGame } from '../../../../store/actions/gameActions';



// Squares label
const squareLabels = [
	'top left',
	'top center',
	'top right',
	'middle left',
	'center',
	'middle right',
	'bottom left',
	'bottom center',
	'bottom right'
];

// Users Labels
const userLabels = [
	'Player O',
	'Player X'
];





class SelectQuestion extends React.Component 
{
  
	constructor(props) {
    super(props);
    this.state = { answer:'' }
  }
  
  

  // A place to hold the answer given
  setAnswer = ( thisAnswer ) => {
    console.log('Setting answer to '+thisAnswer);
    this.setState(prevState=>({
        answer : thisAnswer
    }))
  }



  // Create the action statements that are shown to the players
  setActionStatement = (correct, type, question) =>{
    if (correct && type==1)
    {
      return { correct:correct,
               type:type,
               question:question,
               dateTime: new Date(),
               text: this.props.game.players[this.props.game.activeUser]['username']+' answered the question correct at the '+squareLabels[this.props.game.activeSquare]+' square'
      }
    
    }else if ( correct && type==0)
    {
      return { correct:correct,
        type:type,
        question:question,
        dateTime: new Date(),
        text: userLabels[this.props.game.activeUser]+' answered the question correct at the '+squareLabels[this.props.game.activeSquare]+' square'
      }

      }else if ( !correct && type==1)
      {
        return { correct:correct,
          type:type,
          question:question,
          dateTime: new Date(),
          text: this.props.game.players[this.props.game.activeUser]['username']+' failed to answer the question correctly at the '+squareLabels[this.props.game.activeSquare]+' square'
        }
      
      }else if ( !correct && type==0)
      {
        return { correct:correct,
          type:type,
          question:question,
          dateTime: new Date(),
          text: userLabels[this.props.game.activeUser]+' failed to answer the question correctly at the '+squareLabels[this.props.game.activeSquare]+' square'
        }
      }
  }





  // Check to see if the current status produces a winner
  checkForWinner = (newSquares)=>{ 
    console.log('Checking for winner');
    console.log(newSquares);
    if ( ( newSquares[0]+newSquares[1]+newSquares[2]==3 ) ||
    ( newSquares[3]+newSquares[4]+newSquares[5]==3 ) ||
    ( newSquares[6]+newSquares[7]+newSquares[8]==3 ) ||
    ( newSquares[0]+newSquares[3]+newSquares[6]==3 ) ||
    ( newSquares[1]+newSquares[4]+newSquares[7]==3 ) ||
    ( newSquares[2]+newSquares[5]+newSquares[8]==3 ) ||
    ( newSquares[0]+newSquares[4]+newSquares[8]==3 ) ||
    ( newSquares[2]+newSquares[4]+newSquares[6]==3 ) )
    {
      console.log('Winner');
      if (this.props.game.playerType==0)
      {
        this.props.editGame({...this.props.game, gameOver:true, 
                                                gameWinner:this.props.game.activeUser }, this.props.gameId );
      
      }else{
        this.props.editGame({...this.props.game, gameOver:true, 
          gameWinner:this.props.game.activeUser}, this.props.gameId);
      }
    }

    if ( ( newSquares[0]+newSquares[1]+newSquares[2]==-3 ) ||
        ( newSquares[3]+newSquares[4]+newSquares[5]==-3 ) ||
        ( newSquares[6]+newSquares[7]+newSquares[8]==-3 ) ||
        ( newSquares[0]+newSquares[3]+newSquares[6]==-3 ) ||
        ( newSquares[1]+newSquares[4]+newSquares[7]==-3 ) ||
        ( newSquares[2]+newSquares[5]+newSquares[8]==-3 ) ||
        ( newSquares[0]+newSquares[4]+newSquares[8]==-3 ) ||
        ( newSquares[2]+newSquares[4]+newSquares[6]==-3 ) )
    {
      console.log('Winner');
      if (this.props.game.playerType==0)
      {
        this.props.editGame({...this.props.game, gameOver:true, 
                                                gameWinner:this.props.game.activeUser }, this.props.gameId );
      
      }else{
        this.props.editGame({...this.props.game, gameOver:true, 
                                                 gameWinner:this.props.game.activeUser}, this.props.gameId );
      }
    }
  }



  // When the answer is attempted
  answerQuestion = () => {

    if ( this.state.answer == this.props.game.activeQuestion.answerOptions[this.props.game.activeQuestion.correctAnswer])
    {

      // Check to see of this answer produced a winner
      let newSquares = JSON.parse(JSON.stringify(this.props.game.squareSum));
      newSquares[this.props.game.activeSquare] = this.props.game.activeUser == 0 ? -1 : 1;

      // Prep the action statement
      let actionStatement =  this.setActionStatement(true, this.props.game.playerType, this.props.game.activeQuestion)

      // Update the game and move on if no winner
      this.props.editGame({...this.props.game, activeUser:this.props.game.activeUser == 0 ? 1 : 0,
                                                boardState:0,
                                                actions: this.props.game.actions.concat(actionStatement),
                                                answeredArray:this.props.game.answeredArray.concat(this.props.game.activeQuestion.id),
                                                activeQuestion:{},
                                                squareSum:newSquares,
                                                activeSquare:'',
                                                squares:this.props.game.squares.map((el, mapIndex)=>
                                                    { if (mapIndex==this.props.game.activeSquare)
                                                      { return {...el, inPlay:false, isAnswered:true, displayOptions:0, answerPlayer:this.props.game.activeUser }
                                                    }else { return {...el, inPlay:false, displayOptions:0 } } }
                                                    ), 
        }, this.props.gameId);

      this.checkForWinner(newSquares);
  

    }else
    {
      // Prep the action statement
      let actionStatement =  this.setActionStatement(false, this.props.game.playerType, this.props.game.activeQuestion)

      // Update the game and move on if no winner
      this.props.editGame({...this.props.game, activeUser:this.props.game.activeUser == 0 ? 1 : 0,
                                                boardState:0,
                                                actions: this.props.game.actions.concat(actionStatement),
                                                answeredArray:this.props.game.attemptedArray.concat(this.props.game.activeQuestion.id),
                                                activeQuestion:{},
                                                activeSquare:'',
                                                squares:this.props.game.squares.map((el, mapIndex)=>
                                                    { return {...el, inPlay:false, displayOptions:0 }})
      }, this.props.gameId); 

    }

  }



  render(){
		
	
    return (
      <div className="ml-3">
        <h4 className="mt-3 mb-3">Current Question</h4>
        <div className="mt-3 mb-3">
          {this.props.game.activeQuestion.text}
        </div>
        <Form onChange={e => this.setAnswer( e.target.value )}>
          {this.props.game.activeQuestion.answerOptions.map((answer) => (
            <div key={answer} className="mb-3">
              <Form.Check type='radio' id={`check-api-${answer}`}>
                <Form.Check.Input type='radio' isValid value={answer} name="selectOptions"/>
                <Form.Check.Label className="answer-text">{answer}</Form.Check.Label>
              </Form.Check>
            </div>
          ))}

          <Button variant="primary"
                  className="center-me text-center"
                  onClick={ ()=>{ this.answerQuestion( ) } }>
            Submit Answer
          </Button>
        </Form>

        <div className="mt-3">Select your desired choice from the list above and click submit</div>
      </div>
    );
  
  }


}




const mapDispatchToProps = (dispatch) => {
  return {
      editGame: (game, gameId) => dispatch(editGame(game, gameId))
  }
}


export default connect(null, mapDispatchToProps)(SelectQuestion);