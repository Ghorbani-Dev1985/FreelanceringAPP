import React from 'react'
import DashboardHeader from '../../UI/DashboardHeader'
import Stats from './Stats'
import Loading from '../../UI/Loading'
import useAllProjects from '../../Hooks/useAllProjects'
import useProposals from '../Proposals/useProposals'

const Dashboard = () => {

  const {projects} = useAllProjects()
  const {proposals} = useProposals()
  console.log(projects , proposals)
  // if(isLoading) return <Loading />
  return (
    <>
    <DashboardHeader title=" گزارش فعالیت اپ" subTitle="ادمین میتونه از این بخش خلاصه گزارش اپ رو ببینه تا مدیریت خوبی رو روند کاری داشته باشه" />
    <Stats projects={projects} proposals={proposals} />
    </>
  )
}

export default Dashboard