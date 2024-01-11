document.querySelectorAll('.copy-crypto').forEach(button => {
  function copyText() {
    const textToCopy = this.previousElementSibling;
    const message = this.querySelector('span');
    navigator.clipboard
      .writeText(textToCopy.textContent)
      .then(() => {
        message.style.display = 'block';
        setTimeout(() => {
          message.style.display = 'none';
        }, 1000);
      })
      .catch(err => console.error(err));
  }
  if (button) {
    button.addEventListener('click', copyText);
  }
});
