let hasValue: boolean = false;
let count: number = 12;
let float: number = 3.14;
let negative: number = -10;
let single: string = 'hello';

const person = {
	name: 'jack',
	age: 20,
	nest: {
		nest1: 1,
		nest2: '2',
	}
}
console.log(person.name);
console.log(person.nest.nest1);

const fuits = [
	'Apple',
	'Banana',
	'Grape',
];

const book: [
	string,
	number,
	boolean
] = [
	'business',
	1500,
	false,
];


function test_num(num: number, cb: (num: number) => number): void {
	console.log(num * 2);
	const doubleNum = cb(num * 2);
}
test_num(20, doubleNum =>{
	return doubleNum;
});

10 satisfies number;