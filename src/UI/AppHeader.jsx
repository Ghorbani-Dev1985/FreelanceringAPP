import React from 'react'
import useUser from '../Features/Authentication/useUser'

const AppHeader = () => {
const {data} = useUser()
console.log(data)
  return (
    <div className='mb-8'>AppHeader</div>
  )
}

export default AppHeader