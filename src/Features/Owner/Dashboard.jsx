import React from 'react'
import DashboardHeader from '../../UI/DashboardHeader'
import Stats from './Stats'
import useOwnerProjects from '../Projects/useOwnerProjects'
import Loading from '../../UI/Loading'
import Chart from '../../UI/Chart'

const Dashboard = () => {
  const {isLoading , projects} = useOwnerProjects()
  if(isLoading) return <Loading />
  return (
    <>
    <DashboardHeader title="آمار کلی" subTitle="تو این نمای کلی یک آمار کلی از فعالیتهای خودت رو مشاهده می کنی" />
    <Stats projects={projects} />
    <Chart title=" پروژه‌های ثبت شده" key={projects._id} data={projects} dataKey="budget" XdataKey="title" />
    </>
  )
}

export default Dashboard