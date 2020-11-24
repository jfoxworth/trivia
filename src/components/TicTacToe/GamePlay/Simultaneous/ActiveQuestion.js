
import React from 'react';
import '../../tictactoeStyle.css';



const SimultaneousActiveQuestion = (props) => {

  // Nothing given in props
  if ( this.props.game.activeQuestion.displayOptions===undefined )
  {
    return (
      <div className="text-center mb-3">
        <h4 className="text-center mt-3 mb-3">Current Question</h4>
        Select a square to start - Simultaneous
      </div>
    );
  

  // When the question is in play
  }else if ( this.props.game.activeQuestion.displayOptions==1 )
  {

    if ( this.props.game.activeQuestion.type == 'select' )
    {
      return ( <SelectQuestion game={ props.game } 
                               gameId={ props.gameId } /> );
    
    }else if ( this.props.game.activeQuestion.type == 'enter' )
    {
      return ( <EnterQuestion game={ props.game } 
                              gameId={ props.gameId } /> );
    }
  }

}

export default SimultaneousActiveQuestion;