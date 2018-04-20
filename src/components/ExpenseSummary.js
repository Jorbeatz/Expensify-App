import React from 'react';
import { connect } from 'react-redux';
import ExpenseTotal from '../selectors/expenses-total';
import expenseSelector from '../selectors/expenses';
import numeral from 'numeral';

const ExpenseSummary = (props) => (
	<div>
		<h2>Viewing {props.ExpenseCount} expenses totaling {numeral(props.ExpenseTotal/100).format('$0,0.00')}</h2>
	</div>
);

const mapStateToProps = (state) => {
	return {
		ExpenseTotal: ExpenseTotal(expenseSelector(state.expenses, state.filter)),
		ExpenseCount: expenseSelector(state.expenses, state.filter).length
	};
};

export default connect(mapStateToProps)(ExpenseSummary);