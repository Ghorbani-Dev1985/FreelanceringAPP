import React, { useState } from 'react'
import { useDarkMode } from '../../Context/DarkModeContext'
import DarkModeLogo from "../../Assets/Images/Logo/DarkModeLogo.png";
import LightModeLogo from "../../Assets/Images/Logo/LightModeLogo.png";
import { Link } from 'react-router-dom';
import DarkModeToggle from '../../UI/DarkModeToggle';
import MobileNavLink from '../../UI/MobileNavLink';

const MenuItems = [
    {
        id: 1 ,
        title: "پنل ادمین",
        link: "/admin/dashboard"
    },
    {
        id: 2 ,
        title: "پنل کارفرما",
        link: "/owner/dashboard"
    },
    {
        id: 3 ,
        title: "پنل فریلنسر",
        link: "/freelancer/dashboard"
    },
]

const HomeHeader = () => {
    const {isDarkMode} = useDarkMode()
    
  return (
    <>
    <header className='w-full flex-between bg-secondary-0 h-28 border border-secondary-200 rounded-xl my-8 px-3 py-2'>
      {/* Logo */}
        <MobileNavLink MenuItems={MenuItems}/> 
      <div>
      {
        isDarkMode ? 
        <img 
        src={DarkModeLogo}
        alt="ghorbani-dev.ir" /> :
        <img 
        src={LightModeLogo}
        alt="ghorbani-dev.ir" />
      }
      </div>
      <div className='hidden md:flex-center gap-x-4'>
         {
           MenuItems.map(({id , title , link}) => {
             return (
               <React.Fragment key={id}>
                    <Link className='text-primary-900 font-DanaBold hover:text-primary-700 transition-colors' to={link}>{title}</Link>
                    </React.Fragment>
                )
            })
         }
      </div>
      <div>
         <DarkModeToggle />
      </div>
    </header>
                      </>
  )
}

export default HomeHeader

