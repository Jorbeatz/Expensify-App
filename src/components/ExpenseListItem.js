import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, createdAt, amount, dispatch}) => (
	<div>
		<h1>{description}</h1>
		<p>{createdAt}-{amount}</p>
		<button onClick={() => {
			dispatch(removeExpense({ id }));
		}}>remove</button>
	</div>
);

export default connect()(ExpenseListItem);
