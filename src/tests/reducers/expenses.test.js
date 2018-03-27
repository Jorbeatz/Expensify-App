import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test("should set default state", () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test("should remove expense by id", () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[2].id
	};
	const state = expensesReducer(expenses, action);
	c
});

