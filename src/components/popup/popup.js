import { validateForms } from '../form/form';

document.addEventListener('click', (event) => {
  const link = event.target.closest('.js-popup-btn');

  if (link) {
    event.preventDefault();
    const href = link.getAttribute('href');
    const currentPopup = document.querySelector(href);

    showPopup(currentPopup);
  }
});

export function showPopup(popup) {
  const body = document.querySelector('body');
  popup.classList.toggle('is-show');
  body.classList.toggle('overflow');

  document.addEventListener('click', (e) => {
    const bg = e.target.closest('.popup');
    const popupContainer = e.target.closest('.js-popup .popup__container');
    const closeButton = e.target.closest('.js-popup-close');

    if ((!popupContainer && bg) || closeButton) {
      popup.classList.remove('is-show');
      body.classList.remove('overflow');

      validateForms.forEach((form) => {
        if (form.form === popup.querySelector('form')) {
          form.refresh();
        }
      });
      popup.querySelector('form').reset();
    }
  });
}
