import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NumberWrapper from '../containers/NumberWrapper.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h3>Read Books</h3>
       <NumberWrapper></NumberWrapper>
      </div>
    );
  }
}

export default App;
