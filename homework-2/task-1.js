"use strict";
function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    let arrayNumber = i + 1;
    let message = `${arrayNumber}- ` + array[i];
    console.log(message);
  }
}

let firstList = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
let secondList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let message = logItems(firstList);

let message2 = logItems(secondList);
