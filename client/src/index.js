import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import book_reducer from './reducers'
import {addNumber} from './actions/index'

const store = createStore(book_reducer);
store.dispatch(addNumber(53));
console.log(store.getState())

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
