import React, { useState } from "react";
import { books } from "../assets/books.js";
import { Link } from "react-router-dom";

const Books = () => {
  const [searchField, setSearchField] = useState("");
  const matchedBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchField.toLowerCase());
  });
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <section id="books">
      {/* search bar */}
      <div className="search-bar">
        <input type="text" placeholder="search..." onChange={handleChange} />
      </div>

      {/* matched books */}
      <div className="books-container">
        {matchedBooks.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <div className="overflow-hidden">
              <img src={book.images} alt="book cover" className="w-full" />
            </div>
            <p>{book.title}</p>
            <p>€{book.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Books;
