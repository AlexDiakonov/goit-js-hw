`use strict`;
let total = 0;
let input = +prompt(`Enter your number`);
while (input) {
  total += input;
  input = +prompt(`Enter your number`);
}
alert(`Your total sum is ${total}`);

// let total = 0;
// let input = +prompt(`entr your number`);
// do {
//   total += input;
//   if (input === null) {
//     alert(`The sum of your numbers is ${total}`);
//   }
// } while (input);
// alert(`The sum of your numbers is ${total}`);
