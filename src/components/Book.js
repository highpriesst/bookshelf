import React from "react";

function Book({ author, coverImage }) {
  return (
    //TODO: Check usecontext for this cus prop drilling.
    <div>
      <div>
        {coverImage.map((img) => {
          <p>{img}</p>;
        })}
      </div>
    </div>
  );
}

export default Book;
