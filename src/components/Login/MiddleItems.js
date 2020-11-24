
import React from 'react';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';



// Import Components
import NavBar from '../NavBar/NavBar';
import LoginInputs from './LoginInputs';


// Import CSS
import './loginStyle.css';


// Import Bootstrap Items
import InputGroup from 'react-bootstrap/InputGroup';


const MiddleItems = () => (

    <InputGroup className="mb-3 clearBG">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" 
                                                    className="clearBG" />
        <InputGroup.Text className="clearBG" id="basic-addon1">Remember Me</InputGroup.Text>
        <a href="#" className="mt-1">Forgot Password?</a>
    </InputGroup>

);


export default MiddleItems;
