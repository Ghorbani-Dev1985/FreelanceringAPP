import React from 'react'
import { HiListBullet,  HiOutlineUserGroup } from 'react-icons/hi2';
import Stat from '../../UI/Stat';
import { BiListCheck } from 'react-icons/bi';

const Stats = ({projects , proposals , users}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <Stat color="bg-teal-500" icon={<HiOutlineUserGroup />} title="کاربرها" value={users.length}/>
        <Stat color="bg-lime-500" icon={<HiListBullet />} title="پروژه‌ها" value={projects.length} />
        <Stat color="bg-fuchsia-500" icon={<BiListCheck />} title="درخواست‌ها" value={proposals.length}/>
    </div>
  )
}

export default Stats