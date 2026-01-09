import React from "react";
import { books } from "../assets/books.js";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Books = () => {
  return (
    <>
      <Navbar />
      <section id="books">
        {/* books */}
        <div className="books-container">
          {books.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <div className="book-simple-info">
                <div className="book-cover-container">
                  <img src={book.images} alt="book cover" />
                </div>
                <div className="book-info-container">
                  <p>{book.title}</p>
                  <p>€{book.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Books;
