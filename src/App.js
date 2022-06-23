import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const url = "";

function App() {
  const [data, setData] = useState({});
  const [book, setBook] = useState("");

  async function fetchBooks() {
    const res = await fetch(url);
    const data = await res.json();

    setData(data.docs[0]);
    setBook(data.q);
    console.log(data.docs[0]);
  }

  useEffect(() => {
    fetchBooks();
  });

  return <div className="">{book ? <p>{book}</p> : <p>Loading...</p>}</div>;
}

export default App;
