import React from 'react'
import AppLayout from '../../UI/AppLayout'
import AppSidebar from '../../UI/AppSidebar'
import { NavLink } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { BiFolderOpen, BiListUl } from 'react-icons/bi';


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


const OwnerLayout = () => {
    const navlinkClasses =
    "flex items-center gap-x-2 h-10 px-3 rounded-lg dark:text-white transition-colors";
  return (
    <AppLayout>
        <AppSidebar>
       {/* Navlinks */}
      <div className="w-full space-y-6 font-DanaBold">
        {menuItems.map(({ id, to, icon, text }) => {
          return (
            <React.Fragment key={id}>
              <NavLink 
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? `bg-primary-900 text-white hover:bg-primary-800 ${navlinkClasses}`
                    : `bg-gray-200/50 hover:bg-gray-200 ${navlinkClasses}`
                }
              >
                {icon}
                {text}
              </NavLink>
            </React.Fragment>
          );
        })}
      </div>
        </AppSidebar>
     </AppLayout>
      
  )
}

export default OwnerLayout
