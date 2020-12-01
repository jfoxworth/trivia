
import React from 'react';
import '../../tictactoeStyle.css';

import Row from 'react-bootstrap/Row';


const ChallengeGameWinner = (props) => (

    <div className="text-center mb-3">

        <h4 className="text-center mt-3">Winner!!!</h4> 

				{ props.game.gameWinner==0 &&
					<div>
						<div className="text-center center-me mt-small">
							<img src="/images/profileImage.png" height="75px" width="75px"/>
						</div>
						<Row>
							<div className="text-center center-me mt-small">
									{props.game.players[0]['username']}
									<img src="/images/greencircle.png" className="ml-small" height="25px" width="25px"/>
							</div>
            </Row>
					</div>}


					{ props.game.gameWinner==1 &&
					<div>
						<div className="text-center center-me mt-small">
							<img src="/images/profileImage.png" height="75px" width="75px"/>
						</div>
						<Row>
							<div className="text-center center-me mt-small">
									{props.game.players[1]['username']}
									<img src="/images/redx.png" className="ml-small" height="25px" width="25px"/>
							</div>
            </Row>
					</div>}


	</div>
);


export default ChallengeGameWinner;