import React from "react";

function Card({ title, rank, author, book_image, description }) {
  return (
    <div className="card-wrapper flex flex-row p-2 divide-y divide-blue-200 md:h-[180px] md:justify-between">
      <div className="flex md:flex md:justify-between">
        <ol>
          <li className="p-1 flex ">
            <div className="float-left flex justify-center m-2">
              <span className="text-2xl text-gray-400 font-mono">{rank}</span>
            </div>
            <div className="content md:flex md:flex-1 md:flex-col">
              <p className=" text-xs font-bold  mt-2">{title}</p>
              <p className=" font-light text-sm">by {author}</p>
              <p className="hidden md:block font-normal">{description}</p>
            </div>
          </li>
        </ol>
      </div>
      <div className="image hidden md:block md:w-auto md:float-right">
        <img
          src={book_image}
          alt={rank}
          style={{ height: "159px", width: "90px" }}
        />
      </div>
    </div>
  );
}

export default Card;
