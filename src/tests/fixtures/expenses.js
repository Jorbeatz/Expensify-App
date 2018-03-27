import moment from 'moment';

export default [{
	id: '1',
	description: 'gum',
	note: 'chewy',
	amount: 1000,
	createdAt: moment(0).valueOf()
}, {
id: '2',
	description: 'gas',
	note: 'chewy',
	amount: 2000,
	createdAt: moment(0).subtract(4, 'day').valueOf()
}, {
id: '3',
	description: 'water',
	note: 'chewy',
	amount: 10020,
	createdAt: moment(0).subtract(3, 'day').valueOf()
}, {
id: '4',
	description: 'food',
	note: 'chewy',
	amount: 1000,
	createdAt: moment(0).add(2, 'day').valueOf()
}];