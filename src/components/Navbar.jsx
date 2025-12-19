import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div>
        <Link to="/" onClick={() => handleNavClick("home")}>
          <h1>Postscripts</h1>
        </Link>
      </div>

      {/* menu button */}
      <div>
        <button
          className="menu-btn"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={`bar ${isMenuOpen ? "open" : ""}`} />
          <span className={`bar ${isMenuOpen ? "open" : ""}`} />
          <span className={`bar ${isMenuOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* nav bar links */}

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <NavLink
          to="/books"
          className={`nav-link ${activeLink === "books" ? "active" : ""}`}
          onClick={() => handleNavClick("books")}
        >
          <p>Books</p>
        </NavLink>

        <NavLink
          to="/login"
          className={`nav-link ${activeLink === "login" ? "active" : ""}`}
          onClick={() => handleNavClick("login")}
        >
          <p>Login</p>
        </NavLink>
        <NavLink
          to="/cart"
          className={`nav-link ${activeLink === "cart" ? "active" : ""}`}
          onClick={() => handleNavClick("cart")}
        >
          <p>Cart</p>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
