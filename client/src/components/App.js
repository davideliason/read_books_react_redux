import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './Number.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h3>Read Books</h3>
       <Button number="2"></Button>
      </div>
    );
  }
}

export default App;
