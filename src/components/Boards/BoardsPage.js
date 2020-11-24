
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

// Import Components
import NavBar from '../NavBar/NavBar';

// Import CSS
import './boardsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Import Components
import BoardList from './BoardList';
import DiffSelect from '../Questions/DiffSelect';
import GameSelect from '../Questions/GameSelect';
import TagSelect from '../Questions/TagSelect';
import BoardHeader from './BoardHeader';
import Footer from '../Footer/FooterPage';

// Import models
import showProps from '../../models/showProps.js';


class BoardsPage extends React.Component {

	
		constructor(props) {
			super(props);
			this.state = { showProps:showProps }
		}


		changeProps = (newProps)=>{
			this.setState({showProps:newProps});
		}


		render(){



			return (
				<section className="light-color">

					<NavBar />

					<Container className="mt-medium">

						<div className="sidebar-container white-bg mt-large">

							<Row><BoardHeader authId={this.props.auth.uid} /></Row>

							<DiffSelect changeProps={this.changeProps} 
													showProps={this.state.showProps} />

							<Row>
								<Col sm={6}><GameSelect changeProps={this.changeProps}
																				showProps={this.state.showProps}/></Col>

								<Col sm={6}><TagSelect tags={this.props.tags}  
																			 changeProps={this.changeProps}
																			 showProps={this.state.showProps}/></Col>

							</Row>

							<div className="width-90p center-me mb-large">
								{this.props.boards && <BoardList authId={this.props.auth.uid}
																								 boards={this.props.boards}
																								 showProps={this.state.showProps} /> }
							</div>

						</div>
			
					</Container>

					<Footer />
				
				</section>
			);
		}
}


const mapStateToProps = (state) => {
	return {
			boards : state.firestore.ordered.boards ? state.firestore.ordered.boards : [],
			auth:state.firebase.auth,
			tags : state.firestore.ordered.tags ? state.firestore.ordered.tags : []
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection:'boards'},
		{collection:'tags'}
	])
)(BoardsPage);