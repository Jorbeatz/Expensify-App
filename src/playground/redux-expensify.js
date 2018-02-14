import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/*
	ACTION GENERATORS
*/
/* ######################################################### */
// ADD_EXPENSE
const addExpense = (
	{
		description = '',
		note = '',
		amount = 0,
		createdAt = 0 
	} = {}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt	
	}
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

/* ######################################################### */




/*
	REDUCERS
*/
/* ######################################################### */
// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
			...state,
			action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if(expense.id === action.id) {
					return {
						...state,
						...action.updates
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
}

// Filters Reducer
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			}
		default:
			return state;
	}
};
/* ######################################################### */




/*
	STORE
*/
/* ######################################################### */
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filter: filtersReducer
	})
);
/* ######################################################### */



// Log updates to store
store.subscribe(() => {
	console.log(store.getState());
});


// Dispatching Actions
// Adding expenses
const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300 }));
// Removing expenses
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// Editing expenses and text filter
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());


// Example State
const demoState = {
	expenses: [{
		id: 'testID',
		description: 'January Rent',
		note: 'Final payment for that address',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};

// ES6 Spread Operator for Objects
const user = {
	name: "Jordy",
	age: 23
};

console.log({
	...user,
	age: 55
});