import React from 'react';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/authActions'

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import { Link } from 'react-router-dom'


// import css
import '../mainCSS.css';
  

const SignedInLinks = (props) => {

    return (

        <Row className="ml-small mr-small">

            <Dropdown>
                <Dropdown.Toggle className="no-bg" id="navbar-dropdown">
                    <img className="mr-small" src="/images/profileImage.png" width="40px" height="40px"/>
                    {props.profile.username}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dark-color">
                    <Dropdown.Item>
                        <Nav.Link as={Link} to="/profile">
                            User Profile
                        </Nav.Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Nav.Link className="mt-tiny mr-medium" onClick={props.signOut}>Sign Out</Nav.Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </Row>

    )
}

const mapStateToProps = (state)=>{
    return {
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)




