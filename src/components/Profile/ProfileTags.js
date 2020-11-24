

import React from 'react';


// Import CSS
import './profileStyle.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const ProfileTags = () => (

        <Row>
            <Col></Col>
            
            <Col>
                <Row><h3 className="text-center center-me">22</h3></Row>
                <Row><div className="text-center center-me margin-top-small">Number of Questions</div></Row>
            </Col>
            
            <Col>
                <Row><h3 className="text-center center-me">45</h3></Row>
                <Row><div className="text-center center-me margin-top-small">Number of Boards</div></Row>
            </Col>
            
            <Col>
                <Row><h3 className="text-center center-me">22</h3></Row>
                <Row><div className="text-center center-me margin-top-small">Number of Games</div></Row>
            </Col>
            
            <Col></Col>
        </Row>
);


export default ProfileTags;

