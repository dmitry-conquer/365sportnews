const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(btn => {
  function readMore() {
    const hiddenContent = this.parentNode.querySelector('.hidden-text-prose');
    hiddenContent.style.display = 'block';
    this.style.display = 'none';
  }
  if (btn) {
    btn.addEventListener('click', readMore);
  }
});
