import React from 'react';

export class ResultTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedItem: 'cookies',
            results: [
                { id: 'WholeFoods', subresults: 5},
                { id: 'StopNShop', subresults: 5},
                { id: 'StarMarket', subresults: 5},
                { id: 'Target', subresults: 5},
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
                <div>{titleString}</div>
                <table id='groceryResults'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}