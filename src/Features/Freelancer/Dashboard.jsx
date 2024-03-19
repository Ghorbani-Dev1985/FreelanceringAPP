import React from 'react'
import DashboardHeader from './DashboardHeader'
import Stats from './Stats'
import useOwnerProjects from '../Projects/useOwnerProjects'
import Loading from '../../UI/Loading'
import useProposals from '../Proposals/useProposals'

const Dashboard = () => {
  const {isLoading , proposals} = useProposals()
  if(isLoading) return <Loading />
  return (
    <>
    <DashboardHeader />
    <Stats proposals={proposals} />
    </>
  )
}

export default Dashboard