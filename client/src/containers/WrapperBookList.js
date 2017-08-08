import { connect } from 'react-redux'
import {toggleRead } from '../actions'
import BookList from '../components/BookList.js'

const setBookFilter = (books,filter) => {
	switch(filter){
		case 'SHOW_ALL':
		  return books
		case 'SHOW_READ':
		  return books.filter(t => t.read)
		default:
			return books
	}
}


const mapStateToProps = state => {
  return {
  	books : setBookFilter(state.books,state.visibilityFilter)
    // books: [{id:10,title:'0000',author:'adafa',read:true,owned:false}]
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onBookClick: id => {
			dispatch(toggleRead(id))
		}
	}
}

const WrapperBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)


export default WrapperBookList