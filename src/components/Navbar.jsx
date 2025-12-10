import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = "text-blue-500";
  const inactiveLinkStyle = "text-gray-500";

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" onClick={() => handleNavClick("home")}>
        <h1>Postscripts</h1>
      </Link>

      {/* Hamburger button */}
      <button
        className="hamburger-btn"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className={`bar ${isMenuOpen ? "open" : ""}`} />
        <span className={`bar ${isMenuOpen ? "open" : ""}`} />
        <span className={`bar ${isMenuOpen ? "open" : ""}`} />
      </button>

      {/* nav bar links */}

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <NavLink
          to="/books"
          className={`${
            activeLink === "books" ? activeLinkStyle : inactiveLinkStyle
          }`}
          onClick={() => handleNavClick("books")}
        >
          <p>Books</p>
        </NavLink>

        <NavLink
          to="/login"
          className={`${
            activeLink === "login" ? activeLinkStyle : inactiveLinkStyle
          }`}
          onClick={() => handleNavClick("login")}
        >
          <p>Login</p>
        </NavLink>
        <NavLink
          to="/cart"
          className={`${
            activeLink === "cart" ? activeLinkStyle : inactiveLinkStyle
          }`}
          onClick={() => handleNavClick("cart")}
        >
          <p>Cart</p>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
