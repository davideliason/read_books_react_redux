 let nextBookId = 0

 export const addBook = (title,author) => {
 	return {
 		type: 'ADD_BOOK',
 		id: nextBookId++,
 		title: title,
 		author: author
 	}
 }




 export const addNumber = num => {
 	return {
 		type: 'ADD_NUM',
 		num
 	}
 }

 export const subtractNumber = num => {
 	return {
 		type: 'SUBTRACT_NUM',
 		num
 	}
 }

