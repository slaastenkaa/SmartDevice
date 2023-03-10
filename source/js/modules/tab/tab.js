export function initTab() {
  const aboutContent = document.querySelector('.about__content');
  const tabMoreButtons = document.querySelectorAll('[data-tabmore-button]');
  const tabMoreText = document.querySelector('[data-tabmore-text]');

  tabMoreButtons.forEach((item) => {
    aboutContent.classList.remove('about__content-nojs');
    item.addEventListener('click', () => {
      if (tabMoreText.classList.contains('about__content-text-hidden')) {
        tabMoreText.classList.remove('about__content-text-hidden');
        item.textContent = 'Свернуть';
      } else {
        tabMoreText.classList.add('about__content-text-hidden');
        item.textContent = 'Подробнее';
      }
    });
  });
}
