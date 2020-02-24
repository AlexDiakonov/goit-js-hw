`use strict`;
let delivery;
const destination = prompt(`Куда доставить товар?`).toLowerCase();
if (destination === null) {
} else {
  switch (destination) {
    case "китай":
      delivery = 100;
      break;
    case "чили":
      delivery = 250;
      break;
    case "австралия":
      delivery = 170;
      break;
    case "индия":
      delivery = 80;
      break;
    case "ямайка":
      delivery = 120;
      break;
    default:
      alert(`В вашей стране стране доставка не доступна`);
  }
}
if (delivery) {
  alert(`Доствка в ${destination} будет стоить ${delivery}`);
}
