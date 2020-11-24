
import React from 'react';
import '../tictactoeStyle.css';

import ChallengeActiveQuestion from './Challenge/ActiveQuestion';
import SimultaneousActiveQuestion from './Simultaneous/ActiveQuestion';


const ActiveQuestion = (props) => (

  <div>
    { props.game.playerType==0 && <SimultaneousActiveQuestion game={ props.game } 
                                                              gameId={ props.gameId }
                                                              userId={ props.userId } /> }


    { props.game.playerType==1 && <ChallengeActiveQuestion game={ props.game } 
                                                           gameId={ props.gameId }
                                                           userId={ props.userId }/> }
	</div>

);


export default ActiveQuestion;