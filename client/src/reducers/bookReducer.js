const book_reducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_BOOK':
			return [
				...state, {
					id: action.id,
					title: action.title,
					author: action.author,
					read: false,
					owned: false
				}
			]
		default:
			return state
	}

}

export default book_reducer