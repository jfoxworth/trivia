
import React from 'react';
import '../bigboardStyle.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ScoreDisplay = (props) => (

  <Container className="d-flex mb-3">

    <Row className="mx-auto score-row">

      { props.game.players.map((tp, pIndex)=>(
          <div className="score-text" key={'score-'+pIndex}>
            { props.game.questionSet.questions.reduce((acc, cQ, qIndex)=>(((pIndex==cQ.answerPlayer) && cQ.isAnswered) ? acc+(qIndex+1)*100 : acc+0), 0) }
          </div>
      ))
      }

    </Row>

  </Container>

);


export default ScoreDisplay;