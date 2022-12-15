import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//const newNumbers = numbers.map(function (x) {
//  return x * x;
//});

const newNumbers = numbers.map((x) => x * x);
console.log(newNumbers);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

const newNumbers2 = numbers.map((x) => x * 2);
console.log(newNumbers2);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

const newNumbers3 = numbers.filter((x) => x < 10);
console.log(newNumbers3);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

const newNumbers4 = numbers.reduce((x, y) => x + y);
console.log(newNumbers4);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

const newNumbers5 = numbers.find((x) => x > 10);
console.log(newNumbers5);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const newNumbers6 = numbers.findIndex((x) => x > 10);
console.log(newNumbers6);
