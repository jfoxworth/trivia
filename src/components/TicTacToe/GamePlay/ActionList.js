
import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
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
					{props.actions.map((action, index) => (
						<ListGroup.Item className="text-center shallow-bg" key={action+'-'+index}>
							<Row>	 
								<div className="mr-small">{ format(action.dateTime.toDate(), 'MM/dd/yyyy pp') }</div>
								<div>{action.text}</div>
							</Row>
						</ListGroup.Item>
					))}
				</ListGroup>

			</Col>

		</Row>

	</Container>
);


export default ActionList;

