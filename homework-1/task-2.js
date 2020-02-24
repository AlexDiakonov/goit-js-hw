`use strict`;
const total = 100;
const ordered = parseInt(prompt("Сколько товаров хотите приобрести?"));
console.log(typeof ordered);
if (ordered <= total) {
  alert(`Заказ оформлен, с вами свяжется менеджер`);
} else if (ordered > total) {
  alert(`На складе недостаточно твоаров!`);
} else alert("Вы не заказали ниодного товара, будьте внимательнее, ну же!)");
