
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

// Import Components
import NavBar from '../NavBar/NavBar';

// Import CSS
import './questionsStyle.css';
import '../mainCSS.css';

// Import Bootstrap Items
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Import Components
import QuestionList from './QuestionList';
import Footer from '../Footer/FooterPage';
import DiffSelect from './DiffSelect';
import GameSelect from './GameSelect';
import TagSelect from './TagSelect';
import QuestionHeader from './QuestionHeader';

// Import models
import showProps from '../../models/showProps.js';


class QuestionsPage extends React.Component {

	
		constructor(props) {
			super(props);
			this.state = { showProps : showProps };
		}


		changeProps = (newProps)=>{
			this.setState({showProps:newProps});
		}

		render(){



			return (

				<div className="">

					<NavBar />

					<Container className="mt-medium">

						<div className="sidebar-container mt-large">

							<Row>{this.props.auth.uid && <QuestionHeader />}</Row>

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
								{this.props.questions && <QuestionList authId={this.props.auth.uid}
																											 questions={this.props.questions}
																											 showProps={this.state.showProps} /> }
							</div>

						</div>
			
					</Container>

					<Footer />
				
				</div>
			);
		}
}


const mapStateToProps = (state) => {
	return {
			questions : state.firestore.ordered.questions ? state.firestore.ordered.questions : [],
			auth:state.firebase.auth,
			tags : state.firestore.ordered.tags ? state.firestore.ordered.tags : []
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection:'tags'},
		{collection:'questions'}
	])
)(QuestionsPage);
