import menu from './menu.json';
import template from './template/menu.hbs';
import './theme.js';
import './styles.css';
const menuList = document.querySelector('.js-menu');
buildMenu(menu);
function buildMenu(menu) {
  const markUp = menu.map(menuItem => template(menuItem)).join('');
  menuList.insertAdjacentHTML('beforeend', markUp);
}
