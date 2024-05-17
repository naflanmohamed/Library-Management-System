var books = [
    { title: "Book 1", pages: 200, publisher: "Publisher A", author: "Author X", edition: "1st Edition" },
    { title: "Book 2", pages: 150, publisher: "Publisher B", author: "Author Y", edition: "2nd Edition" },
    { title: "Book 3", pages: 300, publisher: "Publisher C", author: "Author Z", edition: "3rd Edition" }
];

function showAddBookForm() {
    document.getElementById("addBookForm").style.display = "block";
    document.getElementById("bookList").style.display = "none";
    document.getElementById("editBookForm").style.display = "none";
}

function showBookList() {
    document.getElementById("addBookForm").style.display = "none";
    document.getElementById("bookList").style.display = "block";
    document.getElementById("editBookForm").style.display = "none";
    displayBookList();
}

function showEditBookForm(index) {
    document.getElementById("addBookForm").style.display = "none";
    document.getElementById("bookList").style.display = "none";
    document.getElementById("editBookForm").style.display = "block";

    document.getElementById("editTitle").value = books[index].title;
    document.getElementById("editPages").value = books[index].pages;
    document.getElementById("editPublisher").value = books[index].publisher;
    document.getElementById("editAuthor").value = books[index].author;
    document.getElementById("editEdition").value = books[index].edition;

    document.getElementById("editBookIndex").value = index;
}

function displayBookList() {
    var bookListItems = "";
    books.forEach(function(book, index) {
        bookListItems += "<li>" + book.title + " - " + book.author + " - " + book.publisher + " - " + book.edition + " <button onclick='showEditBookForm(" + index + ")'>Edit</button></li>";
    });
    document.getElementById("bookListItems").innerHTML = bookListItems;
}

function searchBooks() {
    var searchInput = document.getElementById("searchInput").value;
    var searchResults = books.filter(function(book) {
        return book.title.toLowerCase().includes(searchInput.toLowerCase());
    });
}

function addBook() {
    var title = document.getElementById("title").value;
    var pages = document.getElementById("pages").value;
    var publisher = document.getElementById("publisher").value;
    var author = document.getElementById("author").value;
    var edition = document.getElementById("edition").value;

    books.push({ title: title, pages: pages, publisher: publisher, author: author, edition: edition });

    document.getElementById("title").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("author").value = "";
    document.getElementById("edition").value = "";
    
    displayBookList();
}

function saveChanges() {
    var index = document.getElementById("editBookIndex").value;
    books[index].title = document.getElementById("editTitle").value;
    books[index].pages = document.getElementById("editPages").value;
    books[index].publisher = document.getElementById("editPublisher").value;
    books[index].author = document.getElementById("editAuthor").value;
    books[index].edition = document.getElementById("editEdition").value;
    
    document.getElementById("editTitle").value = "";
    document.getElementById("editPages").value = "";
    document.getElementById("editPublisher").value = "";
    document.getElementById("editAuthor").value = "";
    document.getElementById("editEdition").value = "";

    displayBookList();
}


function showEditBookForm(index) {
    document.getElementById("addBookForm").style.display = "none";
    document.getElementById("bookList").style.display = "none";
    document.getElementById("editBookForm").style.display = "block";
    
  
    document.getElementById("editTitle").value = books[index].title;
    document.getElementById("editPages").value = books[index].pages;
    document.getElementById("editPublisher").value = books[index].publisher;
    document.getElementById("editAuthor").value = books[index].author;
    document.getElementById("editEdition").value = books[index].edition;

    document.getElementById("editBookIndex").value = index;
}

function saveChanges(event) {
    event.preventDefault();
    var index = document.getElementById("editBookIndex").value;
    books[index].title = document.getElementById("editTitle").value;
    books[index].pages = document.getElementById("editPages").value;
    books[index].publisher = document.getElementById("editPublisher").value;
    books[index].author = document.getElementById("editAuthor").value;
    books[index].edition = document.getElementById("editEdition").value;

    document.getElementById("editTitle").value = "";
    document.getElementById("editPages").value = "";
    document.getElementById("editPublisher").value = "";
    document.getElementById("editAuthor").value = "";
    document.getElementById("editEdition").value = "";
    
    displayBookList();
}
