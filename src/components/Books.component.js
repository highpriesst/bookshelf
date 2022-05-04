import React from "react";
import BookCard from "./BookCard.component";
import AddNewBook from "./AddNewBook.component";
import Footer from "./Footer.component";

const Books = () => {
  return (
    <div className="flex">
      {/* Make it map the vault and render according */}
      <div className="flex flex-wrap justify-center items-center gap-4 min-h-screen">
        <BookCard />
        <BookCard />
        <AddNewBook />
      </div>
      <Footer />
    </div>
  );
};

export default Books;
