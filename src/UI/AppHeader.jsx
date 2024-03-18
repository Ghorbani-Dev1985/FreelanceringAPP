import React from 'react'
import useUser from '../Features/Authentication/useUser'
import HeaderMenu from './HeaderMenu'
import UserAvatar from '../Features/Authentication/UserAvatar'

const AppHeader = () => {
  const {isLoading} = useUser()
  return (
    <section className='flex items-center justify-end font-DanaBold mt-12 mb-20'>
      <div className={`${isLoading && "blur-md opacity-55"} flex-center gap-x-2`}>
        <UserAvatar />
        <HeaderMenu />
      </div>
    </section>
  )
}

export default AppHeader