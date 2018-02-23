import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
	/* STORE */
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filter: filtersReducer
		})
	);

	return store;
};

