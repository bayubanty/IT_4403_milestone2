$(document).ready(function() {
  const params = new URLSearchParams(window.location.search);
  const bookId = params.get('id');
  const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  $.getJSON(url, function(data) {
    const info = data.volumeInfo;
    const img = info.imageLinks?.thumbnail || '';
    $('#bookDetail').html(`
      <h2>${info.title}</h2>
      <p><strong>Author(s):</strong> ${info.authors?.join(', ') || 'N/A'}</p>
      <p><strong>Publisher:</strong> ${info.publisher || 'N/A'}</p>
      <img src="${img}" alt="${info.title}">
      <p>${info.description || 'No description available.'}</p>
    `);
  });
});
