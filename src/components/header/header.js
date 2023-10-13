const questionIcon = document.querySelector('.js-header-question-icon');
const questionDrop = document.querySelector('.js-header-question-drop');

!!questionIcon && !!questionDrop && questionIcon.addEventListener('click', () => {
  questionDrop.classList.toggle('show');
});

function removeDropShow(e) {
  if (!!questionIcon && !!questionDrop.classList.contains('show') && e.target !== questionIcon) {
    questionDrop.classList.remove('show');
  }
}
document.addEventListener('click', removeDropShow);
