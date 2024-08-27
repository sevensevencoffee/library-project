class Book {
    constructor(title, author, pages, readornot){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readornot = readornot;
    }
}

class BookUI {

    constructor() {
        this.showButton = document.querySelector("#askForInput");
        this.dialog = document.querySelector("#bookInput");
        this.form = this.dialog.querySelector('form');
        this.titleInput = document.querySelector('#title');
        this.authorInput = document.querySelector("#author");
        this.pagesInput = document.querySelector("#pages");
        this.readornotInput = document.querySelector("#readornot");
        this.cancelBtn = document.querySelector("#cancelBtn");
    

        this.cancelBtn.addEventListener("click", () => {
            this.dialog.close();}
        )

        this.showButton.addEventListener("click", () => {
            this.titleInput.value = '';
            this.authorInput.value = '';
            this.pagesInput.value = '';
            this.readornotInput.checked = false;
            this.dialog.showModal();
        });

        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const newBook = new Book(
                this.titleInput.value,
                this.authorInput.value,
                this.pagesInput.value,
                this.readornotInput.checked ? 'Yes' : 'No'
        );
            addBookToLibrary(newBook);
            this.dialog.close(); 
            this.displayLibrary(); 
        });
    }

    displayLibrary() {
        const container = document.querySelector(".container");
        container.innerHTML = '';
        myLibrary.forEach((testBook1, index) => {
            const card = document.createElement("div");
            card.className = "card";
        
            container.appendChild(card);
        
            const title = document.createElement("div");
            title.className = "card-info";
            title.textContent = `Title: ${testBook1.title}`;
            card.appendChild(title);
        
            const author = document.createElement("div");
            author.className = "card-info";
            author.textContent = `Author: ${testBook1.author}`;
            card.appendChild(author);
        
            const pages = document.createElement("div");
            pages.className = "card-info";
            pages.textContent = `Pages: ${testBook1.pages}`;
            card.appendChild(pages);
        
            const readYN = document.createElement("div");
            readYN.className = "card-info";
            readYN.textContent = `Read: ${testBook1.readornot}`;
            card.appendChild(readYN);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-button";
            deleteButton.addEventListener("click", () => this.deleteBook(index));
            card.appendChild(deleteButton);
     });
    }

    deleteBook(index) {
        myLibrary.splice(index, 1);
        this.displayLibrary();
    }
    


}

const myLibrary = [];

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

const bookUI = new BookUI();


