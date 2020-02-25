"use strict";
const ADMIN_PASS = "admin123";
let value = prompt("Пожалуйста, введите ваш пароль!");
let message;

if (value === ADMIN_PASS) {
  message = `Добро пожаловать!`;
} else if (value === null) {
  message = `Отменено пользователем!`;
} else {
  message = `Доступ запрещен, неверный пароль!`;
}
alert(message);
