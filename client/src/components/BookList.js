import React, {Component} from 'react'
import Book from './Book.js';

const BookList = ({books}) => (
		<ul>
			{books.map(book => (
				<Book key={book.id} {...book} />
				))}
		</ul>
	)

export default BookList