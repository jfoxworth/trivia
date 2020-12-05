
import React from 'react';
import '../../tictactoeStyle.css';

import SelectQuestion from '../Questions/SelectQuestion';
import EnterQuestion from '../Questions/EnterQuestion';


const SimultaneousActiveQuestion = (props) => {


  // Nothing given in props
  if ( !props.game.activeQuestion.displayOptions )
  {
    return (
      <div className="text-center mb-3">
        <h4 className="text-center mt-3 mb-3">Current Question</h4>
        Select a square to start
      </div>
    );
  

  // When the question is in play
  }else if ( props.game.activeQuestion.displayOptions==1 )
  {

    if ( props.game.activeQuestion.type == 'Select' )
    {
      return ( <SelectQuestion game={ props.game } 
                               gameId={ props.gameId } /> );
    
    }else if ( props.game.activeQuestion.type == 'Enter' )
    {
      return ( <EnterQuestion game={ props.game } 
                              gameId={ props.gameId } /> );
    }
  }
  return props.game.activeQuestion.displayOptions

  
}

export default SimultaneousActiveQuestion;