

function renderBooks(books) {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(json));

const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function initilize(){
  renderBooks()
} initilize()

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
