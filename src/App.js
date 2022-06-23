import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NEWYORK_API_KEY}`;

function App() {
  const [data, setData] = useState({});
  const [bestSeller, setBestSeller ] = useState([])
  const [book, setBook] = useState({})

  async function fetchBooks() {
    const res = await fetch(url);
    const data = await res.json();

    setData(data)
    setBestSeller(data.results.books)

  }

  useEffect(() => {
    fetchBooks();
  },[]);

  return(
    <div>
      <p>wdo</p>
    </div>
  );
}

export default App;
