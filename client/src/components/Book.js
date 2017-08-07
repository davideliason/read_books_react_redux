import React,{Component} from 'react';

const Book = ({book}) => (
		<li>
			title: {book.title}
			author: {book.author}
			read: {book.read}
			owned: {book.owned}
		</li>
	)

export default Book;