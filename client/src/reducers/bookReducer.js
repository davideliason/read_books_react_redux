const books = (state = [{id:0,title:'2001',author:'jim',read:false,owned:false}], action) => {
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

export default books