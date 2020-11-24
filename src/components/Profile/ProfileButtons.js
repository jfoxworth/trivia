

import React from 'react';
import { Link } from 'react-router-dom';

// Import CSS
import './profileStyle.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';


const ProfileButtons = () => (

    <Row>
        <Col></Col>
        
        <Col>
            <div className="text-center center-me margin-top">
                <Button variant="primary">
                    <FontAwesomeIcon icon={faQuestionCircle} className="margin-right-small" />
                    <Link to="/questions" className="white-text">My Questions</Link>
                </Button>{' '}
            </div>
        </Col>
        
        <Col>
            <div className="text-center center-me margin-top">
                <Button variant="secondary">
                    <FontAwesomeIcon icon={ faCubes } className="margin-right-small" />
                    <Link to="/boards" className="white-text">My Boards</Link>
                </Button>{' '}
            </div>
        </Col>
        
        <Col>
            <div className="text-center center-me margin-top">
                <Button variant="info">
                    <FontAwesomeIcon icon={faGamepad} className="margin-right-small" />
                    <Link to="/games" className="white-text">My Games</Link>
                </Button>{' '}
            </div>
        </Col>
        
        <Col></Col>
    </Row>

);


export default ProfileButtons;

