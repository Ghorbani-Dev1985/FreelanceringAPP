import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'
const AppLayout = ({children}) => {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]'>
      {children}
    <div className='p-4 overflow-y-auto'>
        <div className='w-full mx-auto xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-secondary-50 rounded-4xl px-8 py-4'>
        <AppHeader />
        <div className='flex flex-col gap-y-12'>
        <Outlet />
        </div>
        </div>
    </div>
    </div>
  )
}

export default AppLayout