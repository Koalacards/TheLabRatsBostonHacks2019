import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< Updated upstream
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
=======
//import App from './App.js';
import NavBar from './Nav';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavBar />, document.getElementById('root1'));
//ReactDOM.render(<App />, document.getElementById('root2'));
>>>>>>> Stashed changes

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
