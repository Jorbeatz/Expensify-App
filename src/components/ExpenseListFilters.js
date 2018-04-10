import React from 'react';
import { DateRangePicker } from 'react-dates';	
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null
	};

	onDatesChanges = ({startDate, endDate}) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};

	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};

	onSortChange = (e) => {
		if (e.target.value === 'date') {
			this.props.sortByDate();
		} else if (e.target.value === 'amount') {
			this.props.sortByAmount();
		}
	}

	render() {
		return (
			<div>
				<input 
					type="text" 
					value={this.props.filters.text} 
					onChange={this.onTextChange}/>
				<select 
					value={this.props.filters.sortBy} 
					onChange={this.onSortChange}>
					<option value="date">date</option>
					<option value="amount">amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId="start"
					endDateId="end"
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChanges}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={()=>false}
				/>
			</div>
		);
	}
}

// MapStateToProps has a store state as an argument and is used to link a component with a certain part of the store state 
// It's basically giving the components the props it needs
const MapStateToProps = (state) => {
	return {
		filters: state.filter
	}
};

const mapDispatchToProps = (dispatch) => ({
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate)),
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
});

export default connect(MapStateToProps, mapDispatchToProps)(ExpenseListFilters);