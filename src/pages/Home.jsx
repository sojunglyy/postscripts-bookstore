import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleScrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="hero">
      <div className="title-container">
        <p>Welcome To</p>
        <h1>Postscripts</h1>
      </div>

      <div className="img-container">
        <img src="/images/main-img.jpg" alt="home hero" />
      </div>

      <Link to="/books">
        <p className="open-btn" onClick={handleScrollTo}>
          open
        </p>
      </Link>
    </section>
  );
};

export default Home;
