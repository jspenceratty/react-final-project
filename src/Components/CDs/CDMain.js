import React from 'react';
import AddCD from './AddCD';
import { cdApi } from '../../rest/CDApi.js';
import CD from './CD';


export default class CDMain extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            cds: []
        };

        this.addNewCD = this.addNewCD.bind(this);
        this.fetchCDs = this.fetchCDs.bind(this);

    }

    componentDidMount() {
        this.fetchCDs();
    }

    fetchCDs = async () => {
        const cds = await cdApi.get();
        this.setState({ cds });
    }

    addNewCD = async (e, cd) => {
        console.log(cd);
        await cdApi.add(cd);
        this.fetchCDs();
    }

    editCD = async (e, cd) => {
        console.log(cd);
        await cdApi.put(cd);
        this.fetchCDs();
    }

    deleteCD = async (e, cd) => {
        await cdApi.delete(cd);
        this.fetchCDs();
    }

    render() {
        return (
            <div>
                
                <div className="container text-center">
                    <AddCD addNewCD={this.addNewCD} />
                </div>
                <br />
                <div className="container text-center">
                    <h2>List of CDs in Collection</h2>
                    <table className="text-center center" style={{ 'marginLeft': 'auto', 'marginRight': 'auto', border: 'solid black 1px' }} >
                        <tbody>
                            <tr>
                                <th style={{ border: 'solid black 1px' }}>ID</th>
                                <th style={{ border: 'solid black 1px' }}>Title</th>
                                <th style={{ border: 'solid black 1px' }}>Artist</th>
                                <th style={{ border: 'solid black 1px' }}>Change or Delete</th>
                            </tr>
                            {this.state.cds.map((cd) => (
                                <CD
                                    cd={cd}
                                    key={cd._id}
                                    editCD={this.editCD}
                                    deleteCD={this.deleteCD}
                                />

                            ))}
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}