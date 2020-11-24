
import React from 'react';
import '../../tictactoeStyle.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const ChallengeTurnDisplay = (props) => {
	
	const user0Status = props.game.activeUser == 0 ? 'active mt-medium width-250 center-me' : 'inactive mt-medium width-250 center-me';
	const user1Status = props.game.activeUser == 1 ? 'active mt-small width-250 center-me' : 'inactive mt-small width-250 center-me';

	return(

		<div className="text-center mt-large mb-3">

			{ !props.game.gameOver && 
				<h4 className="text-center mt-3">Who's turn?</h4> }

			<Row className="mt-medium mb-medium">

				{ !props.game.gameOver && 
					<Col>
						{props.game.activeUser == 0 &&
									<img src="/images/greencheck.png" className="check-show" height="25px" width="25px"/>}
						<div className="text-center center-me mt-small">
							<img src="/images/profileImage.png" height="75px" width="75px"/>
						</div>
						<Row>
							<div className="text-center center-me mt-small">
								{props.game.players[0]['username']}
								<img src="/images/greencircle.png" className="ml-small" height="25px" width="25px"/>
							</div>
						</Row>
					</Col>}
				
				
					{ !props.game.gameOver && 
					<Col>
						{props.game.activeUser == 1 &&
									<img src="/images/greencheck.png" className="check-show" height="25px" width="25px"/>}
						<div className="text-center center-me mt-small">
							<img src="/images/profileImage.png" height="75px" width="75px"/>
						</div>
						<Row>
							<div className="text-center center-me mt-small">
								{props.game.players[1]['username']}
								<img src="/images/redx.png" className="ml-small" height="25px" width="25px"/>
							</div>
						</Row>
					</Col>}


			</Row>

		</div>
		
	);

}
export default ChallengeTurnDisplay;