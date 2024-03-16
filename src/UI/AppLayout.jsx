import React from 'react'
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]'>
    <div className='flex flex-col items-center row-start-1 row-span-2 p-4'>
        App Sidebar
    </div>
    <div className='p-4 overflow-y-auto'>
        <div className='w-full mx-auto xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-secondary-0 rounded-4xl px-8 py-4'>
        <div className='mb-8'>App Header</div>
        <div className='flex flex-col gap-y-12'>
        <Outlet />
        </div>
        </div>
    </div>
    </div>
  )
}

export default AppLayout