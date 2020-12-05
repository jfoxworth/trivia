import React from 'react';
import { connect } from 'react-redux';

// React Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom'

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';


// import css
import '../mainCSS.css';
  
// Components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const MainNavBar = (props) => {

    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;

    return (
        <Navbar expand="lg" className="navbar-color">
            <Navbar.Brand href="/" className="grey-font">Triviudum</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto justify-content-end">

                    <Nav.Link as={Link} to="/games" className="mr-medium mt-tiny">
                        <FontAwesomeIcon icon={faGamepad} className="margin-right-small" />
                        Games
                    </Nav.Link>



                    <Nav.Link as={Link} to="/tags" className="mr-medium mt-tiny">
                        <FontAwesomeIcon icon={faTags} className="margin-right-small" />
                        Tags
                    </Nav.Link>

{/*
                    <Nav.Link as={Link} to="/boards" className="mr-medium mt-tiny">
                        <FontAwesomeIcon icon={faCubes} className="margin-right-small" />
                        Boards
                    </Nav.Link>
*/}
                    <Nav.Link as={Link} to="/questions" className="mr-medium mt-tiny">
                        <FontAwesomeIcon icon={faQuestionCircle} className="margin-right-small" />
                        Questions
                    </Nav.Link>

                    {links}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state)=>{
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(MainNavBar);


