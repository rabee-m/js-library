const bookGrid = document.querySelector('.book-grid')
const addBookBtn = document.querySelector('#add-book-btn')
let myLibrary = [];
let placeholder = new Book('The Hobbit', 'J.RR Tolken', 200);
myLibrary.push  (placeholder);

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

function updateBookStatus(e, myLibrary) {
    const button = event.target
    let bookIdx = button.parentNode.dataset.index;
    //change isread status
    myLibrary[bookIdx].isRead ? myLibrary[bookIdx].isRead = false : myLibrary[bookIdx].isRead = true;
   
    //change colour based on read status
    if (myLibrary[bookIdx].isRead) {
        button.parentNode.classList.remove('unread-book');
        button.parentNode.classList.add('read-book');
    } else {
        button.parentNode.classList.remove('read-book');
        button.parentNode.classList.add('unread-book');
    }
}

function displayBooks(myLibrary) {

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].onDisplay) {continue;}
        myLibrary[i].onDisplay = true;

        let newBookDiv = document.createElement('div');
        newBookDiv.classList.add('book-container');
        newBookDiv.classList.add('unread-book');
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
        
        let newBookReadBtn = document.createElement('input');
        newBookReadBtn.type = 'checkbox';
        

        newBookReadBtn.classList.add('switch');
        newBookReadBtn.addEventListener('change', (e) => {
            updateBookStatus(e, myLibrary);
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