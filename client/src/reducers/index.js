
const initialState = { num: 0 };

const number = (state = initialState, action) => {
	switch (action.type){
		case 'ADD_NUM':
		  return {
		  	num: action.num + 2
		  }
		  case 'SUBTRACT_NUM':
		    return {
		    	num: action.num - 2
		    }
		 default:
		 	return state 
	}
}

export default number