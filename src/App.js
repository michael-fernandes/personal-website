import React from 'react';
import { Landing } from './Containers';
import { analytics } from './Analytics';

import './Styles/App.css';

analytics.page()

function App() {
  return (
    <div className="App">
        <Landing />
    </div>
  );
}

export default App;
