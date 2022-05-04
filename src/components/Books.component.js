import React from "react";
import BookCard from "./BookCard.component";
import AddNewBook from "./AddNewBook.component";

const Books = () => {
  return (
    <div className="flex">
      {/* Make it map the vault and render according */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        <BookCard />
        <BookCard />
        <AddNewBook />
      </div>
    </div>
  );
};

export default Books;
