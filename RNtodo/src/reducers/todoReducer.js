const initialState = {
	fetching: false,
	fetched: false,
	error: null,
	todos: [],
	editTodo: []
}

const todoReducer = function(state=initialState, action){
	switch(action.type) {
		case 'FETCH_TODO_PENDING':
			return {...state, fetching: true}
			break;
		case 'FETCH_TODO_FULFILLED':
			return {...state, fetching: false, fetched: true, todos: action.payload.data}
			break;
		case 'FETCH_TODO_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;

		case 'GET_TODO_PENDING':
			return {...state, fetching: true}
			break;
		case 'GET_TODO_FULFILLED':
			return {...state, fetching: false, fetched: true, editTodo: action.payload.data}
			break;
		case 'GET_TODO_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;

		case 'CREATE_TODO_PENDING':
			return {...state, fetching: true}
			break;
		case 'CREATE_TODO_FULFILLED':
			return {...state, fetching: false, fetched: true, todos: [...state.todos, action.payload.data] }
			break;
		case 'CREATE_TODO_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;

		case 'UPDATE_TODO_PENDING':
			return {...state, fetching: true}
			break;
		case 'UPDATE_TODO_FULFILLED':
			return {...state, fetching: false, fetched: true, todos: action.payload.data}
			break;
		case 'UPDATE_TODO_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;

		case 'DELETE_TODO_PENDING':
			return {...state, fetching: true}
			break;
		case 'DELETE_TODO_FULFILLED':
			return {...state, fetching: false, fetched: true, todos: state.todos.filter(item => item.id !== action.payload.data)}
			break;
		case 'DELETE_TODO_REJECTED':
			return {...state, fetching: false, error: action.payload}
			break;

		default:
			return state;
	}
}

export default todoReducer;