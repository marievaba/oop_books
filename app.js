const ui = new UI();
const ls = new LS();

const form = document.querySelector('#book-form');
form.addEventListener('submit', addBook);

document.addEventListener('DOMContentLoaded', getBooks);

const bookList = document.querySelector('#book-list');
bookList.addEventListener('click', delBook);

const filter = document.querySelector("#filter");
filter.addEventListener('keyup', filterBook);

function filterBook(event) {
    let filter = event.target.value.toLowerCase();
    ui.filterData(filter);
}

function delBook(event) {
    if (event.target.textContent === 'X') {
        const book = ui.getBook(event.target);
        if(ui.delBook(event.target) === true) {
            ls.delBook(book);
        }
    }
}



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