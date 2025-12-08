import React from "react";
import { useState } from "react";
import { books } from "../assets/books.js";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const matchedBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchField.toLowerCase());
  });
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <section id="hero">
      <p className="text-xl">
        Explore our thoughtfully selected collection of books curated in the
        field of art and design, chosen to empower artists, designers, and
        visionary thinkers.
      </p>
      {/* search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="search..."
          onChange={handleChange}
          className="border rounded w-full lg:w-[60%] xl:w-[40%]"
        />
      </div>
      {/* list of books */}
      <div className="books-container grid grid-cols-2 md:grid-cols-3 gap-10 w-full lg:w-[60%]">
        {matchedBooks.map((book) => (
          <div className="w-full">
            <img src={book.images} alt="book cover" className="w-full" />
            <p>{book.title}</p>
            <p>€{book.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
