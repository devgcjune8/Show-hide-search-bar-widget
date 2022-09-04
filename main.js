const searchBtn = document.querySelector('.btn');
const searchInput = document.querySelector('.search-input');
const searchBar = document.querySelector('.search')

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('searching');
    searchInput.focus()
})