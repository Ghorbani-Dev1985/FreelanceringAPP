import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import useLogout from './useLogout'
import Loading from './../../UI/Loading'

const Logout = () => {
    const {isPending , logout} = useLogout()
  return (
    isPending ? <Loading /> :
    <button onClick={logout} className="flex-center gap-x-1 text-rose-500 hover:text-rose-300 transition-colors">
    <HiOutlineLogout className="size-5" />
   <span>خروج</span> 
</button>
  
  )
}

export default Logout