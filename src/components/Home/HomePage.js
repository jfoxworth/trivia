
import React from 'react';
import Footer from '../Footer/FooterPage';

import './homeCSS.css';

// Import Components
import MainNavBar from '../NavBar/NavBar';
import SplashImage from './SplashImage';
import TTTIntro from './TTTIntro';
import PlayAnywhere from './playAnywhere';
import SundaySchool from './sundayschool';
import FriendsPlaying from './friendsPlaying';



const HomePage = () => (
  <div>
      <MainNavBar />
      <SplashImage />
      <TTTIntro />
      <PlayAnywhere />
      <SundaySchool />
      <FriendsPlaying />
      <Footer />
      
  </div>
);

export default HomePage;
