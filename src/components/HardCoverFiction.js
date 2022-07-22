import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.component";
import axios from "axios";

//HEROICON used here for the button

function HardcoverFiction() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const searchBestSellers = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NEWYORK_API_KEY}`
      );
      setResults(res.data.results.books);
      setLoading(true);
      console.log(res.data.results.books);
      console.log(res.data);
    };

    searchBestSellers();
    setLoading(false);
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <button
          className="flex ml-auto mr-2 gap-1 bg-gray-200 p-1 rounded-xl text-black"
          type="button">
          Home{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </span>
        </button>
      ) : null}
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
    </div>
  );
}

export default HardcoverFiction;
