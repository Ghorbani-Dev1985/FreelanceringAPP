import React from 'react'
import HorizontalLine from './HorizontalLine'
import Logo from './../Assets/Images/Logo/logo2.png'
const AppSidebar = () => {
  return (
    <div className='flex flex-col items-center row-start-1 row-span-2 p-4'>
        <img src={Logo} alt='ghorbani-dev.ir' />
            <HorizontalLine />
    </div>
  )
}

export default AppSidebar