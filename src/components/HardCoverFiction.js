import React, { useState, useEffect } from "react";
import Card from "./Card.component";
import axios from "axios";

function HardcoverFiction() {
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
    <React.Fragment>
      {results.map((book) => {
        const { author, book_image, description, title, rank } = book;

        return (
          <section className=" grid grid-cols-1" key={rank}>
            <Card
              author={author}
              book_image={book_image}
              description={description}
              title={title}
              rank={rank}
            />
          </section>
        );
      })}
    </React.Fragment>
  );
}

export default HardcoverFiction;
