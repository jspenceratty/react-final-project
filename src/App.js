import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CoinMain from './Components/Coins/CoinMain.js';
import CDMain from './Components/CDs/CDMain.js';
import StampMain from './Components/Stamps/StampMain.js';
import Home from './Components/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


export default class App extends React.Component {

  render() {
    return (
      <Container>
        <Router>
          <div className="container bg-light">
            <Header className="panel-title text-center" />
          </div>
          <div className="text-center">
            <ButtonGroup className="text-center">
              <Button variant="btn btn-outline-dark" >
                <Link to="/">Home</Link>
              </Button>
              <Button variant="btn btn-outline-dark">
                <Link to="/coins">Coins</Link>
              </Button>
              <Button variant="btn btn-outline-dark">
                <Link to="/cds">CDs</Link>
              </Button>
              <Button variant="btn btn-outline-dark">
                <Link to="/stamps">Stamps</Link>
              </Button>
            </ButtonGroup>
            <hr />
          </div>
          <br />
          <Switch>
            <Route path='/coins'>
              <CoinMain />
            </Route>
            <Route path='/cds'>
              <CDMain />
            </Route>
            <Route path='/stamps'>
              <StampMain />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>

          <div className="container bg-light">
            <Footer className="text-center p-4" />
          </div>
        </Router>
      </Container>
    )
  }


}


