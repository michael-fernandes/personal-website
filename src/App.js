import React from 'react';
import { Landing, Projects} from './Containers';
import { analytics } from './Analytics';

import './Styles/App.css';
import './Styles/UI.css';

// analytics.page()

function App() {
  return (
    <div className="App">
        <Landing />
        <Projects />
    </div>
  );
}

export default App;
