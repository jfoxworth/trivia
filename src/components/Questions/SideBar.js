
import React from 'react';

// Import CSS
import './questionsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';


const SideBar = () => (

	<Col>

        <ListGroup variant="flush" className="sidebar-container">
        
            <ListGroup.Item className="sidebar-title text-center"><h5>Difficulty</h5></ListGroup.Item>

            {['All', 'Easy', 'Medium', 'Difficult', 'Trivia Master'].map((level, index) => (
                <ListGroup.Item className="sidebar-item" key={level}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="{level}" />
                        <label className="form-check-label ml-small">
                            {level}
                        </label>
                        { level=='Easy' && <Badge pill variant="primary" className="ml-small easy-color">-</Badge> }
                        { level=='Medium' && <Badge pill variant="primary" className="ml-small medium-color">-</Badge> }
                        { level=='Difficult' && <Badge pill variant="primary" className="ml-small difficult-color">-</Badge> }
                        { level=='Trivia Master' && <Badge pill variant="primary" className="ml-small trivia-master-color">-</Badge> }
                    </div>
                </ListGroup.Item>
            ))}


            <ListGroup.Item className="sidebar-title text-center"><h5>Subjects</h5></ListGroup.Item>

        </ListGroup>

    </Col>
);


export default SideBar;
