import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, createdAt, amount, dispatch}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h1>{description}</h1>
		</Link>
		<p>{createdAt}-{amount}</p>
		<button onClick={() => {
			dispatch(removeExpense({ id }));
		}}>remove</button>
	</div>
);

export default connect()(ExpenseListItem);
