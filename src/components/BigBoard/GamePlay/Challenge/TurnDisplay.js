
import React from 'react';
import '../../bigboardStyle.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const ChallengeTurnDisplay = (props) => {
	
	return(

		<Container className="d-flex mt-large mb-3">

			<Row className="mx-auto mt-medium mb-medium">

        { props.game.players.map((pl, index)=>(
            <Col className="mr-medium" key={pl.id}>
              <Row>
    						<div className={'center-me avatars'+pl['avatarpage']+'-image-medium avatar'+pl['avatarpage']+'-'+pl['avatar']}></div>
  						</Row>
              <Row>
							  <div className="text-center center-me mt-small">{pl['username']}</div>
								{index==props.game.activeUser && <div>
									<img src="/images/greencheck.png" className="ml-small mt-small" height="25px" width="25px"/>
							  </div>}
						  </Row>
            </Col>))
        }

			</Row>

		</Container>
		
	);

}
export default ChallengeTurnDisplay;