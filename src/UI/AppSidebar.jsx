import React from "react";
import HorizontalLine from "./HorizontalLine";
import DarkModeLogo from "./../Assets/Images/Logo/DarkModeLogo.png";
import LightModeLogo from "./../Assets/Images/Logo/LightModeLogo.png";
import { useDarkMode } from "../Context/DarkModeContext";


const AppSidebar = ({children}) => {
  const {isDarkMode} = useDarkMode()
  return (
    <aside className="hidden md:flex flex-col items-center row-start-1 row-span-2 p-4">
      {
        isDarkMode ? 
        <img 
        src={DarkModeLogo}
        alt="ghorbani-dev.ir" /> :
        <img 
        src={LightModeLogo}
        alt="ghorbani-dev.ir" />
      }
      <HorizontalLine />
      {children}
    </aside>
  );
};

export default AppSidebar;
