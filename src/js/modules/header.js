// eslint-disable-next-line import/extensions
import isMobile from '../functions.js';

const burgerButton = document.getElementById('burger-button');
const burgerInner = document.getElementById('burger-inner');
const burgerCross = document.getElementById('burger-cross');
const burgerMenu = document.getElementById('header-menu');

if (burgerButton) {
  burgerButton.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('active-menu')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
    }
    burgerCross.classList.toggle('active-burger');
    burgerInner.classList.toggle('active-burger');
    burgerMenu.classList.toggle('active-menu');
  });
}

/**
 *
 *  Multi-level menu
 *
 */
const itemsHasChildren = document.querySelectorAll('.menu-item-has-children');

function toggleSubmenu() {
  const subMenu = this.querySelector('.sub-menu');
  this.classList.toggle('is-active');
  if (window.innerWidth < 1024) {
    subMenu.style.maxHeight = this.classList.contains('is-active') ? `${subMenu.scrollHeight}px` : 0;
  }
}

itemsHasChildren.forEach(link => {
  if (link && isMobile.any()) {
    link.addEventListener('click', toggleSubmenu);
  }
});

/**
 * Click outside
 */
function clickOutside(e) {
  if (!e.target.closest('.menu-item-has-children') && !e.target.closest('.sub-menu') && document.querySelector('.is-active')) {
    itemsHasChildren.forEach(el => el.classList.remove('is-active'));
  }
}
document.addEventListener('click', e => {
  clickOutside(e);
});
