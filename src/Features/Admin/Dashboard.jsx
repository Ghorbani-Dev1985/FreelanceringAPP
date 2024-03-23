import React from 'react'
import DashboardHeader from '../../UI/DashboardHeader'
import Stats from './Stats'
import Loading from '../../UI/Loading'
import useAllProjects from '../../Hooks/useAllProjects'
import useProposals from '../Proposals/useProposals'
import useAllUsers from './useUsers'
import Chart from './../../UI/Chart'
const Dashboard = () => {
  const {isLoading: projectLoading , projects} = useAllProjects()
  const {isLoading: proposalLoading , proposals} = useProposals()
  const {isLoading: usersLoading , users} = useAllUsers()
  if(projectLoading || proposalLoading || usersLoading) return <Loading />
  console.log(proposals)
  return (
    <>
    <DashboardHeader title=" گزارش فعالیت اپ" subTitle="ادمین میتونه از این بخش خلاصه گزارش اپ رو ببینه تا مدیریت خوبی رو روند کاری داشته باشه" />
    <Stats projects={projects} proposals={proposals} users={users} />
    <Chart title=" پروژه‌های ثبت شده" key={projects._id} data={projects} dataKey="budget" XdataKey="title" />
    <Chart title=" درخواست‌های ثبت شده" key={proposals._id} data={proposals} dataKey="price" XdataKey="duration" />
    </>
  )
}

export default Dashboard