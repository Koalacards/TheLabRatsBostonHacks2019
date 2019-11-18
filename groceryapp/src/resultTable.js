import React from 'react';
import InnerTable from './innerTable';

 class ResultTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
                { id: 'WholeFoods', subresults: <InnerTable 
                                                    userInput = {this.props.userInput} />},
                { id: 'StopNShop', subresults: <InnerTable 
                                                    userInput = {this.props.userInput} />},
                { id: 'StarMarket', subresults: <InnerTable 
                                                    userInput = {this.props.userInput} />},
                { id: 'Target', subresults: <InnerTable 
                                                    userInput = {this.props.userInput} />},
            ]
        };
    }

    renderTableData() {
        return this.state.results.map((result, index) =>{
            const { id, subresults } = result;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{subresults}</td>
                </tr>
            )
        });
    }

    render() {
        const titleString = 'The searched item is ' + this.props.userInput
        return (
            <div>
                <div id='title'>{titleString}</div>
                <table id='groceryResults'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ResultTable;