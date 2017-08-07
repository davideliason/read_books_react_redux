import {connect} from 'react-redux'
import BookList from '../components/BookList.js'

const mapStateToProps = state => {
	books: state.books
}

const WrapperBookList = connect(
		mapStateToProps
	)(BookList)

export default WrapperBookList