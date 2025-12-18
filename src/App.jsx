import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
  // add local storage persistence for the cart
  return (
    <CartProvider>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:bookId" element={<Book />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </main>
    </CartProvider>
  );
};

export default App;
