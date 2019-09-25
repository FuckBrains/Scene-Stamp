import {
	GET_COMPILATION_DATA,
	NEW_COMPILATION_DATA
} from '../actions/action-types'

const initialState = {
	compilation_data: [],
};

function timestampReducer(state = initialState, action) {
	switch(action.type){
		case GET_COMPILATION_DATA:
			return {
				...state,
				compilation_data: action.payload}
		case NEW_COMPILATION_DATA:
			return {
				...state,
				compilation_data: state.compilation_data.concat(action.payload)}
		default:
			return state

	}
};

export default timestampReducer;