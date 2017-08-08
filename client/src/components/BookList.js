import React from 'react'
import Book from './Book.js';

const BookList = ({ books, onBookClick }) => (
  <ul>
    {books.map(book => (
      <Book key={book.id} {...book} onClick={() => onBookClick(book.id)} />
    ))}
  </ul>
)

export default BookList