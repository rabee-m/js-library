const bookGrid = document.querySelector('.book-grid')
const addBookBtn = document.querySelector('#add-book-btn')
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

function displayBooks(myLibrary) {

    for (let i = 0; i < myLibrary.length; i++) {
        let newBookDiv = document.createElement('div');
        newBookDiv.classList.add('book-container');

        newBookTitle = document.createElement('span');
        newBookTitle.classList.add('book-title');
        newBookTitle.textContent = myLibrary[i].title;
        newBookDiv.append(newBookTitle);


        newBookAuthor = document.createElement('span');
        newBookAuthor.classList.add('book-author');
        newBookAuthor.textContent = myLibrary[i].author;
        newBookDiv.append(newBookAuthor);

        newBookPageNum = document.createElement('span');
        newBookPageNum.classList.add('book-pageNum');
        newBookPageNum.textContent = myLibrary[i].pageNum;
        newBookDiv.append(newBookPageNum);

        bookGrid.append(newBookDiv)
    }
}
addBookBtn.addEventListener('click', () => {
    addBookToLibrary();
    displayBooks(myLibrary);
})
displayBooks(myLibrary);