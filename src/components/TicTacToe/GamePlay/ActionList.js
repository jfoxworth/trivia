
import React from 'react';
import '../tictactoeStyle.css';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';


const ActionList = (props) => (

	<Container className="mr-3">

    <Row>

			<Col sm={8}>

				<hr className="mt-large mb-3"/>
        <h4 className="text-center mt-3">List of actions to date</h4>
				<ListGroup variant="flush" >
					{props.actions.map((action) => (
						<ListGroup.Item className="text-center" key={action}>{action}</ListGroup.Item>
					))}
				</ListGroup>

			</Col>

		</Row>

	</Container>
);


export default ActionList;

