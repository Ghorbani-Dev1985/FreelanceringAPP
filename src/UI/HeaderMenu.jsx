import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../Features/Authentication/Logout";

const HeaderMenu = () => {
  return (
    <ul className="flex-center gap-x-2">
      <li>
        <Link to="dashboard">
          <HiOutlineUser className="size-6 text-primary-900" />
        </Link>
      </li>
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
