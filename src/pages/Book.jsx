import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../assets/books";
import { useCart } from "../context/useCart";

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
    <section id="book">
      <div className="flex flex-col md:flex-row gap-10 my-10 xl:mb-20">
        <div className="book-img w-full flex justify-center md:max-w-[50%]">
          <img
            src={currentBook.images}
            alt="book cover image"
            className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2"
          />
        </div>
        <div className="book-info">
          <p className="text-xl">{currentBook.title}</p>
          <p>by {currentBook.author}</p>
          <hr className="my-10 text-gray-500" />
          <p>{currentBook.description}</p>
          <p className="my-5">category: {currentBook.category}</p>
          <p>€{currentBook.price}</p>
          <button
            type="button"
            className="my-10 border rounded-md p-2 cursor-pointer hover:bg-black hover:text-white"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Book;
