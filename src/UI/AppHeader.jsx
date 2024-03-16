import React from 'react'
import useUser from '../Features/Authentication/useUser'
import { BiCheckShield } from 'react-icons/bi'

const AppHeader = () => {
const {data} = useUser()
console.log(data)
  return (
    <></>
    // <div className='flex items-center gap-x-1 mb-8 font-DanaBold'><BiCheckShield className='size-6'/><span className='text-emerald-500'>{data.user.name}</span> عزیز به پنل کاربری خوش اومدی</div>
  )
}

export default AppHeader