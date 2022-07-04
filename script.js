const bookGrid = document.querySelector('.book-grid')
const addBookBtn = document.querySelector('#add-book-btn')
let myLibrary = [];

function Book(title, author, pageNum) {
    //constructor
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = false;
    this.onDisplay = false;
}

function addBookToLibrary() {
    let title = prompt("Enter title of book: ");
    let author = prompt("Enter author of book: ");
    let pageNum = prompt("Enter # of pages in book: ");
    newBook = new Book(title, author, pageNum);
    myLibrary.push(newBook);
}

function removeBook(event, myLibrary) {
    const button = event.target;
    let bookIndex = button.parentNode.dataset.index;
    myLibrary.splice(bookIndex, 1);
    button.parentNode.remove();    
}


function displayBooks(myLibrary) {

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].onDisplay) {continue;}
        myLibrary[i].onDisplay = true;

        let newBookDiv = document.createElement('div');
        newBookDiv.classList.add('book-container');
        newBookDiv.dataset.index = i;

        let newBookTitle = document.createElement('span');
        newBookTitle.classList.add('book-title');
        newBookTitle.textContent = myLibrary[i].title;
        newBookDiv.append(newBookTitle);

        let newBookAuthor = document.createElement('span');
        newBookAuthor.classList.add('book-author');
        newBookAuthor.textContent = myLibrary[i].author;
        newBookDiv.append(newBookAuthor);

        let newBookPageNum = document.createElement('span');
        newBookPageNum.classList.add('book-pageNum');
        newBookPageNum.textContent = myLibrary[i].pageNum;
        newBookDiv.append(newBookPageNum);

        let newBookRemoveBtn = document.createElement('button');
        newBookRemoveBtn.classList.add('book-remove-btn');
        newBookRemoveBtn.textContent = 'Remove Book';
        newBookRemoveBtn.addEventListener('click', (e) => {
            removeBook(e, myLibrary);
        });
        newBookDiv.append(newBookRemoveBtn);
        
        let newBookReadBtn = document.createElement('button');
        newBookReadBtn.classList.add('book-read-btn');
        newBookReadBtn.textContent = 'Read Book';
        newBookReadBtn.addEventListener('click', (e) => {
            updateBookStatus()
        });
        newBookDiv.append(newBookReadBtn);

        bookGrid.append(newBookDiv)
    }
}
addBookBtn.addEventListener('click', () => {
    addBookToLibrary();
    displayBooks(myLibrary);
})
displayBooks(myLibrary);