// import Header from "./components/Header";
import React from "react";
import HardcoverFiction from './components/HardCoverFiction'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hardcover" element={<HardcoverFiction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
