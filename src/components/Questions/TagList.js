
import React from 'react';

// Import CSS
import './questionsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Badge from 'react-bootstrap/Badge';


const BadgeItem = (props) => (

    <div>

        {props.tags.map((tag, index) => (
            <Badge pill variant="secondary" key={tag.tagName} className="right-me">{tag.tagName}</Badge>
        ))}

    </div>

);


export default BadgeItem;
