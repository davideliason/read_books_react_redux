const books = (state = [], action) => {
	switch(action.type){
		case 'ADD_BOOK':
			return [
				...state, {
					id: action.id,
					title: action.title,
					author: action.author,
					read: false
				}
			]
	    case 'TOGGLE_READ':
	        return state.map(book => (book.id === action.id) ? {...book,read:!book.read} : book )
		default:
			return state
	}

}

export default books