import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App.js';
import Nav from './Nav';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Nav />, document.getElementById('root1'));
//ReactDOM.render(<App />, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
