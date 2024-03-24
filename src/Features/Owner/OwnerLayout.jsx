import React from 'react'
import AppLayout from '../../UI/AppLayout'
import AppSidebar from '../../UI/AppSidebar'
import { NavLink } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { BiFolderOpen, BiListUl } from 'react-icons/bi';


export const ownerMenuItems = [
  {
    id: 1,
    link: "dashboard",
    icon: <HiOutlineHome />,
    title: "نمای کلی",
  },
  {
    id: 2,
    link: "projects",
    icon: <BiListUl />,
    title: "پروژه ها",
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
        {ownerMenuItems.map(({ id, link, icon, title }) => {
          return (
            <React.Fragment key={id}>
              <NavLink 
                to={link}
                className={({ isActive }) =>
                  isActive
                    ? `bg-primary-900 text-white hover:bg-primary-800 ${navlinkClasses}`
                    : `bg-gray-200/50 hover:bg-gray-200 ${navlinkClasses}`
                }
              >
                {icon}
                {title}
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
