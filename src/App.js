import "./App.css";
import Navbar from "./components/Nav.component";
import Footer from "./components/Footer.component";
import BookCard from "./components/BookCard.component";

//Make this App hold state for the boooks.

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookCard className="flex justify-center items-center mx-auto" />
      <Footer />
    </div>
  );
}

export default App;
