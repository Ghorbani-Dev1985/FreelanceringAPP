import { AddCircleOutlineOutlined, HomeOutlined, TapAndPlayOutlined } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className='flex flex-col gap-6 text-zinc-700 mt-8'>
        <NavLink to="/" className={({isActive}) => ["flex items-center gap-1 w-full py-1 px-2" , isActive ? "border-r-4 border-r-primary text-primary font-DanaBold" : "font-Dana text-zinc-700" ].join(" ")}>
           <HomeOutlined />
            <span> نمای کلی</span>
        </NavLink>
        <NavLink to="/orders" className={({isActive}) => ["flex items-center gap-1 w-full py-1 px-2" , isActive ? "border-r-4 border-r-primary text-primary font-DanaBold" : "font-Dana text-zinc-700" ].join(" ")}>
           <TapAndPlayOutlined />
            <span>  بسته های  من</span>
        </NavLink>
        <NavLink to="/simChargee" className={({isActive}) => ["flex items-center gap-1 w-full py-1 px-2" , isActive ? "border-r-4 border-r-primary text-primary font-DanaBold" : "font-Dana text-zinc-700" ].join(" ")}>
           <AddCircleOutlineOutlined />
            <span> شارژ سیمکارت </span>
        </NavLink>
    </div>
  )
}

export default Menu
