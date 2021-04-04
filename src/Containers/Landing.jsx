import React from 'react';
import { Welcome, WebLinks } from '../Components/Landing';

import '../Styles/Landing.css';


function Landing(props) {
  return (
    <div className="landing-section">
      <div className="landing-wrapper">
        <Welcome/>
        <WebLinks/>
      </div>
    </div>
  );
}

export default Landing;