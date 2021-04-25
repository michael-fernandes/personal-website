import React from 'react';
import { About, Landing, Projects } from './Containers';
import { analytics } from './Analytics';

import './Styles/App.css';
import './Styles/UI.css';

// analytics.page()

function App() {
  return (
    <div className="App">
        <Landing />
        <Projects />
        {/* <About /> */}
    </div>
  );
}

export default App;
