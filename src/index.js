import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import index from "./js/index";
import { Provider } from "react-redux";
import store from './js/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
