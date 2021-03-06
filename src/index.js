import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Popup from 'react-popup';

import App from './App/App';
import * as serviceWorker from './serviceWorker';

import store from './Redux/store';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
ReactDOM.render(<Popup />, document.getElementById('popup'));

serviceWorker.unregister();
