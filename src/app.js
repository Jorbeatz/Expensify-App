import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; // Makes the redux store available to connect, just wrapping it will do
import AppRouter from './routers/AppRouter'; // Route the website, based on the link
import configureStore from './store/configureStore'; // Needed to start the store

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'react-dates/lib/css/_datepicker.css';

import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();
const state = store.getState();

store.subscribe(() => { // This will log changes to the store
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
	console.log(visibleExpenses);
});

// store.dispatch(addExpense({ description: 'water bill', amount: 20000, createdAt: 400 }));
// store.dispatch(addExpense({ description: 'gas bill', amount: 300, createdAt: 2000 }));
// store.dispatch(addExpense({ description: 'rent', amount: 30, createdAt: 10000 }));

// console.log(store.getState());

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app")); 