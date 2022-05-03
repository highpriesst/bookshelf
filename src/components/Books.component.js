import React from "react";
import BookCard from "./BookCard.component";

const Books = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {/* Make it map the vault and render according */}
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
