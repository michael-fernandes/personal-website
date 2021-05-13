import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './Styles/index.css';
import 'antd/dist/antd.css';
// import { analytics } from './Analytics';

// if (process.env.NODE_ENV !== 'development') {
//   analytics.page();
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
