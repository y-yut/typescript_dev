"use strict";
let hasValue = false;
let count = 12;
let float = 3.14;
let negative = -10;
let single = 'hello';
const person = {
    name: 'jack',
    age: 20,
    nest: {
        nest1: 1,
        nest2: '2',
    }
};
console.log(person.name);
console.log(person.nest.nest1);
const fuits = [
    'Apple',
    'Banana',
    'Grape',
];
const book = [
    'business',
    1500,
    false,
];
function test_num(num, cb) {
    console.log(num * 2);
    const doubleNum = cb(num * 2);
}
test_num(20, doubleNum => {
    return doubleNum;
});
10;
