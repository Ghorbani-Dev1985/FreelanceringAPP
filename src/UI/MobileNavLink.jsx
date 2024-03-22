import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const MobileNavLink = ({MenuItems}) => {
    const [isMobileNavOpen , setIsMobileNavOpen] = useState(false)
  return (
    <>
<nav className="flex md:hidden">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p onClick={() => setIsMobileNavOpen((prev) => !prev)} className='block md:hidden'><HiMenuAlt3 className='size-7' /></p>

      <section onClick={() => setIsMobileNavOpen((prev) => !prev)} className={`${isMobileNavOpen ? "block" : "hidden"} w-full h-screen bg-primary-300 bg-opacity-30 z-40 backdrop-blur-sm fixed top-0 left-0`}>
   {
       isMobileNavOpen && 
       <div className="w-96 max-w-sm absolute top-32 right-0 left-0 mx-auto">
    <ul className="flex flex-col font-medium mt-4 rounded-lg space-y-6 p-4 bg-primary-100 dark:bg-gray-800 dark:border-gray-700">
    {
          MenuItems.map(({id , title , link}) => {
              return (
                  <React.Fragment key={id}>
                 <li onClick={() => setIsMobileNavOpen((prev) => !prev)}> <Link className='text-primary-900 font-DanaBold hover:text-primary-700 transition-colors' to={link}>{title}</Link></li>
                  </React.Fragment>
              )
            })
        }
    </ul>
  </div>
   }
   </section>
  </div>
</nav>
     </>
  )
}

export default MobileNavLink