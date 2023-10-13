import JustValidate from 'just-validate';

const forms = document.querySelectorAll('.js-form');

export const validateForms = [];

forms.length && forms.forEach((el) => {
  const validateForm = new JustValidate(el);

  !!el.querySelector('#login') && validateForm.addField('#login', [
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
  ]);
  !!el.querySelector('#password') && validateForm.addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Заполните поле',
    },
  ]);
  validateForm.onSuccess((event) => {
    ///
  });

  validateForms.push(validateForm);
});
