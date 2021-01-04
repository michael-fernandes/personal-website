import { Welcome, WebLinks } from '../Components/Landing';

import '../Styles/Landing.css';


function Landing(props) {
  return (
    <div className="landing-wrapper">
      <Welcome/>
      <WebLinks />
    </div>
  );
}

export default Landing;