import React from 'react'
import { HiArrowUturnLeft } from "react-icons/hi2";
import useMoveBack from '../../Hooks/useMoveBack';

const ProjectHeader = ({project}) => {
    const moveBack = useMoveBack()
  return (
    <div className='w-full flex-between'>
      <p className='font-MorabbaBold text-2xl'>لیست درخواست‌های <span className='text-primary-900'>{project.title}</span></p>
      <button onClick={moveBack} className='btn btn-outline flex-center gap-x-1'>
      <HiArrowUturnLeft className='size-5'/>
        بازگشت
      </button>
    </div>
  )
}

export default ProjectHeader