const myLibrary = [];

function Book(title, author, pages, readornot) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readornot = readornot;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

const showButton = document.querySelector("#askForInput");
const dialog = document.querySelector("#bookInput");
const form = dialog.querySelector('form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readornotInput = document.querySelector("#readornot");

showButton.addEventListener("click", () => {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readornotInput.checked = false;
    dialog.showModal();
  });

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const newBook = new Book(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readornotInput.checked ? 'Yes' : 'No'
    );
    addBookToLibrary(newBook);
    dialog.close(); 
    displayLibrary(); 
});

function displayLibrary() {
    const container = document.querySelector(".container");
    container.innerHTML = '';
    myLibrary.forEach(function(testBook1) {
        const card = document.createElement("div");
        card.className = "card";
    
        container.appendChild(card);
    
        const title = document.createElement("div");
        title.className = "card-info";
        title.textContent = `Title: ${testBook1.title}`;
        card.appendChild(title);
    
        const author = document.createElement("div");
        author.className = "card-info";
        author.textContent = testBook1.author;
        card.appendChild(author);
    
        const pages = document.createElement("div");
        pages.className = "card-info";
        pages.textContent = testBook1.pages;
        card.appendChild(pages);
    
        const readYN = document.createElement("div");
        readYN.className = "card-info";
        readYN.textContent = testBook1.readornot;
        card.appendChild(readYN);
    });
}



  




