
import React from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';



// Import Components
import NavBar from '../NavBar/NavBar';
import RegisterInputs from './RegisterInputs';
import Footer from '../Footer/FooterPage';



// Import CSS
import './registerStyle.css';


const RegisterPage = (props) => {
    
    if (props.auth.uid) return <Redirect to='/profile' />

    return (
    
        <div className="light-color">

            <NavBar />

            <div className="login-form">

                <RegisterInputs />

            </div>

            <Footer />

        </div>
    )
}



const mapStateToProps = (state) => {
	return {
			auth:state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps))(RegisterPage)