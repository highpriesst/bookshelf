import React from "react";

function Card({ title, rank, author, book_image, description }) {
  return (
    //Style the background and the cards background, add a button maybe?
    //Button could be link to amazon?
    //Use material design.
    //Minimalist.
    <div className="most-outher flex flex-row w-screen">
      <ol className="flex">
        <li className=" bg-gray-200 p-1 flex ">
          <div className="float-left flex justify-center mr-2 mt-1">
            <span className="text-2xl">{rank}</span>
          </div>
          <div>
            <p className=" text-xs font-bold mt-2">{title}</p>
            <p className=" font-light text-sm">by {author}</p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Card;
