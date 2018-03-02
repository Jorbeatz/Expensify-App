import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();
const state = store.getState();

store.subscribe(() => {
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'water bill', amount: 2000, createdAt: 1400 }));
const expenseTwo = store.dispatch(addExpense({ description: 'gas bill', amount: 3000, createdAt: 1600 }));

store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

console.log(store.getState());

// setTimeout(() => {
// 	store.dispatch(setTextFilter('water'));
// }, 3000)

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));