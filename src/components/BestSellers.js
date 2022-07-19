import React, { useState, useEffect } from "react";
import HardCoverFiction from "./HardCoverFiction";
import axios from "axios";

function BestSellers() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const searchBestSellers = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NEWYORK_API_KEY}`
      );
      setResults(res.data.results.books);
      console.log(res.data.results.books);
      console.log(res.data);
    };

    searchBestSellers();
  }, []);

  return (
    <div className="best-seller-main">
      <HardCoverFiction results={results} className="p-8" />
    </div>
  );
}

export default BestSellers;
