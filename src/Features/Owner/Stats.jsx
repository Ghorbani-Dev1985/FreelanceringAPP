import React from 'react'
import Stat from './Stat'
import { IoIosPaper, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiMiniSquares2X2 } from 'react-icons/hi2';

const Stats = ({projects}) => {
  const NumOfProjects = projects.length
  const NumOfAcceptedProjects = projects.map(project => project.status === 2).length
  const NumOfProposals = projects.reduce((acc , curr) => curr.proposals.length + acc ,0)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <Stat color="bg-amber-300" icon={<HiMiniSquares2X2 />} title="پروژه‌ها" value={NumOfProjects} />
        <Stat color="bg-emerald-400" icon={<IoMdCheckmarkCircleOutline />} title="پروژه های پذیرفته" value={NumOfAcceptedProjects}/>
        <Stat color="bg-sky-500" icon={<IoIosPaper />} title="پروپوزال" value={NumOfProposals}/>
    </div>
  )
}

export default Stats