
import React from 'react';
import { connect } from 'react-redux';

import '../../tictactoeStyle.css';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DiffBadge from '../../../Shared/Badges/DiffBadge';

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

const diff = ['Easy', 'Medium', 'Difficult', 'Trivia Master'];
const diffColor = ['easy-color', 'medium-color', 'difficult-color', 'trivia-master-color'];





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
  setActionStatement = (correct, type, question, user) =>{
    console.log('Setting action statement');
    if (correct && type==1)
    {
      return { correct:correct,
               question:question,
               dateTime: new Date(),
               text: this.props.game.players[user]['username']+' answered the question correct at index '+index+' of column '+question.tag
      }
    
    }else if ( correct && type==0)
    {
      return { correct:correct,
        type:type,
        question:question,
        dateTime: new Date(),
        text: userLabels[user]+' answered the question correct at index '+index+' of column '+this.props.game.actieQuestion.tag
      }

      }else if ( !correct && type==1)
      {
        return { correct:correct,
          type:type,
          question:question,
          dateTime: new Date(),
          text: this.props.game.players[user]['username']+' failed to answer the question correctly at index '+index+' of column '+question.tag
        }
      
      }else if ( !correct && type==0)
      {
        return { correct:correct,
          type:type,
          question:question,
          dateTime: new Date(),
          text: userLabels[user]+' failed to answer the question correctly at index '+index+' of column '+question.tag
        }
      }
  }


  // When the answer is attempted
  answerQuestion = () => {

    // Prep the action statement
    let actionStatement =  this.setActionStatement(this.state.answer == this.props.game.activeQuestion.answerOptions[this.props.game.activeQuestion.correctAnswer], 
                                                   this.props.game.gameType, 
                                                   this.props.game.activeQuestion, 
                                                   this.props.tag, this.props.game.activeUser);


    if ( this.state.answer == this.props.game.activeQuestion.answerOptions[this.props.game.activeQuestion.correctAnswer] )
    {

      // Update the game
      this.props.editGame({...this.props.game, activeUser:this.props.game.activeUser >= this.props.game.players.length-1 ? 0 : this.props.game.activeUser+1,
                                                boardState:0,
                                                actions: this.props.game.actions.concat(actionStatement),
                                                answeredArray:this.props.game.answeredArray.concat(this.props.game.activeQuestion.id),
                                                activeQuestion:{},
                                                questionSet:{...this.props.game.questionSet, 
                                                    questions:this.props.game.questionSet.questions.map(q=>{return {...q, isAnswered:true, displayOptions:0, answerPlayer:this.props.game.activeUser}})},
      
                          }, this.props.gameId)  
      
    }else
    {
      this.props.editGame({...this.props.game, activeUser:this.props.game.activeUser >= this.props.game.players.length-1 ? 0 : this.props.game.activeUser+1,
        boardState:0,
        actions: this.props.game.actions.concat(actionStatement),
        answeredArray:this.props.game.answeredArray.concat(this.props.game.activeQuestion.id),
        activeQuestion:{},
        questionSet:{...this.props.game.questionSet, 
            questions:this.props.game.questionSet.questions.map(q=>{return {...q, isAnswered:false, displayOptions:0 }})},

                          }, this.props.gameId)  
    }
  }



  render(){
		
	
    return (
      <div className="ml-3">
        <h4 className="mt-3 mb-3">Current Question</h4>

        <Row>
          <Col sm={6}>
            {this.props.game.activeQuestion.tagList.map((tag)=>(
              <span key={'badge-'+tag} className="badge badge-secondary mr-small">{tag}</span>        
            ))}
          </Col>
          <Col sm={6}>
            <DiffBadge badgeType = {this.props.game.activeQuestion.difficulty}/>      
          </Col>
        </Row>

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