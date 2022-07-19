import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <Link to="/hardcover">Hardcover Fiction</Link>
      </nav>
    </div>
  );
}

export default Header;
