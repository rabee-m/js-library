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
