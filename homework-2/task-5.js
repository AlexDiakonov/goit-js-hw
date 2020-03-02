"use strict";
function checkForSpam(message) {
  let spam = ["sale", "spam"];
  for (let i = 0; i < spam.length; i++) {
    if (message.toLowerCase().includes(spam[i])) {
      return true;
    }
  }
  return false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
