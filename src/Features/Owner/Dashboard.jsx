import React from 'react'
import DashboardHeader from './DashboardHeader'
import Stats from './Stats'
import useOwnerProjects from '../Projects/useOwnerProjects'
import Loading from '../../UI/Loading'

const Dashboard = () => {
  const {isLoading , projects} = useOwnerProjects()
  if(isLoading) return <Loading />
  return (
    <>
    <DashboardHeader />
    <Stats projects={projects} />
    </>
  )
}

export default Dashboard