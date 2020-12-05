

import React from 'react';
import { connect } from 'react-redux';


// Import CSS
import './profileStyle.css';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';


// Import Bootstrap Items
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

// Action creators
import { editUser } from '../../store/actions/userActions';





class ProfileImage extends React.Component {

	constructor(props) {
			super(props);
			this.state={};
			this.state.imageList1 = [...Array(110).keys()].map(i => i + 1)
			this.state.imageList2 = [...Array(72).keys()].map(i => i + 1)

			this.state.popover = <Popover id="popover-basic" className="selectProfileBox">
														<Popover.Title as="h3">Select a new profile image</Popover.Title>
														<Popover.Content className="p-20 vscroll selectProfileBoxInner">
															<Row>
																{this.state.imageList1.map((num)=>{
																	return <div className={'hover-me mr-small mb-small avatars1-image-nav avatar1-'+num}
																							onClick={()=>this.setNewProfile(this.props.profile, this.props.uid, 1, num)}>
																	</div>
																})}
																{this.state.imageList2.map((num)=>{
																	return <div className={'hover-me mr-small mb-small avatars2-image-nav avatar2-'+num}
																							onClick={()=>this.setNewProfile(this.props.profile, this.props.uid, 2, num)}>
																	</div>
																})}
															</Row>
														</Popover.Content>
													</Popover>
		}
	
	setNewProfile = (profile, uid, page, num)=>{
		this.props.editUser({...profile, avatarpage:page, avatar:num } , uid );
	}


	render(){

		return (


			<Container>

				<Row>
					<div className={'imageHolder avatars'+this.props.profile.avatarpage+'-image-large avatar'+this.props.profile.avatarpage+'-'+this.props.profile.avatar}>
					</div>
				</Row>

				<Row>
					<div className="text-center user-title">
						<Row>
							<h2 className="text-center user-title mr-small">{this.props.profile.username}</h2>
							<OverlayTrigger trigger="click" placement="right" overlay={this.state.popover}>
								<FontAwesomeIcon icon={faUsersCog} className="margin-right-small fa-2x hover-me" />
							</OverlayTrigger>
						</Row>
					</div>
				</Row>

			</Container>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
			editUser: (user, userId) => dispatch(editUser(user, userId))
	}
}

export default connect(null, mapDispatchToProps)(ProfileImage);

