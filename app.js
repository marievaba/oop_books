const ui = new UI();

const form = document.querySelector('#book-form');
form.addEventListener('submit', addBook);


function addBook(event){

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);
    console.log(book);

    ui.addBook(book);

    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
    event.preventDefault();
}