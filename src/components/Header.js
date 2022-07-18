import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HardCoverFiction from "../components/HardCoverFiction";
import Home from "./routes/Home";
import About from "./routes/About";

function Header() {
  return (
    <div>
      <h1>NYTimes Best Sellers</h1>
      <nav className="border border-black p-3 flex gap-2">
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Fiction">Hardcover Fiction</Link>
      </nav>
    </div>
  );
}

export default Header;
