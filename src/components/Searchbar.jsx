import React, { useState } from "react";
import { books } from "../assets/books.js";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [searchField, setSearchField] = useState("");
  const matchedBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchField.toLowerCase());
  });
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  if (matchedBooks.length === books.length) {
    console.log("same");
  }

  return (
    <div className="search-popup">
      {/* search bar */}

      <input
        className="search-bar"
        type="text"
        placeholder="title, author, etc."
        onChange={handleChange}
      />

      {matchedBooks.length === books.length ? (
        <p>no result found</p>
      ) : (
        <div className="searched-books">
          {matchedBooks.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <div className="searched-book">
                <img src={book.images} alt="book cover" />
                <p>{book.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
