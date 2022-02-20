/*
Rules to live by:

* Don't use var. Use let and const.
* Prefer const over let.
*/

const checkValue = false;
const sum = checkValue ? 10 : 20;
// let sum = 0;
// if(checkValue) {
//   sum = 10;
// } else {
//   sum = 20;
// }
console.log(sum);

// var sum = undefined;
// const checkValue = true;
// if(checkValue) {
//   sum = 10;
// } else {
//   sum = 20;
// }
// console.log(sum);
