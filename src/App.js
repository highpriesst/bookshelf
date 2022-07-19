// import Header from "./components/Header";
import React from "react";
import HardcoverFiction from "./components/HardcoverFiction";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/hardcover" element={<HardcoverFiction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
