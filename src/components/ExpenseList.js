import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseList';


const ExpenseList = (props) => (
	<div>
		<h1> Expense List </h1>
		{props.expenses.length}
		{
			props.expenses.map((expense) => {
				return 
			})
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: state.expenses,
		filters: state.filter
	};
};

export default connect(mapStateToProps)(ExpenseList);