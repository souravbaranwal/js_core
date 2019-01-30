let books = JSON.parse(localStorage.getItem('bookStored'))  ||  ['John Wick','Harry Potter','Hobbit'];
let ulElm = document.querySelector('#bookList');
let hideBooksCheckbox = document.querySelector('#hideBooks');
let bookInput = document.querySelector('#bookInput');
let addBtn = document.querySelector('#addBtn');
let searchInput = document.querySelector('#searchBook');

localStorage.setItem('bookStored', JSON.stringify(books));



displayBooks(books);

function addBook() {
    if (bookInput.value) {
        books.push(bookInput.value); 
        displayBooks(books);
        localStorage.setItem('bookStored', JSON.stringify(books));
    }
    bookInput.value = '';
}

function displayBooks(array = []) {
    document.querySelector('ul').innerHTML = '';
    array.forEach((book,index) => {
        let list =  document.createElement('li');
        let liText = document.createElement('span');
        let liBtn = document.createElement('button');
        liBtn.textContent = 'Delete';
        liBtn.className = 'deleteBtn';
        liBtn.setAttribute('data-index', index);
        list.appendChild(liText);
        list.appendChild(liBtn);
        ulElm.appendChild(list);
        liText.textContent = book;


        liBtn.addEventListener('click', deleteList)
    })
}

function deleteList(e) {
    let id = e.target.dataset.index;
    books.splice(id,1);
    displayBooks(books);
    localStorage.setItem('bookStored', JSON.stringify(books));
}

function hideAllBooks() {
    if (hideBooksCheckbox.checked) {
        displayBooks();
    } else {
        displayBooks(books);
    }
}

function searchBook() {
    let filteredBooks = [];
    let filterName = searchInput.value.toUpperCase();
    books.forEach(book => {
            //let bookName = book.toUpperCase();
            if(book.toUpperCase().includes(filterName)) {
                filteredBooks.push(book);
            } 
    });
    displayBooks(filteredBooks);
}


hideBooksCheckbox.addEventListener('change',hideAllBooks);
addBtn.addEventListener('click',addBook);
searchInput.addEventListener('keyup',searchBook);


