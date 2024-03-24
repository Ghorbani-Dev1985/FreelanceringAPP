import React from 'react'
import useUser from '../Features/Authentication/useUser'
import HeaderMenu from './HeaderMenu'
import UserAvatar from '../Features/Authentication/UserAvatar'
import MobileNavLink from './MobileNavLink'
import { freeLancerMenuItems } from '../Features/Freelancer/FreelancerLayout'
import { ownerMenuItems } from '../Features/Owner/OwnerLayout'
import { adminMenuItems } from '../Features/Admin/AdminLayout'

const AppHeader = () => {
  const {isLoading , user} = useUser()
  console.log(user.role)
  return (
    <section className='flex-between font-DanaBold mt-12 mb-20'>
      <div>
        <MobileNavLink MenuItems={user.role === "FREELANCER" ? freeLancerMenuItems  : user.role === "OWNER" ? ownerMenuItems :  adminMenuItems}/>
      </div>
      <div className={`${isLoading && "blur-md opacity-55"} flex-center gap-x-2`}>
        <UserAvatar />
        <HeaderMenu />
      </div>
    </section>
  )
}

export default AppHeader