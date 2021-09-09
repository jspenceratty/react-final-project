import React from 'react';
import AddStamp from './AddStamp';
import { stampApi } from '../../rest/StampApi.js';
import Stamp from './Stamp';


export default class StampMain extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            stamps: []
        };

        this.addNewStamp = this.addNewStamp.bind(this);
        this.fetchStamps = this.fetchStamps.bind(this);

    }

    componentDidMount() {
        this.fetchStamps();
    }

    fetchStamps = async () => {
        const stamps = await stampApi.get();
        this.setState({ stamps });
    }

    addNewStamp = async (e, stamp) => {
        console.log(stamp);
        await stampApi.add(stamp);
        this.fetchStamps();
    }

    editStamp = async (e, stamp) => {
        console.log(stamp);
        await stampApi.put(stamp);
        this.fetchStamps();
    }

    deleteStamp = async (e, stamp) => {
        await stampApi.delete(stamp);
        this.fetchStamps();
    }

    render() {
        return (
            <div>
                
                <div className="container text-center">
                    <AddStamp addNewStamp={this.addNewStamp} />
                </div>
                <br />
                <div className="container text-center">
                    <h2>List of Stamps in Collection</h2>
                    <table className="text-center center" style={{ 'marginLeft': 'auto', 'marginRight': 'auto', border: 'solid black 1px' }} >
                        <tbody>
                            <tr>
                                <th style={{ border: 'solid black 1px' }}>ID</th>
                                <th style={{ border: 'solid black 1px' }}>Year</th>
                                <th style={{ border: 'solid black 1px' }}>Description</th>
                                <th style={{ border: 'solid black 1px' }}>Change or Delete</th>
                            </tr>
                            {this.state.stamps.map((stamp) => (
                                <Stamp
                                    stamp={stamp}
                                    key={stamp._id}
                                    editStamp={this.editStamp}
                                    deleteStamp={this.deleteStamp}
                                />

                            ))}
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}