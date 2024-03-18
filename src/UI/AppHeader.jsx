import React from 'react'
import useUser from '../Features/Authentication/useUser'
import HeaderMenu from './HeaderMenu'
import UserAvatar from '../Features/Authentication/UserAvatar'

const AppHeader = () => {
  const {isLoading, user} = useUser()
  return (
    <section className='container xl:max-w-screen-lg flex items-center justify-end font-DanaBold mt-12 mb-20'>
      {/* <div className='flex items-center gap-x-1 '><span className='flex-center gap-x-1 text-emerald-500'><BiCheckShield className='size-6'/>{data && data.user.name}</span> عزیز به پنل کاربری خوش اومدی</div> */}
      <div className={`${isLoading && "blur-md opacity-55"} flex-center gap-x-2`}>
        <HeaderMenu />
        <UserAvatar />
      </div>
    </section>
  )
}

export default AppHeader