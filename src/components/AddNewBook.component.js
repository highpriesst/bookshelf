import React from "react";
import "animate.css";

const AddNewBook = () => {
  return (
    <div className="h-52 w-48 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mr-5 ml-5 dark:text-white flex justify-center items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24  animate__animated animate__pulse animate__repeat-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default AddNewBook;
