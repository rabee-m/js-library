const bookGrid = document.querySelector('.book-grid')
let myLibrary = [];

function Book(title, author, pageNum) {
    //constructor
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = false;
}

function addBookToLibrary() {
    let title = prompt("Enter title of book: ");
    let author = prompt("Enter author of book: ");
    let pageNum = prompt("Enter # of pages in book: ");
    newBook = new Book(title, author, pageNum);
    myLibrary.push(newBook);
}

addBookToLibrary();

function displayBooks(myLibrary) {

    for (let i = 0; i < myLibrary.length; i++) {
        let newBookDiv = document.createElement('div');
        newBookDiv.classList.add('book-container')
        newBookDiv.textContent = myLibrary[i].title
        bookGrid.append(newBookDiv)
    }
}

displayBooks(myLibrary);