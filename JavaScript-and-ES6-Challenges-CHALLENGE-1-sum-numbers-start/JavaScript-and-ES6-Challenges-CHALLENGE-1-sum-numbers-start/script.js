/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";

let sum = (...numbers) =>{
    let value;
    value = numbers.reduce((add, num) => add + num);
    console.log(value);
}

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110

sum(10, 100, 11, 21, 56, 71, 81, 256);