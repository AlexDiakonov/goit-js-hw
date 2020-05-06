"use strcit";
let range = document.querySelector("#font-size-control");
range.value = 30;
let text = document.querySelector("#text");
text.style.fontSize = range.value + "px";
range.addEventListener("input", changeFont);
function changeFont() {
  let size = range.value;
  text.style.fontSize = size + "px";
}
