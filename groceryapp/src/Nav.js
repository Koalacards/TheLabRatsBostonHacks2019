import React from 'react';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}> 
        <input type='text' value={this.state.value} id='searchbar' onChange={this.handleChange}/>
      </form>
    );
  }
}

export default NavBar

// function App() {
//   return (
//     <div className="Groceries!">
//       <header className="Find some groceries!" >
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Search for what groceries you want! This website will tell you what the best prices are around!
//         </p>
//         <a
//           className="App-link"
//           href="https://www.google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Test
//         </a>
//         <br>
//         </br>
//         <input type="text" placeholder="Search for groceries here!">

//         </input>

//       </header>
//     </div>
//   );
// }

//export default App;