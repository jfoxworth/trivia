
import React from 'react';

// Import CSS
import './boardsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Badge from 'react-bootstrap/Badge';


const BadgeItem = (props) => (

	<div>
        {props.badgeType=='Easy' && <Badge variant="primary" className="easy-color mr-small ml-small">Easy</Badge>}
        {props.badgeType=='Medium' && <Badge variant="primary" className="medium-color mr-small ml-small">Medium</Badge>}
        {props.badgeType=='Difficult' && <Badge variant="primary" className="difficult-color mr-small ml-small">Difficult</Badge>}
        {props.badgeType=='Trivia Master' && <Badge variant="primary" className="trivia-master-color mr-small ml-small">Trivia Master</Badge>}
    </div>
);


export default BadgeItem;
