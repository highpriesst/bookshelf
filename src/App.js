import "./App.css";
import Navbar from "./components/Nav.component";
import Footer from "./components/Footer.component";
import BookCard from "./components/BookCard.component";

//Make this App hold state for the boooks.
//tailwind quick center -> min-h-screen flex flex-col items-center justify-center

function App() {
  return (
    <div className="App transition-colors duration-300">
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <BookCard className="flex  mx-auto" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
