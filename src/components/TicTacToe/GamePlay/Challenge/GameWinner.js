
import React from 'react';
import '../../tictactoeStyle.css';


const ChallengeGameWinner = (props) => (

    <div className="text-center mb-3">

        { props.game.gameOver && <h4 className="text-center mt-3">Winner!!!</h4> }
        { props.game.gameOver && props.game.gameWinner==0 && <div><img src="/images/greencircle.png" height="150px" width="150px"/>	</div>}
        { props.game.gameOver && props.game.gameWinner==1 && <div><img src="/images/redx.png" height="150px" width="150px"/>	</div>}
	</div>
);


export default ChallengeGameWinner;