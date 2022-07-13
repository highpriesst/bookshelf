import React from "react";

function Card({ title, rank, author, book_image, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {author} <span>{rank}</span>
      </p>
      <img src={book_image} alt={author} />
      <p>{description}</p>
    </div>
  );
}

export default Card;
