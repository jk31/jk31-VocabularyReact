import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store/configurestore";

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/vocabularylist">Vocabulary List</a></li>
      <li><a href="/practice">Practice</a></li>
      <li><a href="/change">Change</a></li>
    </ul>
  </div>,
document.getElementById('navbar')
);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
