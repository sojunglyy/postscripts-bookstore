import React from "react";
import { books } from "../assets/books.js";

const NewBooks = () => {
  return (
    <div id="newBooks">
      <div>
        <h2>New Books</h2>
      </div>

      <div>
        {/* list of new books */}
        {books.map((book) => (
          <div>
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
