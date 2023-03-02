const footerContainer = document.querySelector('.footer__container');
const accordionContent = document.querySelectorAll('[data-accordion]');

footerContainer.classList.remove('footer__accordion-nojs');

accordionContent.forEach((item, index) => {
  let header = item.querySelector('[data-accordion-title]');
  header.addEventListener('click', () => {
    item.classList.toggle('footer__accordion-open');
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 !== index2) {
      item2.classList.remove('footer__accordion-open');
    }
  });
}
