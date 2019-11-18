//import React from 'react';
import './App.css';
// import "@material/top-app-bar/mdc-top-app-bar";
// import "@material/icon-button/mdc-icon-button";

import React, { Component } from 'react'
import NavBar from './components/NavBar'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}
export default App

// function App() {
//   return (
    //<div className="Groceries!">
      // <header className="Find some groceries!" >
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Search for what groceries you want! This website will tell you what the best prices are around!
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://www.google.com"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Test
      //   </a>
      //   <br>
      //   </br>
      //   <input type="text" placeholder="Search for groceries here!">
      //
      //   </input>
      //
      // </header>
// <div>
// <head>
//   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
// </head>
//
// <header class="mdc-top-app-bar">
//   <div class="mdc-top-app-bar__row">
//     <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
//       <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
//       <span class="mdc-top-app-bar__title">Title</span>
//     </section>
//   </div>
// </header>
//   </div>
//   );
// }
//
// export default App;
