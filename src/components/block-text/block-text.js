const faqHeads = document.querySelectorAll('.js-faq-head');
const faqContent = document.querySelectorAll('.js-faq-content');
const faqItem = document.querySelectorAll('.js-faq-item');

!!faqHeads.length && faqHeads.forEach((accordionHead, i) => {
  accordionHead.addEventListener('click', () => {
    if (faqItem[i].classList.contains('is-open')) {
      faqItem[i].classList.remove('is-open');
      faqContent[i].style.maxHeight = '0px';
    } else {
      faqItem[i].classList.add('is-open');
      faqContent[i].style.maxHeight = `${faqContent[i].scrollHeight}px`;
    }
  });
});
