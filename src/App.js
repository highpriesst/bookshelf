import "./App.css";
import Navbar from "./components/Nav.component";
import Footer from "./components/Footer.component";
import Books from "./components/Books.component";

//Make this App hold state for the boooks.
//tailwind quick center -> min-h-screen flex flex-col items-center justify-center

//Store the STATE only in here, turn the app component to class component
// and modify state only in here.

function App() {
  return (
    <div className="App transition-colors duration-300 overflow-auto bg-repeat-y">
      <Navbar />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
