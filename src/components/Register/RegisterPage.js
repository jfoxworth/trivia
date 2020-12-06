
import React from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';



// Import Components
import NavBar from '../NavBar/NavBar';
import RegisterInputs from './RegisterInputs';
import Footer from '../Footer/FooterPage';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


// Import CSS
import './registerStyle.css';


const RegisterPage = (props) => {
    
    if (props.auth.uid) return <Redirect to='/profile' />

    return (
    
			<div>

				<NavBar />


				<Container >

					<Row className="mt-verylarge mb-verylarge">

						<Col sm={6} className="text-right mt-large">
							<img src="/images/player3.png" height="300px" />
						</Col>


						<Col sm={6}>
							<div className="login-form">
								<RegisterInputs />
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
	connect(mapStateToProps))(RegisterPage)