import React, { useState, useEffect } from "react";
import Search from "./Search";
import axios from "axios";

function Book() {
  const [results, setResults] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [authors, setAuthors] = useState([]);
  const [cover, setCover] = useState([]);

  useEffect(() => {
    searchBestSellers();
  }, []);

  const searchBestSellers = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NEWYORK_API_KEY}`
      );
      setResults(res.data.results);
      const author = results.books.map((a) => a.author);
      const covers = results.books.map((a) => a.book_image);
      //TODO: Api doesn't load, fix that
      //TODO: Figure out usecontex hook
      //TODO: modify page via error and loading interactivly
      setAuthors(author);
      setCover(cover);
    } catch (error) {
      setError(error || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Search author={authors} cover={cover} />
    </div>
  );
}

export default Book;
