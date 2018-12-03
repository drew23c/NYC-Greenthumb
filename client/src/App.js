import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Gardens from './components/Gardens';
import FilterResult from './components/FilterResult';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navigation">
        <Link to = "/">Home</Link>{"  "}
        <Link to = "/gardens">Gardens</Link>
      </nav>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/gardens" component = {Gardens} />
        </Switch>
      </div>
    );
  }
}

export default App;
