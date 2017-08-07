import React from 'react'
import { connect } from 'react-redux';
import { addBook } from '../actions/index.js';

let AddBook = ({dispatch}) => {
	let titleInput, authorTitle

	return (
 			<div>
 				<form 
 				  onSubmit= {e => {
 				  	e.preventDefault()
 				  	dispatch(addBook(titleInput.value,authorTitle.value));
 				  	titleInput.value = ''
 				  	authorTitle.value = ''
 				  }}
 				  >
 				  <input placeholder="author"
 				    ref={node => {
 				    	titleInput = node
 				    }}
 				    />
 				     <input placeholder="title"
 				    ref={node => {
 				    	authorTitle = node
 				    }}
 				    />
 				  <button type="submit"> Add Book</button>
 				</form>
 			</div>
		)
}

AddBook = connect()(AddBook)

export default AddBook