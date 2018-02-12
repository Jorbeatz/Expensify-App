/*

Object Destructuring

*/

// const person = {
// 	name: 'Jordy',
// 	age: 21,
// 	location: {
// 		city: 'Rochester',
// 		temp: 23
// 	}
// };

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);	
// }

/*

Array Destructuring

*/

const address = ['1299 S Juniper Street', 'Rochester', 'New York', '19147'];

const [, city, state = 'Hell', ] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium, ] = item; 
console.log(`a medium ${coffee} costs ${medium}`);