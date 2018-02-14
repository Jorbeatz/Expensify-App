import { createStore } from 'redux';

// Action Generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count = 0 }) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET',
})

const countReducer = ((state = { count:0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			}
		case 'RESET':
			return {
				count: 0
			}
		case 'SET':
			return {
				count: action.count
			}
		default:
			return state;
	};	
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe = store.subscribe(() => {
	console.log(store.getState());
});

// unsubscribe();

// store.dispatch({
// 	type: 'SET',
// 	count: 100
// });

// store.dispatch({
// 	type: 'DECREMENT',
// 	decrementBy: 10
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 200 }));
store.dispatch(resetCount());

