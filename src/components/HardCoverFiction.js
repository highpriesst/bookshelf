import React from "react";
import Card from "./Card";

function HardCoverFiction({ results }) {
  return (
    // this works when axios load
    <section className="p-3 bg-gray-100 grid gap-x-8 gap-y-4 grid-cols-1">
      {results.map((book) => {
        const { author, book_image, description, title, rank } = book;

        return (
          <Card
            author={author}
            book_image={book_image}
            description={description}
            title={title}
            rank={rank}
            key={rank}
          />
        );
      })}
    </section>
  );
}

export default HardCoverFiction;
