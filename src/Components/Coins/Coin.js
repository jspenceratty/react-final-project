import React from 'react';

export default class Coin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coin: this.props.coin,
            readClass: '',
            editClass: 'none',
            yearValue: this.props.coin.year,
            descValue: this.props.coin.desc
        }
        this.changeDisplay = this.changeDisplay.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.resetToNormal = this.resetToNormal.bind(this);
    }

    /* componentDidMount() {
        console.log(this.state.yearValue);
        console.log(this.state.descValue);
    } */

    changeDisplay(e) {
        if (this.state.readClass === '') {
            this.setState({ readClass: 'none' });
            this.setState({ editClass: '' });
        } else {
            this.setState({ readClass: '' });
            this.setState({ editClass: 'none' });
        }
    }

    handleYearChange(e) {
        this.setState({ yearValue: e.target.value });
    }

    handleDescChange(e) {
        this.setState({ descValue: e.target.value });
    }

    handleClick(e) {
        this.changeDisplay();
        this.setState({ coin: { _id: this.state.coin._id, year: this.state.yearValue, desc: this.state.descValue } })
        this.props.editCoin(e, { _id: this.state.coin._id, year: this.state.yearValue, desc: this.state.descValue });

    }

    deleteClick(e) {
        this.props.deleteCoin(e, { _id: this.state.coin._id, year: this.state.yearValue, desc: this.state.descValue });
    }

    resetToNormal(e) {
        this.setState({ yearValue: this.props.coin.year });
        this.setState({ descValue: this.props.coin.desc });
        this.changeDisplay();
    }

    render() {
        return (
            <tr>
                <td style={{ padding: '5px', border: 'solid black 1px' }}><label>{this.state.coin._id}</label></td>

                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.readClass }}><label>{this.state.coin.year}</label></td>
                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.editClass }}>
                    <input type="number" value={this.state.yearValue} onChange={this.handleYearChange}></input>
                </td>

                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.readClass }}><label>{this.state.coin.desc}</label></td>
                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.editClass }}>
                    <input type="text" value={this.state.descValue} onChange={this.handleDescChange}></input>
                </td>

                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.readClass }}>
                    <button className="btn btn-sm btn-warning" onClick={this.changeDisplay}>Edit</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-sm btn-danger" onClick={this.deleteClick}>Delete</button>
                </td>
                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.editClass }}>
                    <button className="btn btn-sm btn-success" onClick={this.handleClick}>Save</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-sm btn-danger" onClick={this.resetToNormal}>Cancel</button>
                </td>
            </tr>

        )
    }
}