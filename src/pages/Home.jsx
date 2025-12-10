import React from "react";
import { Link } from "react-router-dom";
import { books } from "../assets/books.js";

const Home = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="hero">
      <p className="text-xl lg:text-6xl lg:mb-10 lg:w-[80%]">
        Explore our thoughtfully selected collection of books curated in the
        field of art and design, chosen to empower artists, designers, and
        visionary thinkers.
      </p>

      {/* a few books from the collection */}
      <div className="books-container grid grid-cols-2 xl:grid-cols-4 gap-10 w-full my-10">
        {books.slice(0, 4).map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <div className="overflow-hidden">
              <img src={book.images} alt="book cover" className="w-full" />
            </div>
            <p>{book.title}</p>
            <p>€{book.price}</p>
          </Link>
        ))}
      </div>

      <Link
        to="/books"
        onClick={handleScrollToTop}
        className="bg-black text-white rounded-md px-4 py-3 my-8"
      >
        <p>Go To The Collection</p>
      </Link>
    </section>
  );
};

export default Home;
