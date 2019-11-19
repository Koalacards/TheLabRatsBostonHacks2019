import React from'react';
import AboutText from './aboutText';
import NewResultTable from './resultTable';

class MainScreen extends React.Component {
    render() {
        if (!this.props.userSearched) {
            return (
                <div className="about-text">
                    <AboutText/>
                </div>
              );
        } else {
            return (
                <div className="result-table">
                    <NewResultTable
                        userInput={this.props.userInput}
                    />
                </div>
              );
        }
    }
}
export default MainScreen