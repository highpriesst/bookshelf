import React from "react";
import Card from "./Card";

function Search({ results }) {
  return (
    // this works when axios load
    <section className=" p-6 bg-gray-100 grid gap-x-8 gap-y-4 grid-cols-2">
      {results.map((book) => {
        const { author, book_image, description, title, rank } = book;

        return (
          <article key={rank} className="max-h-[31.25rem]">
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
