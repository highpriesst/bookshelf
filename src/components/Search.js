import React from "react";

function Search({ results }) {
  return (
    // this works when axios load
    <section className="grid grid-cols-3 p-5 justify-center items-center">
      {results.map((book) => {
        const { author, book_image, description, title, rank } = book;

        return (
          <article key={rank} className="p-4">
            <div className="border border-black max-h-80 max-w-80">
              <p className=" float-left mr-3">{rank}</p>
              <p className="">{author}</p>
              <img
                src={book_image}
                alt={title}
                style={{ height: 200, width: 200 }}
              />
              <p>{description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Search;
