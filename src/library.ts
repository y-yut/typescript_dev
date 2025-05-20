/// <refarence path="./lodash.ts" />

import  axios  from "axios";

declare module 'axios' {
	export const apple: 'apple';
}

// axios.get('https://jsonplaceholder.typicode.com/todos/1');

import _ from "lodash";

// _.shuffle([1,2,3]);
// declare const _: {
// 	shuffle<T>(array: T[]): T[]
// }


console.log(_.shuffle([1,2,3]));