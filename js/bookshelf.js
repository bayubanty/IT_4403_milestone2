$(document).ready(function() {
  const userId = 'INSERT_USER_ID';
  const shelfId = 'INSERT_SHELF_ID';
  const url = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${shelfId}/volumes`;

  $.getJSON(url, function(data) {
    const items = data.items || [];
    items.forEach(book => {
      const info = book.volumeInfo;
      const img = info.imageLinks?.thumbnail || '';
      $('#bookshelf').append(`
        <div class="book-card">
          <a href="book-details.html?id=${book.id}">${info.title}</a><br>
          <img src="${img}" alt="${info.title}">
        </div>
      `);
    });
  });
});
