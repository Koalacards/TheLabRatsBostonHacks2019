import React from'react';
import AboutText from './aboutText';
import { ResultTable } from './resultTable';

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
                    <ResultTable
                        userInput={this.props.userInput}
                    />
                </div>
              );
        }
    }
}
export default MainScreen