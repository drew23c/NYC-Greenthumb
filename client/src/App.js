import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to = "/">Home</Link>
        <Switch>
          <Route exact path = "/" component = {Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
