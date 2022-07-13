import React from "react";
import Card from "./Card";

function Search({ results }) {
  return (
    // this works when axios load
    <section className="grid grid-cols-3 p-5 justify-center items-center">
      {results.map((book) => {
        const { author, book_image, description, title, rank } = book;

        return (
          <article key={rank} className="p-4">
            <Card
              author={author}
              book_image={book_image}
              description={description}
              title={title}
              rank={rank}
            />
          </article>
        );
      })}
    </section>
  );
}

export default Search;
