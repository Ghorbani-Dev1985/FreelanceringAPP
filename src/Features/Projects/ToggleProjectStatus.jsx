import React, { useState } from 'react'
import useToggleProjectStatus from './useToggleProjectStatus'
import Loading from '../../UI/Loading'
import Toggle from '../../UI/Toggle'

const ToggleProjectStatus = ({project}) => {
  const {isUpdating , toggleProjectStatus} = useToggleProjectStatus()
  const ToggleStatusHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN"
    toggleProjectStatus({
      id: project._id,
      data: {status},
    }
    )
  }
  return (
    <div className='w-24'>
      {
        isUpdating ? <Loading height={20} width={50} /> :
          <Toggle enabled={project.status === "OPEN" ? true : false} label={project.status === "OPEN" ? <span className='badge badge-success px-4'>باز</span> : <span className='badge badge-primary'>بسته</span>} onChange={ToggleStatusHandler}/>
      }
          </div>
  )
}

export default ToggleProjectStatus