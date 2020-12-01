
import React from 'react';
import '../../tictactoeStyle.css';

import SelectQuestion from '../Questions/SelectQuestion';
import EnterQuestion from '../Questions/EnterQuestion';


const ChallengeActiveQuestion = (props) => (

  <div className="mb-3">
    
    { props.game.players[props.game.activeUser]['id'] != props.userId &&
      <div>Waiting on your opponent to answer</div>
    }

    { props.game.players[props.game.activeUser]['id'] == props.userId &&
      !props.game.activeQuestion.type &&
      <div>Select a square</div>
    }


    { props.game.players[props.game.activeUser]['id'] == props.userId &&
      props.game.activeQuestion.type=="Select" &&
      <SelectQuestion game={ props.game } 
                      gameId={props.gameId}  />
    }

    { props.game.players[props.game.activeUser]['id'] == props.userId &&
      props.game.activeQuestion.type=="Enter" &&
      <EnterQuestion game={ props.game } 
                     gameId={props.gameId}  />
    }

	</div>
);


export default ChallengeActiveQuestion;