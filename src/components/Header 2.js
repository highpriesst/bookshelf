import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="flex flex-grow-1 mb-3 justify-center items-center gap-4 font-bold">
        <Link to="/">Home</Link>
        <Link to="/hardcover">Hardcover Fiction</Link>
      </nav>
    </div>
  );
}

export default Header;
