"use strict";
let input = document.querySelector("#controls > input");
let container = document.querySelector("#boxes");
let createBtn = document.querySelector("[data-action='render']");
let removeBtn = document.querySelector("[data-action='destroy']");
let number;

createBtn.addEventListener("click", function () {
  let size = 30;
  number = input.value;
  container.innerHTML = "";
  for (let i = 0; i < number; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.marginRight = 10 + "px";
    newDiv.style.width = size + "px";
    newDiv.style.height = size + "px";
    newDiv.style.backgroundColor = getRandomRgb();
    container.appendChild(newDiv);
    size += 10;
  }
});
removeBtn.addEventListener("click", function () {
  container.innerHTML = "";
  input.value = 0;
});
function getRandomRgb() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
