import expenses from '../tests/fixtures/expenses';

export default (expenses) => {
	return expenses
		.map(expense => { return expense.amount;})
		.reduce((prevVal, currVal) => prevVal + currVal, 0);
};