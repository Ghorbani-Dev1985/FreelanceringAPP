import React from 'react'
import { IoIosPaper, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiListBullet, HiMiniSquares2X2 } from 'react-icons/hi2';
import Stat from '../../UI/Stat';
import { BiListCheck } from 'react-icons/bi';

const Stats = ({projects , proposals}) => {
  console.log(projects , proposals)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <Stat color="bg-lime-500" icon={<HiListBullet />} title="پروژه‌ها" value={projects.length} />
        <Stat color="bg-fuchsia-500" icon={<BiListCheck />} title="درخواست‌ها" value={proposals.length}/>
        {/* <Stat color="bg-sky-500" icon={<IoIosPaper />} title="پروپوزال" value={NumOfProposals}/> */}
    </div>
  )
}

export default Stats