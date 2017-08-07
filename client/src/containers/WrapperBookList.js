import { connect } from 'react-redux'
import BookList from '../components/BookList.js'

const mapStateToProps = state => {
  return {
    books: [{id:10,title:'0000',author:'adafa',read:true,owned:false}]
  }
}

const WrapperBookList = connect(
  mapStateToProps
)(BookList)


export default WrapperBookList