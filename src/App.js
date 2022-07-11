import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

//Components
import Book from "./components/Book";

//works
const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NEWYORK_API_KEY}`;

function App() {
  const [apiData, setApiData] = useState({});

  const [author, setAuthor] = useState([]);

  const [coverImage, setCoverImage] = useState([]);

  async function fetchBooks() {
    const res = await fetch(url);
    const data = await res.json();

    setApiData(data.results);

    let autoherName = apiData.books.map((book) => {
      return book.author;
    });

    let booksCover = apiData.books.map((cover) => {
      return cover.book_image;
    });

    //Works but cant print it cause the repeated api calls
    setCoverImage(booksCover);
    setAuthor(autoherName);

    console.log(apiData);
  }

  //TODO: Solve repeated api calls.
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <Book author={author} coverImage={coverImage} />
    </div>
  );
}

export default App;
