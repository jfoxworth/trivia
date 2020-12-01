

import React from 'react';


// Import CSS
import './profileStyle.css';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const ProfileImage = (props) => (

    <Container>
        <Row>
            <img className="imageHolder" src="/images/profileImage.png" width="200px" height="200px"/>
        </Row>

        <Row>
            <h2 className="text-center user-title">{props.profile.username}</h2>
        </Row>
    </Container>
);


export default ProfileImage;

