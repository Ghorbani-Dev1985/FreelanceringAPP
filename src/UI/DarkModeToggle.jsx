import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../Context/DarkModeContext.jsx";

const DarkModeToggle = () => {
  const { isDarkMode, ToggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={ToggleDarkMode}
      className="flex-center size-10 bg-secondary-50 border border-secondary-200 rounded-full child:size-7 child:text-secondary-400"
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
};

export default DarkModeToggle;
