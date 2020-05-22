const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const switcher = document.querySelector('.js-switch-input');
const storageBodyClass = localStorage.getItem('theme');

if (storageBodyClass === 'dark-theme') {
  body.classList = storageBodyClass;
  switcher.checked = true;
} else {
  switcher.cheked = false;
}

switcher.addEventListener('change', changeTheme);

function changeTheme(e) {
  if (e.target.checked === true) {
    body.classList.remove(`${Theme.LIGHT}`);
    body.classList.add(`${Theme.DARK}`);
  } else if (e.target.checked === false) {
    body.classList.remove(`${Theme.DARK}`);
    body.classList.add(`${Theme.LIGHT}`);
  }
  localStorage.setItem('theme', body.classList);
}
