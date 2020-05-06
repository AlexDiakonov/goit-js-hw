"use strict";
let counterValue = Number(document.querySelector("#value").textContent);

let btns = document.querySelectorAll("#counter > button");
function action(e) {
  if (this.dataset.action == "increment") {
    counterValue++;
  } else {
    counterValue--;
  }
  document.querySelector("#value").textContent = counterValue;
}
btns.forEach((el) => {
  el.addEventListener("click", action);
});
