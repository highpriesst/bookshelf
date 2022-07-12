import React from "react";

function Search({ results }) {
  return (
    // this works when axios load
    <section>
      {results?.map((book, i) => {
        const { author, book_image, contributor, description, title, rank } =
          book;

        return (
          <article
            key={rank}
            className="flex justify-center items-center h-screen flex-row">
            <div>
              <h2>{title}</h2>
              <span>{rank}</span>
              <h3>{author}</h3>
              <img src={book_image} alt="cover" style={{ height: 200 }} />
              <p>{description}</p>
              <span>{contributor}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Search;
