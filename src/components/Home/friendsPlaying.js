
import React from 'react';

// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FriendsPlaying = () => (

  <Container className="mb-large mt-large">
    

    <hr className="ml-superlarge mr-superlarge mb-large"/>

    <Row>

      <Col sm={6} className="text-right">
        <img src="/images/friendsPlaying.png" height="300px" />
      </Col>

      <Col sm={6} className="text-left">
      <h3 className="text-center center-me mb-medium">Challenge your friends</h3>
        <p className="lead">Create a set of questions about a friend or about a 
        group and use these questions to liven up a party.</p>
      </Col>

    </Row>

  </Container>


);

export default FriendsPlaying;
