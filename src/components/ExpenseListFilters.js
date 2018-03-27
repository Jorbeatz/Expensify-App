import React from 'react';
import { DateRangePicker } from 'react-dates';	
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null
	};

	onDatesChanges = ({startDate, endDate}) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};

	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};

	render() {
		return (
			<div>
				<input 
					type="text" 
					value={this.props.filters.text} 
					onChange={(e) => {
						this.props.dispatch(setTextFilter(e.target.value));
					}}/>
				<select 
					value={this.props.filters.sortBy} 
					onChange={(e) => {
						if (e.target.value === 'date') {
							this.props.dispatch(sortByDate());
						} else if (e.target.value === 'amount') {
							this.props.dispatch(sortByAmount());
						}
					}}>
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

const MapStateToProps = (state) => {
	return {
		filters: state.filter
	}
};

export default connect(MapStateToProps)(ExpenseListFilters);