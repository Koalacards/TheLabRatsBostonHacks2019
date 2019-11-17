import React from 'react';

class InnerTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [
                { item: 'Food 1', price: 'price 1'},
                { item: 'Food 2', price: 'price 2'},
                { item: 'Food 3', price: 'price 3'},
                { item: 'Food 4', price: 'price 4'},
            ]
        };
    }

    renderTableData() {
        return this.state.results.map((result, index) =>{
            const { item, price } = result;
            return (
                <tr key={item}>
                    <td>{item}</td>
                    <td>{price}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>
                <table id='storeResults'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default InnerTable;