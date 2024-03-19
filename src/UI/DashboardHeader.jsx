import React from 'react'

const DashboardHeader = ({title , subTitle}) => {
  return (
    <>
    <h1 className='font-MorabbaBold text-3xl mb-4'> {title}</h1>
    <p>{subTitle}</p>
    </>
  )
}

export default DashboardHeader