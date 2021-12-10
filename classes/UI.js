class UI {
    constructor() {
        this.title = document.querySelector('#title');
        this.author = document.querySelector('#author');
        this.isbn = document.querySelector('#isbn');
        this.bookList = document.querySelector('#book-list');
    }
    addBook(book) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#">X</a></td>`
        this.bookList.appendChild(tr);
    }
    getBook(click) {
        let isbn = click.target.parentElement.previousElementSibling.textContent;
        let author = click.target.parentElement.previousElementSibling.textContent;
        let title = click.target.parentElement.previousElementSibling.textContent;
        const book = new Book(title, author, isbn);
        return book;
    }
    delBook(click) {
        if (confirm('Do you really want to delete this books?')) {
            click.parentElement.parentElement.remove();
            return true
        } else {
            return false
        }
    }
}