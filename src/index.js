import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/index.css';

ReactDOM.hydrate(
  <App />,
  document.getElementById("root")
);
