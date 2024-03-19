import React from 'react'
import DashboardHeader from '../../UI/DashboardHeader'
import Stats from './Stats'
import Loading from '../../UI/Loading'
import useProposals from '../Proposals/useProposals'

const Dashboard = () => {
  const {isLoading , proposals} = useProposals()
  if(isLoading) return <Loading />
  return (
    <>
    <DashboardHeader title="گزارش عملکرد" subTitle="تو این نمای کلی یک گزارش کلی از درخواست های خودت و همچنین میزان درآمدت که به کیف پولت اضافه شده رو مشاهده می کنی" />
    <Stats proposals={proposals} />
    </>
  )
}

export default Dashboard