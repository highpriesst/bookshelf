// import Header from "./components/Header";
import React from "react";
import HardcoverFiction from "./components/HardcoverFiction";
import { Routes, Route } from "react-router-dom";

//When add /hardcover, workds.

//TODO: Create homepage for this and make sure it works on click!

function App() {
  return (
    <div>
      <Routes>
        <Route path="/hardcover" element={<HardcoverFiction />} />
      </Routes>
    </div>
  );
}

export default App;
