

import React from 'react';

// Import CSS
import '../mainCSS.css';

// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const BigBoardOption = (props) => (

	<div className="text-center">

    <Row className="mt-3 mb-3">
      <Col lg={1}></Col>
      <Col lg={6}>
        <p className="text-justify lead">Start a Big Board trivia game by clicking the button below the image. You can then 
        choose to import a board of questions or just use tags and difficulty settings. You 
        can play the game from your computer by taking turns or by challenging another user 
        playing on another computer.</p>
      </Col>
      <Col lg={4}>
        <div><img src="/images/bigboard.jpg" height="200" /></div>
        <div className="mt-3 mb-3">
          <Button variant="primary" onClick={()=>props.setModalShow(true)}>
            Start Big Board Game
          </Button>
        </div>
      </Col>
      <Col lg={1}></Col>
    </Row>
  
  </div>
);


export default BigBoardOption;
