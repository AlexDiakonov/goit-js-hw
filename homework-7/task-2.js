const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
let ul = document.querySelector("#ingredients");

ingredients.forEach((i) => {
  let li = document.createElement("li");
  let text = document.createTextNode(i);
  li.appendChild(text);
  ul.appendChild(li);
});
