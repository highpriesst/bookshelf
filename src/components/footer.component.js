//1 footer for every page.
import React from "react";

//TODO: Add links to the footer

const Footer = () => {
  return (
    <footer className="p-4 bg-white fixed bottom-0 w-full px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 dark:bg-gray-800">
          <div className="container flex flex-wrap justify-between items-cente mx-auto">
            <a href="/#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </a>
            {/* Make this page a little blogish page about yourself */}
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href="/#"
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ErtanM"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/highpriesst/"
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
