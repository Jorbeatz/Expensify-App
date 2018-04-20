import expenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return sum of 0 if empty', () => {
	const action = expenseTotal([]);
	expect(action).toBe(0);
});

test('should return sum total', () => {
	const action = expenseTotal(expenses);
	expect(action).toBe(14020)
});