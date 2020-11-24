
import React from 'react';

// Font Awesome Items
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Bootstrap components
import Container from 'react-bootstrap/Container';

// Components
import NavBar from '../NavBar/NavBar';
import ProfileImage from './ProfileImage';
import ProfileTags from './ProfileTags';
import ProfileButtons from './ProfileButtons';
import Footer from '../Footer/FooterPage';




const ProfilePage = () => (

	<div className="light-color">

		<NavBar />

		<Container>
			<ProfileImage />
			<ProfileTags />
			<ProfileButtons />
		</Container>

		<Footer />

	</div>
);


export default ProfilePage;
