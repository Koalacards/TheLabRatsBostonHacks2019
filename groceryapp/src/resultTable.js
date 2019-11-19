import React from 'react';
import NewInnerTable from './innerTable';

 class ResultTable extends React.Component {
    constructor(userInput) {
        super(userInput);
        this.state = {
            results: [
                { id: 'WholeFoods', subresults: <NewInnerTable 
                                                    userInput = {userInput} />},
                { id: 'StopNShop', subresults: <NewInnerTable 
                                                    userInput = {userInput} />},
                { id: 'StarMarket', subresults: <NewInnerTable 
                                                    userInput = {userInput} />},
                { id: 'Target', subresults: <NewInnerTable 
                                                    userInput = {userInput} />},
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
        const titleString = 'The searched item is ' + this.userInput
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
const NewResultTable = new ResultTable(this.userInput);
export default NewResultTable;