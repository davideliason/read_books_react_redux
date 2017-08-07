import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import books from './reducers/bookReducer.js'
import {addBook} from './actions/index.js'
// import {addNumber,subtractNumber} from './actions/index'

const store = createStore(books);
// store.dispatch(addNumber(53));
// console.log(store.getState())
// store.dispatch(subtractNumber(100))
store.dispatch(addBook("2222","hello"))

console.log(store.getState())

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
