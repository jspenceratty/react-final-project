import React from 'react';

export default class CD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cd: this.props.cd,
            readClass: '',
            editClass: 'none',
            titleValue: this.props.cd.title,
            artistValue: this.props.cd.artist
        }
        this.changeDisplay = this.changeDisplay.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.resetToNormal = this.resetToNormal.bind(this);
    }

    /* componentDidMount() {
        console.log(this.state.titleValue);
        console.log(this.state.artistValue);
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

    handleTitleChange(e) {
        this.setState({ titleValue: e.target.value });
    }

    handleArtistChange(e) {
        this.setState({ artistValue: e.target.value });
    }

    handleClick(e) {
        this.changeDisplay();
        this.setState({ cd: { _id: this.state.cd._id, title: this.state.titleValue, artist: this.state.artistValue } });
        this.props.editCD(e, { _id: this.state.cd._id, title: this.state.titleValue, artist: this.state.artistValue });

    }

    deleteClick(e) {
        this.props.deleteCD(e, { _id: this.state.cd._id, title: this.state.titleValue, artist: this.state.artistValue });
    }

    resetToNormal(e) {
        this.setState({ titleValue: this.props.cd.title });
        this.setState({ artistValue: this.props.cd.artist });
        this.changeDisplay();
    }

    render() {
        return (
            <tr>
                <td style={{ padding: '5px', border: 'solid black 1px' }}><label>{this.state.cd._id}</label></td>

                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.readClass }}><label>{this.state.cd.title}</label></td>
                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.editClass }}>
                    <input type="text" value={this.state.titleValue} onChange={this.handleTitleChange}></input>
                </td>

                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.readClass }}><label>{this.state.cd.artist}</label></td>
                <td style={{ padding: '5px', border: 'solid black 1px', display: this.state.editClass }}>
                    <input type="text" value={this.state.artistValue} onChange={this.handleArtistChange}></input>
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