const books = [
  {
    title: "HTML and CSS: Design and Build Websites",
    authors: ["Jon Duckett"],
    publisher: "Wiley",
    publishedDate: "2011",
    thumbnail: "https://books.google.com/books/content?id=aGjaBTbT0o0C&printsec=frontcover&img=1&zoom=1",
    link: "https://books.google.com/books/about/HTML_and_CSS.html?id=aGjaBTbT0o0C"
  },
  {
    title: "Eloquent JavaScript",
    authors: ["Marijn Haverbeke"],
    publisher: "No Starch Press",
    publishedDate: "2024",
    thumbnail: "https://eloquentjavascript.net/img/cover.jpg",
    link: "https://eloquentjavascript.net/"
  },
  {
    title: "You Don’t Know JS",
    authors: ["Kyle Simpson"],
    publisher: "O'Reilly Media",
    publishedDate: "2015",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
    link: "https://github.com/getify/You-Dont-Know-JS"
  },
  {
    title: "The HTML and CSS Workshop",
    authors: ["Lewis Coulson", "Brett Jephson", "Rob Larsen", "Matt Park", "Marian Zburlea"],
    publisher: "Packt Publishing Ltd",
    publishedDate: "2019",
    thumbnail: "https://books.google.com/books/content?id=gVjBDwAAQBAJ&printsec=frontcover&img=1&zoom=1",
    link: "https://play.google.com/store/books/details/The_HTML_and_CSS_Workshop?id=gVjBDwAAQBAJ"
  }
];

const container = document.getElementById("book-list");

if (container) {
  books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book-card";
    div.innerHTML = `
      <img src="${book.thumbnail}" alt="Cover of ${book.title}">
      <div class="book-info">
        <h3>${book.title}</h3>
        <p><strong>Author(s):</strong> ${book.authors.join(", ")}</p>
        <p><strong>Publisher:</strong> ${book.publisher}</p>
        <p><strong>Published:</strong> ${book.publishedDate}</p>
        <p><a href="${book.link}" target="_blank">More Info</a></p>
      </div>
    `;
    container.appendChild(div); // Append each book's card
  });
}
