import React from'react';
import NavBar from './Nav.js';
import MainScreen from './mainscreen.js';

class Fullscreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userSearched: false,
            userInput: ''
        };
    }


    handleSubmit(input) {
        //input.preventDefault();
        this.setState({
            userSearched: true,
            userInput: input
        });
    }

    // Render should work as is, assuming NavBar and MainScreen work.
    render() {
        return (
            <div className="screen">
              <div className="nav-bar">
                <NavBar
                    onSubmit={input => this.handleSubmit(input)}
                />
              </div>
              <div className="main-screen">
                <MainScreen
                    userSearched={this.state.userSearched}
                    userInput={this.state.userInput}
                />
              </div>
            </div>
          );
    }
}
export default Fullscreen;