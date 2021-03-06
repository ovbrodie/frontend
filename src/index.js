import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./bootstrap-override.scss";
import * as serviceWorker from './serviceWorker';
import "./i18n";
import UserLoginPage from "./pages/UserLoginPage"
import UserSignupPage from "./pages/UserSignupPage"
import ApiProgress from "./shared/ApiProgress"
import App from "./container/App"


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
