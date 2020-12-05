
import React from 'react';

// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PlayAnywhere = () => (

  <Container className="mb-large mt-large">
    

    <hr className="ml-superlarge mr-superlarge mb-large"/>

    <Row>

      <Col sm={6} className="text-right">
        <img src="/images/player1.png" height="300px" />
      </Col>

      <Col sm={6}>
      <h3 className="text-center center-me mb-medium">Play Together or Across the World</h3>
        <p className="lead">Play with everyone at the same computer or challenge someone across the nation. 
        Simply create an account, start a game, and then either choose to play at one computer or find your 
        friend's account and challenge them. You can come back at any time and resume the game.</p>
      </Col>

    </Row>

  </Container>


);

export default PlayAnywhere;
