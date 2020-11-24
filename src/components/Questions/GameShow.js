
import React from 'react';

// Import CSS
import './questionsStyle.css';
import '../mainCSS.css';

// Import bootstrap items
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faColumns } from '@fortawesome/free-solid-svg-icons';



const GameShow = (props) => (

	<div>

        {props.question.tictactoe && 
        <OverlayTrigger
          key={props.question.id+'-tictactoe'}
          placement={'top'}
          overlay={
            <Tooltip id={'top'}>
                Question is available for Tic Tac Toe
            </Tooltip>
        }>
            <FontAwesomeIcon icon={faHashtag} className="margin-right-small green-color" />
        </OverlayTrigger>}


        {!props.question.tictactoe && 
        <OverlayTrigger
          key={props.question.id+'-tictactoe'}
          placement={'top'}
          overlay={
            <Tooltip id={'top'}>
                Question is not available for Tic Tac Toe
            </Tooltip>
        }>
            <FontAwesomeIcon icon={faHashtag} className="margin-right-small grey-color" />
        </OverlayTrigger>}





        {props.question.bigboard && 
        <OverlayTrigger
          key={props.question.id+'-bigboard'}
          placement={'top'}
          overlay={
            <Tooltip id={'top'}>
                Question is available for Big Board
            </Tooltip>
        }>
            <FontAwesomeIcon icon={faColumns} className="margin-right-small green-color" />
        </OverlayTrigger>}


        {!props.question.bigboard && 
        <OverlayTrigger
          key={props.question.id+'-bigboard'}
          placement={'top'}
          overlay={
            <Tooltip id={'top'}>
                Question is not available for Big Board
            </Tooltip>
        }>
            <FontAwesomeIcon icon={faColumns} className="margin-right-small grey-color" />
        </OverlayTrigger>}





    </div>
);


export default GameShow;


