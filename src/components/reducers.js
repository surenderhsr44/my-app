const mainReducer = (state, action) =>{
	switch(action.type){
		case "RESET_COUNTER":
		return {
			...state,
		currentValue : action.newValue
			}
		case "DECREMENT":
		return{
			...state,
			currentValue:state.currentValue-1
		}

		
		default:
		return state;
	}
}
export default mainReducer;