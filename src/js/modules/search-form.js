/**
 * Open search form
 */
const openSearchButton = document.getElementById('open-search');
const searchForm = document.getElementById('search-form');
const closeSearchButton = document.getElementById('close-form');

function openSearchForm() {
  setTimeout(() => {
    searchForm.querySelector('input').focus();
  }, 50);
  searchForm.style.display = 'flex';
  this.style.display = 'none';
  closeSearchButton.style.display = 'block';
}
function closeSearchForm() {
  searchForm.style.display = 'none';
  openSearchButton.style.display = 'block';
  this.style.display = 'none';
}
if (openSearchButton && searchForm && closeSearchButton) {
  openSearchButton.addEventListener('click', openSearchForm);
  closeSearchButton.addEventListener('click', closeSearchForm);
}
