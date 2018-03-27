import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import { 
	setStartDate, 
	setEndDate, 
	setTextFilter 
} from '../../actions/filters';

test('should set up default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT'});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	};
	const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'});
	expect(state.sortBy).toBe('date');
});

// Should set text filter
test('should set textFilter', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	};
	const text = "test_in";
	const action = {
		type: 'SET_TEXT_FILTER',
		text
	};
	const state = filtersReducer(currentState, action);
	expect(state.text).toBe(text);
});

// Should set startDate filter
test('should set startDate filter', () => {
	const startDate = moment();
	const action = {
		type: 'SET_START_DATE',
		startDate
	};
	const state = filtersReducer(undefined, action);
	expect(state.startDate).toBe(startDate);
});

// Should set endDate filter
test('should set endDate filter', () => {
	const endDate = moment();
	const action = {
		type: 'SET_END_DATE',
		endDate
	};
	const state = filtersReducer(undefined, action);
	expect(state.endDate).toBe(endDate);
});




