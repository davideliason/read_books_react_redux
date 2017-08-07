import { combineReducers } from 'redux'

import books from './bookReducer'
import visibilityFilter from './visibilityReducer' 

const bookApp = combineReducers({
  books,
  visibilityFilter
})

export default bookApp