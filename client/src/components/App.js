import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import NumberWrapper from '../containers/NumberWrapper.js'
// import AddNumber from '../containers/AddNumber.js'
// import WrapperBookList from '../container/WrapperBookList.js';
import WrapperBookList from '../containers/WrapperBookList.js'
import AddBook from '../containers/addBook.js'


class App extends Component {
  render() {
    return (
      <div className="App">
       <h3>My Books:</h3>
       <WrapperBookList  />
       <AddBook />
      </div>
    );
  }
}

export default App;
