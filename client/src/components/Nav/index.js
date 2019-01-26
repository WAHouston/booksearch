import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navBox">
      <a className="googleBooks" href="/">
        Google Books
      </a>

      <a className="searchLink" href="/">
        Search
      </a>

      <a className="savedLink" href="/Saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
