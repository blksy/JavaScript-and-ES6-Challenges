/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/

"use strict";

var obj = {
  x: 5,
  y: 20,
  z: 3
};


// Write mult() function here
let mult = ({x, y, z}) =>{
   return x * y * z;
}

console.log(mult(obj));
// 300
