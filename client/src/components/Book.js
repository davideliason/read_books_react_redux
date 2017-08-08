import React from 'react';

const Book = ({title,author,read, onClick}) => (
		<li onClick={onClick} style={{ color: read ? 'blue' : 'red'}}>
			title: {title} author: {author}
		</li>
	)

export default Book;