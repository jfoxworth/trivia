
import React from 'react';
import '../../tictactoeStyle.css';


const SimultaneousTurnDisplay = (props) => (

	<div className="text-center mt-large mb-3">

		{!props.game.gameOver && 
			<h4 className="text-center mt-3">Who's turn?</h4> }


		{!props.game.gameOver && props.game.activeUser==0 && 
			<div>
				<img src="/images/greencircle.png" height="75px" width="75px"/>
			</div>}
			
			
		{!props.game.gameOver && props.game.activeUser==1 && 
			<div>
				<img src="/images/redx.png" height="75px" width="75px"/>	
			</div>}

	</div>

);


export default SimultaneousTurnDisplay;