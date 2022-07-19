import React from "react";
import Card from "./Card";

function HardCoverFiction({ results }) {
  return (
    // this works when axios load
    <section className=" grid grid-cols-1">
      <h2 className="font-black p-2">Hardfiction Best seller</h2>
      {results.map((book) => {
        const { author, book_image, description, title, rank } = book;

        return (
          <>
            <Card
              author={author}
              book_image={book_image}
              description={description}
              title={title}
              rank={rank}
              key={rank}
            />
          </>
        );
      })}
    </section>
  );
}

export default HardCoverFiction;
