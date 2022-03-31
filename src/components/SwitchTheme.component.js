import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

const SwitchTheme = () => {
  const [isOn, setIsOn] = useState(() => {
    if (localStorage.getItem("theme") === "light") {
      return true;
    } else {
      return false;
    }
  });

  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 30,
  };

  if (isOn) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  if (
    localStorage.theme === "light" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start flex h-[40px] w-[70px] rounded-[50px] bg-zinc-100 p-[2px] shadow-inner hover:cursor-pointer dark:bg-gray-700 ${
        isOn && "place-content-end"
      }`}
    >
      <motion.div
        className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-black dark:bg-gray-900"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isOn ? (
            <RiSunFill className="h-5 w-5 text-yellow-300" />
          ) : (
            <RiMoonClearFill className="h-4 w-4 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SwitchTheme;
