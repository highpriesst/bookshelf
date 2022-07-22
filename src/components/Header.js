import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/Logo.png";


function Header() {
  return (
    <div className="flex flex-row bg-gray-200 items-center">
      <button className="pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        <Link to="/hardcover">Hardcover</Link>
      </button>
      <nav className="flex flex-grow-1 mx-auto p-2 items-center font-bold bg-gray-200 text-black">
        <Link to="/" className="">
          <img src={Logo} alt="nytimes" className="h-8" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;

