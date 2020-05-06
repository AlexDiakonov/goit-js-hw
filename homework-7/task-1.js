"use strict";

let totalCateg = document.querySelectorAll(".item").length;

let allH = document.querySelectorAll(".item");
let total = allH.forEach((el) => {
  let titleName = el.querySelector("h2").textContent;
  let totalEl = el.querySelectorAll("li").length;
  return console.log(`категория ${titleName} кол-во элементов ${totalEl}`);
});
console.log(`в списке ${totalCateg} категории`);
