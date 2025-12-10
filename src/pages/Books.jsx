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
    <section>
      <div>
        <h2 className="text-xl">Our Books</h2>
      </div>

      {/* search bar */}
      <div className="search-bar mb-10">
        <input
          type="text"
          placeholder="search..."
          onChange={handleChange}
          className="block grow py-1.5 pr-3 pl-1 text-base placeholder:text-gray-500 focus:outline-none border rounded"
        />
      </div>

      {/* matched books */}
      <div className="books-container grid grid-cols-2 md:grid-cols-3 gap-10 w-full lg:w-[60%] mb-10">
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
