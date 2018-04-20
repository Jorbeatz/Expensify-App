import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import ExpenseTotal from '../selectors/expenses-total';
import expenseSelector from '../selectors/expenses';
import numeral from 'numeral';

const ExpenseDashboardPage = (props) => (
	<div>
		<ExpenseSummary />
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export default ExpenseDashboardPage;