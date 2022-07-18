import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import About from "./routes/About";
import HardCoverFiction from "./components/HardCoverFiction";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="hcfiction" element={HardCoverFiction} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default Main;
