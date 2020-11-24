
import React from 'react';

// Import CSS
import './questionsStyle.css';
import '../mainCSS.css';

// Import bootstrap items
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';



const QuestionType = (props) => (

	<div className="text-center">

        {props.questionType=='Select' && 
        <OverlayTrigger
          key={props.questionType}
          placement={'top'}
          overlay={
            <Tooltip id={'top'}>
                Answer is selected
            </Tooltip>
        }>
            <FontAwesomeIcon icon={faCheckSquare} className="margin-right-small" />
        </OverlayTrigger>}

        {props.questionType=='Enter' && 
        
        <OverlayTrigger
          key={props.questionType}
          placement={'top'}
          overlay={
            <Tooltip id={'top'}>
                Answer is entered
            </Tooltip>
        }>
            <FontAwesomeIcon icon={faEdit} className="margin-right-small" />
        </OverlayTrigger>}

    </div>
);


export default QuestionType;


