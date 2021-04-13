import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/index.css';
import { analytics } from './Analytics';

analytics.page();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
