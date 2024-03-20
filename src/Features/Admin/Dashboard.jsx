import React from 'react'
import DashboardHeader from '../../UI/DashboardHeader'
import Stats from './Stats'
import Loading from '../../UI/Loading'
import useAllProjects from '../../Hooks/useAllProjects'
import useProposals from '../Proposals/useProposals'
import useAllUsers from './useUsers'

const Dashboard = () => {
  const {isLoading: projectLoading , projects} = useAllProjects()
  const {isLoading: proposalLoading , proposals} = useProposals()
  const {isLoading: usersLoading , users} = useAllUsers()
  if(projectLoading || proposalLoading || usersLoading) return <Loading />
  return (
    <>
    <DashboardHeader title=" گزارش فعالیت اپ" subTitle="ادمین میتونه از این بخش خلاصه گزارش اپ رو ببینه تا مدیریت خوبی رو روند کاری داشته باشه" />
    <Stats projects={projects} proposals={proposals} users={users} />
    </>
  )
}

export default Dashboard