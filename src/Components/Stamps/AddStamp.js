import React from 'react';

export default class AddStamp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yearValue: '',
            descValue: ''
        }
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleYearChange(e) {
        this.setState({ yearValue: e.target.value });
    }

    handleDescChange(e) {
        this.setState({ descValue: e.target.value });
    }

    handleClick(e) {
        this.props.addNewStamp(e, { year: this.state.yearValue, desc: this.state.descValue });
        this.setState({ yearValue: '', descValue: '' });
    }

    render() {
        return (
            <div>
                <h3>Add a New Stamp To The Collection</h3>
                <input type="number" placeholder="Year" onChange={this.handleYearChange} value={this.state.yearValue} />
                <input type="text" placeholder="Description" onChange={this.handleDescChange} value={this.state.descValue} />
                <button onClick={this.handleClick}>Add Coin</button>
                
            </div>
        );
    }
}