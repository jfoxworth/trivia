import React from 'react';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/authActions'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom'


// import css
import '../mainCSS.css';
  

const SignedOutLinks = (props) => {

    console.log(props)

    return (

        <div>
            <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </div>

    )
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        signOut: ()=>dispatchEvent(signOut())
    }
}

export default connect(mapStateToProps)(SignedOutLinks);

