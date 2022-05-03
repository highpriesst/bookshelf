import "./App.css";
import Navbar from "./components/Nav.component";
import Footer from "./components/Footer.component";
import BookCard from "./components/BookCard.component";

//Make this App hold state for the boooks.
//tailwind quick center -> min-h-screen flex flex-col items-center justify-center

//Store the STATE only in here, turn the app component to class component
// and modify state only in here.

function App() {
  return (
    <div className="App transition-colors duration-300">
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-4" id="card-container">
          <BookCard className="flex  mx-auto" />
          <BookCard className="flex  mx-auto" />
          <BookCard className="flex  mx-auto" />
          <BookCard className="flex  mx-auto" />
        </div>
      </div>
      <Footer className="absolute" />
    </div>
  );
}

export default App;
