import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
		/>);
});

test('ExpenseListFilters should render correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('ExpenseListFilters should render correctly with AltFilters', () => {
	wrapper.setProps({
		filters: altFilters,
	});
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
	const value = 'cheese';
	wrapper.find('input').simulate('change', {
		target: { value }
	});
	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
	wrapper.setProps({
		filters: altFilters,
	});
	const value = 'date';
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sort by amount', () => {
	const value = 'amount';
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle date changes', () => {
	const startDate = moment(0).add(4, 'years');
	const endDate = moment(0).add(8, 'years');
	wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle on focus change', () => {
	const calendarFocused = 'endDate';
	wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
	expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});