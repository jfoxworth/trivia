
import React from 'react';
import '../tictactoeStyle.css';

import ChallengeTurnDisplay from './Challenge/TurnDisplay';
import SimultaneousTurnDisplay from './Simultaneous/TurnDisplay';


const TurnDisplay = (props) => (

  <div>
    { props.game.playerType==0 && <SimultaneousTurnDisplay game={ props.game } 
                                                           profile={props.profile}
                                                           userId={props.userId} /> }


    { props.game.playerType==1 && <ChallengeTurnDisplay game={ props.game } 
                                                        profile={props.profile}
                                                        userId={props.userId} /> }
	</div>

);


export default TurnDisplay;