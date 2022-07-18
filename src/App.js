import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import HardCoverFiction from "./components/HardCoverFiction";

//BROKEN BROWSER ROUTER TODO:FIX

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="hcfiction" element={HardCoverFiction} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
