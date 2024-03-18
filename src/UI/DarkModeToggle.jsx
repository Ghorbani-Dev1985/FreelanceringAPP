import React from 'react'
import { HiOutlineSun } from 'react-icons/hi2'

const DarkModeToggle = () => {
  return (
    <button className="flex-center size-10 bg-secondary-50 border border-secondary-200 rounded-full">
        <HiOutlineSun className='size-7 text-secondary-400'/>
    </button>
  )
}

export default DarkModeToggle