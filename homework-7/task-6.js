"use strict";
let input = document.getElementById("validation-input");
input.addEventListener("input", function () {
  let val = this.value;
  let len = val.length;

  if (len != this.dataset.length) {
    this.classList.add("invalid");
    this.classList.remove("valid");
  } else if (len == this.dataset.length) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
});
