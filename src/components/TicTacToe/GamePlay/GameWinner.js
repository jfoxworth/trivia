
import React from 'react';
import '../tictactoeStyle.css';

import ChallengeGameWinner from './Challenge/GameWinner';
import SimultaneousGameWinner from './Simultaneous/GameWinner';


const GameWinner = (props) => (

  <div>
    { props.game.playerType==0 && <SimultaneousGameWinner game={ props.game }/> }
    { props.game.playerType==1 && <ChallengeGameWinner game={ props.game }/> }
	</div>

);


export default GameWinner;