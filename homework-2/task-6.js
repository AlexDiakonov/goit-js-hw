"use strict";
let numbers = [];
let total = 0;

pushToArray();
function pushToArray() {
  let input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Введите число");
    pushToArray();
  } else {
    if (input !== null) {
      numbers.push(Number(input));
      pushToArray();
    } else {
      for (let i = 0; i < numbers.length; i++) {
        total = numbers[i] + total;
      }
    }
  }
}
alert(`Ваша сумма = ${total}`);

// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
//   input = prompt("Enter the number...");
//   numbers.push(Number(input));
//   console.log(numbers);
// }
// if (input === null) {
//   for (let i = 0; i < numbers.length; i++) {
//     total = numbers[i] + total;
//   }
// }
// console.log(total);
