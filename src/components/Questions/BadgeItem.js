
import React from 'react';

// Import CSS
import './questionsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Badge from 'react-bootstrap/Badge';


const BadgeItem = (props) => (

	<div className="text-center">
        {props.badgeType=='Easy' && <Badge variant="primary" className="easy-color">Easy</Badge>}
        {props.badgeType=='Medium' && <Badge variant="primary" className="medium-color">Medium</Badge>}
        {props.badgeType=='Difficult' && <Badge variant="primary" className="difficult-color">Difficult</Badge>}
        {props.badgeType=='Trivia Master' && <Badge variant="primary" className="trivia-master-color">Trivia Master</Badge>}
    </div>
);


export default BadgeItem;
