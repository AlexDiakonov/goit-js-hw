const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
let ul = document.querySelector("#ingredients");

let arr = ingredients.map((ingredint) => {
  let li = document.createElement("li");
  li.textContent = ingredint;
  return li;
});
console.dir(arr);
ul.append(...arr);
