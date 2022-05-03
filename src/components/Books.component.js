import React from "react";
import BookCard from "./BookCard.component";

const Books = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};

export default Books;
