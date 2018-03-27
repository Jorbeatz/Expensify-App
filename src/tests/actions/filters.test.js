import moment from 'moment';
import { 
	setStartDate, 
	setEndDate, 
	sortByDate, 
	sortByAmount, 
	setTextFilter 
} from '../../actions/filters';


test('should generate start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate end date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should generate sort date action object', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE',
	});
});

test('should generate sort amount action object', () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
	});
});

test('should generate set text filter object with provided values', () => {
	const text = "test_in"
	const action = setTextFilter(text);
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: text,
	});
});

test('should generate set text filter object with default values', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: '',
	});
});