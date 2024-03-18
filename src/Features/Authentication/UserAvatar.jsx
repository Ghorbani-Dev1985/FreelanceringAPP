import React from 'react'
import UserImg from './../../Assets/Images/User/user.jpg'
import useUser from './useUser'
const UserAvatar = () => {
    const {user} = useUser()
  return (
    <div className='flex items-center gap-x-2 text-secondary-600'>
       <img src={UserImg} alt="ghorbani-dev.ir" className='size-10 rounded-full object-cover object-center'/>
       <span>{user?.name}</span> 
    </div>
  )
}

export default UserAvatar