
import React from 'react';

// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TTTIntro = () => (

  <Container className="mb-large">
    
    <h2 className="mt-large mb-medium text-center center-me">Play Trivia Tic Tac Toe</h2>

    <hr className="ml-superlarge mr-superlarge mb-large"/>

    <Row>

      <Col sm={6} className="text-right">
        <img src="/images/contestants.png" height="300px" />
      </Col>

      <Col sm={6}>
        <h3 className="text-center center-me">How it works</h3>
        <ul className="ml-medium">
          <li className="mt-small lead">Start a game</li>
          <li className="mt-small lead">Challenge a friend</li>
          <li className="mt-small lead">Choose the question subjects</li>
          <li className="mt-small lead">Choose the difficulty level</li>
          <li className="mt-small lead">Play side by side or across the country</li>
        </ul>
      </Col>

    </Row>

  </Container>
);

export default TTTIntro;
