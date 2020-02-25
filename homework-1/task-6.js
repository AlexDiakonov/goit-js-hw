`use strict`;
// let total = 0;
// let input = Number(prompt("Enter your number"));
// while (input) {
//   total += input;
//   input = Number(prompt("Enter your number"));
// }
// alert(`Your total sum is ${total}`);
let total = 0;
let input;
do {
  input = prompt(`entr your number`);
  total += Number(input);
} while (input !== null);
alert(`The sum of your numbers is ${total}`);
