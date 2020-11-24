
import React from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';



// Import Components
import NavBar from '../NavBar/NavBar';
import LoginInputs from './LoginInputs';
import MiddleItems from './MiddleItems';
import SocialMediaButtons from './SocialMediaButtons';
import RegisterLine from './RegisterLine';
import OrSeperator from './OrSeperator';
import Footer from '../Footer/FooterPage';


// Import CSS
import './loginStyle.css';


const LoginPage = (props) => {
	
    if (props.auth.uid) return <Redirect to='/profile' />

	return (

		<div className="light-color">

			<NavBar />

			<div className="login-form">

				<LoginInputs />
				<MiddleItems />
				<OrSeperator />
				<SocialMediaButtons />
				<RegisterLine />

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
	connect(mapStateToProps))(LoginPage)

