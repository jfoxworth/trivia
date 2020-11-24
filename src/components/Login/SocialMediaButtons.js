
import React from 'react';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-solid-svg-icons';


// Import CSS
import './loginStyle.css';


// Import Bootstrap Items
import Button from 'react-bootstrap/Button';


const SocialMediaButtons = () => (

    <div>
        <p className="text-center">Login with your social media account</p>

        <div className="text-center">
            <Button variant="secondary" className="fbBg"><FontAwesomeIcon icon={faFacebook} />Facebook</Button>{' '}
            <Button variant="info" className="twitterBg"><FontAwesomeIcon icon={faTwitter} />Twitter</Button>{' '}
            <Button variant="danger" className="googleBg"><FontAwesomeIcon icon={faGoogle} />Google</Button>{' '}
        </div>
    
    </div>
);


export default SocialMediaButtons;
