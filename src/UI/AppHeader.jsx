import React from 'react'
import useUser from '../Features/Authentication/useUser'
import { BiCheckShield } from 'react-icons/bi'

const AppHeader = () => {
const {data} = useUser()
  return (
    
    <div className='flex items-center gap-x-1 mb-40 font-DanaBold'><span className='flex-center gap-x-1 text-emerald-500'><BiCheckShield className='size-6'/>{data && data.user.name}</span> عزیز به پنل کاربری خوش اومدی</div>
  )
}

export default AppHeader