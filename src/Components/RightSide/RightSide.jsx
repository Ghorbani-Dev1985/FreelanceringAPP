import React from 'react'
import Logo from '../../assets/Images/Logo/logo.svg'
import { Button, Divider } from '@mui/material'
import { Search } from '@mui/icons-material'
import Menu from './Menu'


function RightSide() {
  return (
    <div className='gird col-span-2 bg-white'>
        <div className='flex-center gap-2 mt-3'>
       <img src={Logo} alt='Logo' className='size-20'/>
       <span className='font-MorabbaBold text-2xl'>ایرانسل من</span>
        </div>
        <Divider />
        {/* Search */}
        <label className="relative w-full h-12 block transition-all my-3 px-2">
                <input 
                  className="rounded-xl bg-gray-100 outline-none text-slate-500 placeholder:text-slate-500  w-full h-full dark:border text-base pl-12 pr-5 block transition-all"
                  name="s"
                  type="text"
                  placeholder="جستجو"
                />
                <button
                  type="submit"
                  className="absolute left-4 top-0 bottom-0 w-6 h-6 my-auto text-slate-500 dark:text-gray-500"
                  disabled={false}
                  
                >
                  <Search className="size-6" />
                </button>
              </label>
              <Menu />
    </div>
  )
}

export default RightSide
