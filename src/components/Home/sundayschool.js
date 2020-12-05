
import React from 'react';

// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SundaySchool = () => (

  <Container className="mb-large mt-large">
    

    <hr className="ml-superlarge mr-superlarge mb-large"/>

    <Row>

      <Col sm={6}>
      <h3 className="text-center center-me mb-medium">Create a game for kids</h3>
        <p className="lead">You can create your own tag and then add questions to it 
        and use those questions in your own game. Use it to challenge a Sunday Sunday
        School group with weekly questions or quiz a home school group.</p>
      </Col>

      <Col sm={6} className="text-left">
        <img src="/images/childrenStudy.png" height="300px" />
      </Col>

    </Row>

  </Container>


);

export default SundaySchool;
