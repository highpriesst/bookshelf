// import Header from "./components/Header";
import React from "react";
import HardcoverFiction from "./components/HardcoverFiction";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/hardcover">Hardcover Fiction</Link>
      </nav>
      <Routes>
        <Route path="/hardcover" element={<HardcoverFiction />} />
      </Routes>
    </div>
  );
}

export default App;
