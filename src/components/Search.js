import React from "react";

function Search({ authors, cover }) {
  return (
    <div>
      <h1>Best Sellers</h1>
      {authors?.map((a, i) => (
        <div>
          <li key={i}>{a}</li>
        </div>
      ))}
      {cover?.map((img) => (
        <img src={img.book_image} alt="cover" />
      ))}
    </div>
  );
}

export default Search;
