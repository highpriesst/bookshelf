import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

//works
const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NEWYORK_API_KEY}`;

function App() {
  const [data, setData] = useState({});
  const [bestSeller, setBestSeller] = useState([]);

  async function fetchBooks() {
    const res = await fetch(url);
    const data = await res.json();

    setData(data);
    //TODO: bestseller array map
    console.log(data);
    console.log(bestSeller);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <p>dw</p>
    </div>
  );
}

export default App;
