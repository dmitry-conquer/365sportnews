const toTopButton = document.querySelector('.to-top-button');
const offset = 600;

function scroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > offset && !toTopButton.classList.contains('is-visible')) {
    toTopButton.classList.add('is-visible');
  } else if (scrollTop < offset && toTopButton.classList.contains('is-visible')) {
    toTopButton.classList.remove('is-visible');
  }
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

toTopButton.addEventListener('click', toTop);
window.addEventListener('scroll', scroll);
