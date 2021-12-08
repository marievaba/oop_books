const ui = new UI();
const ls = new LS();

const form = document.querySelector('#book-form');
form.addEventListener('submit', addBook);

document.addEventListener('DOMContentLoaded', getBooks);

function getBooks() {
    const books = ls.getData('books');
    books.forEach(function (booksFromLS) {
        ui.addBook(booksFromLS);
    })
}

function addBook(event) {

    const title = ui.title.value;
    const author = ui.author.value;
    const isbn = ui.isbn.value;

    const book = new Book(title, author, isbn);
    console.log(book);

    ui.addBook(book);

    ls.addBook(book);

    ui.title.value = ''
    ui.author.value = ''
    ui.isbn.value = ''
    event.preventDefault();
}