import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';
import 'antd/dist/antd.css';
import './Styles/index.css';
import { analytics } from './Analytics';

if (process.env.NODE_ENV !== 'development') {
  analytics.page();
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
