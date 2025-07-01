$(document).ready(function() {
  const maxResults = 20;
  let searchTerm = '';
  let currentPage = 0;

  $('#searchBtn').click(function() {
    searchTerm = $('#searchTerm').val().trim();
    if (searchTerm !== '') {
      fetchBooks(0);
    }
  });

  function fetchBooks(startIndex) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&startIndex=${startIndex}&maxResults=${maxResults}`;
    $.getJSON(url, function(data) {
      const items = data.items || [];
      $('#results').empty();
      if (items.length === 0) {
        $('#results').html('<p>No results found.</p>');
        $('#pagination').empty();
        return;
      }
      items.forEach(book => {
        const info = book.volumeInfo;
        const img = info.imageLinks?.thumbnail || '';
        const title = info.title || 'No title';
        const id = book.id;
        $('#results').append(`
          <div class="book-card">
            <a href="book-details.html?id=${id}">${title}</a><br>
            <img src="${img}" alt="${title}">
          </div>
        `);
      });
      renderPagination(data.totalItems);
    }).fail(function() {
      $('#results').html('<p>Error retrieving data. Please try again later.</p>');
    });
  }

  function renderPagination(total) {
    $('#pagination').empty();
    const pageCount = Math.min(3, Math.ceil(Math.min(total, 60) / maxResults));
    if (pageCount > 1) {
      $('#pagination').append('<label for="pageSelect">Select Page: </label>');
      const select = $('<select id="pageSelect"></select>');
      for (let i = 0; i < pageCount; i++) {
        select.append(`<option value="${i}">Page ${i + 1}</option>`);
      }
      select.on('change', function() {
        const pageIndex = parseInt($(this).val());
        fetchBooks(pageIndex * maxResults);
      });
      $('#pagination').append(select);
    }
  }
});

