
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

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Import CSS
import './loginStyle.css';


const LoginPage = (props) => {
	
    if (props.auth.uid) return <Redirect to='/profile' />

	return (

		<div style={{'min-height':'700px !important'}}>

			<NavBar />

			<Container >

				<Row className="mt-verylarge mb-verylarge">

					<Col sm={6} className="text-right">
						<img src="/images/player4.png" height="300px" />
					</Col>


					<Col sm={6}>
						<div className="login-form">

							<LoginInputs />
							{/* <MiddleItems /> */}
							{/* <OrSeperator /> */}
							{/* <SocialMediaButtons /> */}
							<RegisterLine />

						</div>
					</Col>

				</Row>

			</Container>

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

