// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import ConnectWallet from './pages/connectWallet';

function App() {
  return (
    <div className="bbg">
      <Router>
        <div className="s1">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/connectWallet" component={ConnectWallet} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
