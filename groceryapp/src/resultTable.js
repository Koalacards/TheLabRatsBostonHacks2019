import React from 'react';
import InnerTable from './innerTable';

 class ResultTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
                { id: 'WholeFoods', subresults: <InnerTable />},
                { id: 'StopNShop', subresults: <InnerTable />},
                { id: 'StarMarket', subresults: <InnerTable />},
                { id: 'Target', subresults: <InnerTable />},
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