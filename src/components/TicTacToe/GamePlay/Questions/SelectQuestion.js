
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
    this.setState(prevState=>({
        answer : thisAnswer
    }))
  }



  // Create the action statements that are shown to the players
  setActionStatement = (correct, type, question) =>{
    if (correct && type==1)
    {
      return this.props.game.players[this.props.game.activeUser]['username']+' answered the question correct at the '+squareLabels[this.props.game.activeSquare]+' square'
    
    }else if ( correct && type==0)
    {
      return userLabels[this.props.game.activeUser]+' answered the question correct at the '+squareLabels[this.props.game.activeSquare]+' square'

      }else if ( !correct && type==1)
      {
        return this.props.game.players[this.props.game.activeUser]['username']+' failed to answer the question correctly at the '+squareLabels[this.props.game.activeSquare]+' square'
      
      }else if ( !correct && type==0)
      {
        return userLabels[this.props.game.activeUser]+' failed to answer the question correctly at the '+squareLabels[this.props.game.activeSquare]+' square'
      }
  }





  // Check to see if the current status produces a winner
  checkForWinner = ()=>{ 
    if ( ( newSquares[0]+newSquares[1]+newSquares[2]==3 ) ||
    ( newSquares[3]+newSquares[4]+newSquares[5]==3 ) ||
    ( newSquares[6]+newSquares[7]+newSquares[8]==3 ) ||
    ( newSquares[0]+newSquares[3]+newSquares[6]==3 ) ||
    ( newSquares[1]+newSquares[4]+newSquares[7]==3 ) ||
    ( newSquares[2]+newSquares[5]+newSquares[8]==3 ) ||
    ( newSquares[0]+newSquares[4]+newSquares[8]==3 ) ||
    ( newSquares[2]+newSquares[4]+newSquares[6]==3 ) )
    {
      if (this.props.game.playerType==0)
      {
        this.props.editGame({...this.props.game, gameOver:true, 
                                                gameWinner:this.props.game.activeUser,
                                                actions:this.props.game.actions.concat('Player X won the game')
        });
      
      }else{
        this.props.editGame({...this.props.game, gameOver:true, 
          gameWinner:this.props.game.activeUser,
          actions:this.props.game.actions.concat(this.props.game.players[this.props.game.activeUser]+' won the game')

        });
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
      if (this.props.game.playerType==0)
      {
        this.props.editGame({...this.props.game, gameOver:true, 
                                                gameWinner:this.props.game.activeUser,
                                                actions:this.props.game.actions.concat('Player 0 won the game')
        });
      
      }else{
        this.props.editGame({...this.props.game, gameOver:true, 
          gameWinner:this.props.game.activeUser,
          actions:this.props.game.actions.concat(this.props.game.players[this.props.game.activeUser]+' won the game')

        });
      }
    }
  }



  // When the answer is attempted
  answerQuestion = () => {

    if ( this.state.answer == this.props.game.activeQuestion.correctAnswer)
    {

      // Check to see of this answer produced a winner
      let newSquares = this.props.game.squareSum;
      newSquares[this.props.game.activeSquare] = this.props.game.activeUser == 0 ? -1 : 1;

      // Prep the action statement
      let actionStatement =  this.setActionStatement(true, this.props.game.playerType, this.props.game.activeQuestion)

      // Update the game and move on if no winner
      this.props.editGame({...this.props.game, activeUser:this.props.game.activeUser == 0 ? 1 : 0,
                                                boardState:0,
                                                actions: this.props.game.actions.concat(actionStatement),
                                                activeQuestion:{},
                                                squareSum:newSquares,
                                                activeSquare:'',
                                                answeredArray:this.props.game.answeredArray.concat(this.props.game.activeQuestion.id),
                                                squares:this.props.game.squares.map((el, mapIndex)=>
                                                    { if (mapIndex==this.props.game.activeSquare)
                                                      { return {...el, inPlay:false, isAnswered:true, displayOptions:0 }
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
                                                activeQuestion:{},
                                                activeSquare:'',
                                                attemptedArray:this.props.game.attemptedArray.concat(this.props.game.activeQuestion.id),
                                                squares:this.props.game.squares.map((el, mapIndex)=>
                                                    { return {...el, inPlay:false, displayOptions:0 }})
      }, this.props.gameId); 

    }

  }



  render(){
		
	
    return (
      <div className="ml-3">
        <h4 className="text-center mt-3 mb-3">Current Question</h4>
        <div className="text-center mt-3 mb-3">
          {this.props.game.activeQuestion.text}
        </div>
        <Form onChange={e => this.setAnswer( e.target.value )}>
          {this.props.game.activeQuestion.answerOptions.map((answer) => (
            <div key={answer} className="mb-3">
              <Form.Check type='radio' id={`check-api-${answer}`}>
                <Form.Check.Input type='radio' isValid value={answer} />
                <Form.Check.Label className="answer-text">{answer}</Form.Check.Label>
              </Form.Check>
            </div>
          ))}

          <Button variant="primary"
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