
import React from 'react';
import '../../bigboardStyle.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const SimultaneousTurnDisplay = (props) => {
	
	return(

		<Container className="text-center mt-large mb-3">

			<Row className="mt-medium mb-medium">

        { props.game.players.map((pl)=>{
            <Col>
              <Row>
								<div><img src="/images/defaultUser" width="200" /></div>
  						</Row>
              <Row>
							  <div className="text-center center-me mt-small">{pl['username']}
								  <img src="/images/greencircle.png" className="ml-small" height="25px" width="25px"/>
							  </div>
						  </Row>
            </Col>})
        }

			</Row>

		</Container>
		
	);

}
export default SimultaneousTurnDisplay;