import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import NumberWrapper from '../containers/NumberWrapper.js'
// import AddNumber from '../containers/AddNumber.js'
// import WrapperBookList from '../container/WrapperBookList.js';
import WrapperBookList from '../containers/WrapperBookList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h3>Read Books</h3>
       <WrapperBookList  />
      </div>
    );
  }
}

export default App;
