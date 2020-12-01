import React from 'react';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/authActions'

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom'


// import css
import '../mainCSS.css';
  

const SignedOutLinks = (props) => {

    console.log(props)

    return (

        <div>
            <Row className="mt-tiny mr-large">
                <Nav.Link as={Link} to="/login" className="mr-medium ml-medium">Sign In</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Row>
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


