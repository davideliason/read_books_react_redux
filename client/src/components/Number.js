import React,{Component} from 'react';

const Button = ({number,onClick }) => (
		<button onClick={onClick} >{number}</button>
	)

export default Button