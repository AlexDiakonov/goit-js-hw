"use strict";
let input = document.getElementById("name-input");
let span = document.getElementById("name-output");

input.addEventListener("input", function () {
  let value = this.value;
  if (value) {
    span.textContent = value;
  } else {
    span.textContent = "незнакомец";
  }
});
