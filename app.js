//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

Book.prototype.print = function() {
  console.log(book1);
}


// UI Constructor

function UI() {};

// add prototype method to UI class
UI.prototype.addBookToList = function(book) {
  const tbody = document.getElementById('book-list');

  // Create Tr Element
  const row = document.createElement('tr');

  // Set inner HTML, which is tds;
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  tbody.appendChild(row);
}

UI.prototype.clearInput = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


//Event Listener

document.querySelector('#book-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Validate the input
  if(!title || !author || !isbn) {
    const warning = document.createElement('p');
    warning.className = 'error';
    warning.textContent = 'please fill all blanks';
    document.querySelector('.msg').appendChild(warning);
    setTimeout(function() {warning.remove()}, 3000);
  } else {
    // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  // Clear the input field
  ui.clearInput();

  // get success msg
    const success = document.createElement('p');
    success.className = 'success';
    success.textContent = 'Book added!';
    document.querySelector('.msg').appendChild(success);
  // Success msg dispear after 3 seconds
    setTimeout(function() {success.remove()}, 3000);
  }

  
})

// Remove books

document.querySelector('#book-list').addEventListener('click', function(e) {
  if(e.target.className === 'delete') {
    e.target.parentElement.parentElement.remove();
  } else {
    console.log('doesnot work');
  }
  
});