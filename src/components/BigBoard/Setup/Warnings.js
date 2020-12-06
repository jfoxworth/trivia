

import React from 'react';

import Container from 'react-bootstrap/Container';

import '../../mainCSS.css';



const Warnings = (props) => (

  <Container>
  { 
    !props.game.players[1] &&
    props.game.playerType==1 &&
    <Container>
      <div className="alert alert-info">
        <strong>At least two players needed!</strong> Challenge a player or change the type.
      </div>
    </Container>
  }

  { 
    props.game.potentialQuesions<9 &&
    <Container>
      <div className="alert alert-info">
        <strong>More Questions Needed!</strong> Add a tag or change difficulty settings.
      </div>
    </Container>
    }

  </Container>

)


export default Warnings;
