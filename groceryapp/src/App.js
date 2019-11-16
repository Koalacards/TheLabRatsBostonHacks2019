import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Groceries!">
      <header className="Find some groceries!" >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Search for what groceries you want! This website will tell you what the best prices are around!
        </p>
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test
        </a>
        <br>
        </br>
        <input type="text" placeholder="Search for groceries here!">

        </input>

      </header>
    </div>
  );
}

export default App;
