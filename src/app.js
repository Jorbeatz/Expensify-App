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

store.dispatch(addExpense({ description: 'water bill', amount: 20000, createdAt: 400 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 300, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'rent', amount: 30, createdAt: 10000 }));

console.log(store.getState());

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));