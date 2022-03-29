// check google cloud platform or firebase

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineClockCircle } from "react-icons/ai";
import { VscChecklist } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";
import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/solid";

const BookCard = ({ toggle, settoggle }) => {
  return (
    <div className="md:w-[25rem] md:h-[10.75rem] w-[10.75rem] h-[20rem] p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" h-full w-full mr-2 rounded-2xl "></div>
    </div>
  );
};

export default BookCard;
