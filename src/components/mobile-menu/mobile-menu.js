const burgerIcon = document.querySelector('.js-header-burger');
const menu = document.querySelector('.js-menu');

!!burgerIcon && !!menu && burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('open');
  menu.classList.toggle('is-open');
});
