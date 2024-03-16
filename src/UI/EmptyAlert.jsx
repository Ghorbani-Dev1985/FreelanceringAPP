import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'

const EmptyAlert = ({text}) => {
  return (
    <div className='flex items-center gap-x-1 bg-sky-100 text-sky-500 font-DanaBold border border-sky-400 rounded-xl p-2'><BiInfoCircle className='size-6'/><span>{text}</span></div>
  )
}

export default EmptyAlert