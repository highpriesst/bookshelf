import React from "react";

function Card({ title, rank, author, book_image, description }) {
  return (
    //TODO: Put 2 equal divs side by side anda arrange the description's weird width.
    //Style the background and the cards background, add a button maybe?
    //Button could be link to amazon?
    //Use material design.
    //Minimalist.

    <div className=" border-black border p-3 bg-red-300 flex">
      <div className=" h-auto">
        <img
          src={book_image}
          alt={author}
          style={{ height: 150, width: 100 }}
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>
          {author} <span>{rank}</span>
        </p>
        <p className="flex-1">{description}</p>
      </div>
    </div>
  );
}

export default Card;
