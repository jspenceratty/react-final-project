import React from 'react';

export default class AddCD extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            artistValue: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleTitleChange(e) {
        this.setState({ titleValue: e.target.value });
    }

    handleArtistChange(e) {
        this.setState({ artistValue: e.target.value });
    }

    handleClick(e) {
        this.props.addNewCD(e, { title: this.state.titleValue, artist: this.state.artistValue });
        this.setState({ titleValue: '', artistValue: '' });
    }

    render() {
        return (
            <div>
                <h3>Add a New CD To The Collection</h3>
                <input type="text" placeholder="Title" onChange={this.handleTitleChange} value={this.state.titleValue} />
                <input type="text" placeholder="Artist" onChange={this.handleArtistChange} value={this.state.artistValue} />
                <button onClick={this.handleClick}>Add CD</button>
            </div>
        );
    }
}