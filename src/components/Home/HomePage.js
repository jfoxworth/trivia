
import React from 'react';
import Footer from '../Footer/FooterPage';

import './homeCSS.css';

// Import Components
import MainNavBar from '../NavBar/NavBar';
import SplashImage from './SplashImage';
import TTTIntro from './TTTIntro';



const HomePage = () => (
  <div>
      <MainNavBar />
      <SplashImage />
      <TTTIntro />
      <Footer />
      
  </div>
);

export default HomePage;
