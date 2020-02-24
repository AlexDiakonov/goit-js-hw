"use strict";
let credits = 23580;
const pricePerDroid = 3000;

let quantity = prompt("How many droid's you want to buy");

let totalPrice = quantity * pricePerDroid;
let message;

if (quantity === null) {
  (message = `Operation was canceled`), alert(message);
} else {
  if (isNaN(quantity)) {
    (message = `Please type the number of droids you would like to buy`),
      alert(message);
  } else {
    if (totalPrice <= credits) {
      (message = `You have bought ${quantity} for ${totalPrice}, you have ${credits -
        totalPrice} credits left`),
        alert(message);
    }
  }
}
if (credits < totalPrice) {
  (message = `You are missing ${totalPrice - credits} credits`), alert(message);
}
