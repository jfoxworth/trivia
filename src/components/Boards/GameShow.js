

import React from 'react';

// Import CSS
import '../mainCSS.css';


// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faColumns } from '@fortawesome/free-solid-svg-icons';


// Bootstrap Items
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



const GameShow = (props) => (

	<div>


    {props.type==0 && 
      <OverlayTrigger
        key={props.type+'-tictactoe'}
        placement={'top'}
        overlay={
          <Tooltip id={'top'}>
              This is a Tic Tac Toe board
          </Tooltip>
      }>
        <FontAwesomeIcon icon={faHashtag} className="margin-right-small" />
      </OverlayTrigger>}


      {props.type==1 && 
      <OverlayTrigger
        key={props.type+'-bigboard'}
        placement={'top'}
        overlay={
          <Tooltip id={'top'}>
              This is a Big Board board
          </Tooltip>
      }>
        <FontAwesomeIcon icon={faColumns} className="margin-right-small" />
      </OverlayTrigger>}
        

  </div>


);


export default GameShow;

