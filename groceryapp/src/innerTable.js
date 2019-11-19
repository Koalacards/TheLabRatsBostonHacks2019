import React from 'react';

class InnerTable extends React.Component {
    constructor(userInput) {
        super(userInput);
        this.state = {
            results: [
                { item: userInput + ' 1', price: 'price 1'},
                { item: userInput + ' 2', price: 'price 2'},
                { item: userInput + ' 3', price: 'price 3'},
                { item: userInput + ' 4', price: 'price 4'},
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
var NewInnerTable = new InnerTable(this.userInput);
export default NewInnerTable;