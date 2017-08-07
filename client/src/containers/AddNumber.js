import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addNumber} from '../actions';

let AddNumber = ({dispatch}) => {
	let input

	return (
   		 <div>
   		 	<form onSubmit={e => {
   		 		e.preventDefault()
   		 		dispatch(addNumber(input.value))
   		 		input.value=''
   		 	   }}
   		 	 >
   		 	  <input 
   		 	  	ref={node => {
   		 	  		input = node
   		 	  	}}
   		 	   />
   		 	   <button type="submit"> Add Number </button>
   		 	  </form>
   		 </div>
		)
}

AddNumber = connect()(AddNumber)

export default AddNumber