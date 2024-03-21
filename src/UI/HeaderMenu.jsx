import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../Features/Authentication/Logout";

const HeaderMenu = () => {
  return (
    <ul className="flex-center gap-x-2">
      <li>
       <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
};

export default HeaderMenu;
