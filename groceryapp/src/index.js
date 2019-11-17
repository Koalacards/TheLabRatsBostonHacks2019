import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Result} from './Result';
import {NavBar} from './Nav';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavBar />, document.getElementById('NavBar'));
ReactDOM.render(<Result />, document.getElementById('Result'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
