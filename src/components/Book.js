import React, { useState, useEffect } from "react";
import Search from "./Search";
import axios from "axios";

function Book() {
  const [results, setResults] = useState({});
  useEffect(() => {
    const searchBestSellers = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NEWYORK_API_KEY}`
      );
      setResults(res.data.results.books);
    };
    //https://dmitripavlutin.com/react-useeffect-infinite-loop/
    //read this for the useefffect problem that axios not rendering on refresh.
    searchBestSellers();
  }, []);

  return (
    <div>
      <Search results={results} />
    </div>
  );
}

export default Book;
