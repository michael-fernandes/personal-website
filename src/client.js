import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/index.css';

if(typeof document !== 'undefined'){
  ReactDOM.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    typeof document !== "undefined" ? document.getElementById('root') : undefined
  );
}

