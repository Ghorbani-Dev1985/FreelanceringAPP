import React from "react";
import HorizontalLine from "./HorizontalLine";
import Logo from "./../Assets/Images/Logo/logo2.png";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { BiFolderOpen, BiListUl } from "react-icons/bi";

const menuItems = [
  {
    id: 1,
    to: "/owner/dashboard",
    icon: <HiOutlineHome />,
    text: "نمای کلی",
  },
  {
    id: 2,
    to: "/owner/projects",
    icon: <BiListUl />,
    text: "پروژه ها",
  },
  {
    id: 3,
    to: "/owner/project",
    icon: <BiFolderOpen />,
    text: "پروژه",
  },
];

const AppSidebar = () => {
  const navlinkClasses =
    "flex items-center gap-x-2 h-10 px-3 rounded-lg text-white transition-colors";
  return (
    <aside className="flex flex-col items-center row-start-1 row-span-2 p-4">
      <img src={Logo} alt="ghorbani-dev.ir" />
      <HorizontalLine />
      {/* Navlinks */}
      <div className="w-full space-y-6 text-zinc-700 dark:text-white font-DanaBold">
        {menuItems.map(({ id, to, icon, text }) => {
          return (
            <React.Fragment key={id}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? `bg-primary-900 hover:bg-primary-800 ${navlinkClasses}`
                    : `bg-gray-200/50 hover:bg-gray-200 text-zinc-700 ${navlinkClasses}`
                }
              >
                {icon}
                {text}
              </NavLink>
            </React.Fragment>
          );
        })}
      </div>
    </aside>
  );
};

export default AppSidebar;
