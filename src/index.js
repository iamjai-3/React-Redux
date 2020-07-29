import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Thunk from './Thunk';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Thunk /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
