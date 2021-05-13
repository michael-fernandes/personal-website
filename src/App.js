import React from 'react';
import { About, Landing, Intro, Projects } from './Containers';
import { analytics } from './Analytics';
import { Provider } from 'react-redux';
import { store } from './store';

import './Styles/App.css';
import './Styles/UI.css';

// analytics.page()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Landing />
          <Intro />
          <Projects />
          <About />
      </div>
    </Provider>
  );
}

export default App;
