"use strict";
const ADMIN_PASS = "admin123";
let value = prompt("Пожалуйста, введите ваш пароль!");
let message;

if (value === ADMIN_PASS) {
  (message = `Добро пожаловать!`), alert(message);
} else if (value === null) {
  (message = `Отменено пользователем!`), alert(message);
} else {
  (message = `Доступ запрещен, неверный пароль!`), alert(message);
}
