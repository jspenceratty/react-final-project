import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AddCoin from './Components/AddCoin';
import { coinApi } from './rest/CoinApi.js';
import Coin from './Components/Coin';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: []
    };

    this.addNewCoin = this.addNewCoin.bind(this);
    this.fetchCoins = this.fetchCoins.bind(this);
  
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    const coins = await coinApi.get();
    this.setState({ coins });
  }

  addNewCoin = async (e, coin) => {
    console.log(coin);
    await coinApi.add(coin);
    this.fetchCoins();
  }

  editCoin = async(e, coin) => {
    console.log(coin);
    await coinApi.put(coin);
    this.fetchCoins();
  }

  deleteCoin = async(e,coin) => {
    await coinApi.delete(coin);
    this.fetchCoins();
  }

  render() {
    return (
      <div>
        <div className="container bg-light">
          <Header className="panel-title text-center" />
        </div>
        <div className="container text-center">
          <AddCoin addNewCoin={this.addNewCoin} />
        </div>
        <br />
        <div className="container text-center">
          <h2>List of Coins in Collection</h2>
          <table className="text-center center" style={{'marginLeft': 'auto', 'marginRight':'auto', border: 'solid black 1px'}} >
            <tbody>
            <tr>
              <th style={{border: 'solid black 1px'}}>ID</th>
              <th style={{border: 'solid black 1px'}}>Year</th>
              <th style={{border: 'solid black 1px'}}>Description</th>
              <th style={{border: 'solid black 1px'}}>Change or Delete</th>
            </tr>
              {this.state.coins.map((coin) => (
                <Coin
                  coin={coin}
                  key={coin._id}
                  editCoin = {this.editCoin}
                  deleteCoin = {this.deleteCoin}
                />
                
              ))}
            </tbody>
          </table>
        </div>
        <div className="container bg-light">
          <Footer className="text-center p-4" />
        </div>
      </div>
    )
  }
}


