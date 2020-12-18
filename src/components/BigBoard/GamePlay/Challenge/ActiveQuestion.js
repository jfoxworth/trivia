
import React from 'react';
import '../../bigboardStyle.css';

import SelectQuestion from '../../../TicTacToe/GamePlay/Questions/SelectQuestion';
import EnterQuestion from '../../../TicTacToe/GamePlay/Questions/EnterQuestion';


const ChallengeActiveQuestion = (props) => (

  <div className="mb-3">
    
    { props.game.players[props.game.activeUser]['id'] != props.userId &&
      <div className="text-center display-4">Waiting on your opponent to answer</div>
    }

    { props.game.players[props.game.activeUser]['id'] == props.userId &&
      (!props.game.activeQuestion.type || props.game.activeQuestion.displayOptions==0) &&
      <div className="text-center display-4">Select a square</div>
    }


    { props.game.players[props.game.activeUser]['id'] == props.userId &&
      (props.game.activeQuestion.type=="Select" && props.game.activeQuestion.displayOptions==1) &&
      <SelectQuestion game={ props.game } 
                      gameId={props.gameId}  />
    }

    { props.game.players[props.game.activeUser]['id'] == props.userId &&
      (props.game.activeQuestion.type=="Enter" && props.game.activeQuestion.displayOptions==1) &&
      <EnterQuestion game={ props.game } 
                     gameId={props.gameId}  />
    }

	</div>
);


export default ChallengeActiveQuestion;