
import React from 'react';

// Import CSS
import './boardsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Badge from 'react-bootstrap/Badge';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const QProps = (props) => (

	<div>

    <OverlayTrigger
      key={props.board.id+'-easy'}
      placement={'top'}
      overlay={
        <Tooltip id={'top'}>
            Questions ranked Easy in this board
        </Tooltip>
      }>
      <Badge variant="primary" className="easy-color mr-small ml-small">{props.board.diffSums[0]}</Badge>
    </OverlayTrigger>



    <OverlayTrigger
      key={props.board.id+'-easy'}
      placement={'top'}
      overlay={
        <Tooltip id={'top'}>
            Questions ranked Medium in this board
        </Tooltip>
      }>
      <Badge variant="primary" className="medium-color mr-small ml-small">{props.board.diffSums[1]}</Badge>
    </OverlayTrigger>



    <OverlayTrigger
      key={props.board.id+'-easy'}
      placement={'top'}
      overlay={
        <Tooltip id={'top'}>
            Questions ranked Difficult in this board
        </Tooltip>
      }>
      <Badge variant="primary" className="difficult-color mr-small ml-small">{props.board.diffSums[2]}</Badge>
    </OverlayTrigger>




    <OverlayTrigger
      key={props.board.id+'-easy'}
      placement={'top'}
      overlay={
        <Tooltip id={'top'}>
            Questions ranked Trivia-Master in this board
        </Tooltip>
      }>
      <Badge variant="primary" className="trivia-master-color mr-small ml-small">{props.board.diffSums[3]}</Badge>
    </OverlayTrigger>

  </div>
);


export default QProps;


