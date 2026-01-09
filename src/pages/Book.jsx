import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../assets/books";
import { useCart } from "../context/useCart";
import Navbar from "../components/Navbar";

const Book = () => {
  const { bookId } = useParams();
  const [currentBook, setCurrentBook] = useState(null);
  const { cartItems, addToCart } = useCart();

  const handleAddToCart = () => {
    if (currentBook) {
      addToCart(currentBook);
    }
  };

  console.log("cart items: ", cartItems);

  const fetchBookData = useCallback(() => {
    books.find((book) => {
      if (book.id === bookId) {
        setCurrentBook(book);
      }
    });
  }, [bookId]);

  useEffect(() => {
    fetchBookData();
  }, [fetchBookData]);

  // checks if the book data exists before rendering
  if (!currentBook) {
    return (
      <section>
        <p>Book not found</p>
      </section>
    );
  }

  return (
    <>
      <Navbar />
      <section id="book">
        <div className="book-info-container">
          <div className="book-image-container">
            <img src={currentBook.images} alt="book cover image" />
          </div>
          <div className="book-info">
            <h2>{currentBook.title}</h2>
            <p>by {currentBook.author}</p>
            <hr />
            <p>{currentBook.description}</p>
            <p>category: {currentBook.category}</p>
            <p>€{currentBook.price}</p>
          </div>
        </div>
        <button
          id="add-to-cart-btn"
          className="custom-btn"
          type="button"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </section>
    </>
  );
};

export default Book;
