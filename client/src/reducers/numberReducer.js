
const initialState = { num: 0 };

const number = (state = initialState, action) => {
	switch (action.type){
		case 'ADD_NUM':
		  return {
		  	num: action.num
		  }
		  case 'SUBTRACT_NUM':
		    return {
		    	num: action.num
		    }
		 default:
		 	return state 
	}
}

export default number