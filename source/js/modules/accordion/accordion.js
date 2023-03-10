export function initAccordion() {
  const footerContainer = document.querySelector('.footer__container');
  const accordionContent = document.querySelectorAll('[data-accordion]');

  accordionContent.forEach((item, index) => {
    footerContainer.classList.remove('footer__accordion-nojs');
    let title = item.querySelector('[data-accordion-title]');
    title.addEventListener('click', () => {
      item.classList.toggle('footer__accordion-open');
      removeOpen(index);
    });
  });

  function removeOpen(indexClose) {
    accordionContent.forEach((itemSecond, indexSecond) => {
      if (indexClose !== indexSecond) {
        itemSecond.classList.remove('footer__accordion-open');
      }
    });
  }
}
