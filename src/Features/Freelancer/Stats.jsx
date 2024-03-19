import React from 'react'
import Stat from './../../UI/Stat'
import { BiListPlus, BiWallet } from "react-icons/bi";
import { HiOutlineShieldCheck } from 'react-icons/hi2';
import {ToPersianNumbersWithComma} from '../../Utils/ToPersianNumbersWithComma.js'

const Stats = ({proposals}) => {
  const NumOfProposals = proposals.length
  const AcceptedProposal = proposals.filter(proposal => proposal.status === 2)
  const Balance = AcceptedProposal.reduce((acc , curr) => acc + curr.price , 0)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <Stat color="bg-violet-500" icon={<BiListPlus />} title="درخواست‌ها" value={NumOfProposals} />
        <Stat color="bg-green-500" icon={<HiOutlineShieldCheck />} title="درخواست‌های تایید شده" value={AcceptedProposal.length}/>
        <Stat color="bg-orange-500" icon={<BiWallet />} title="کیف پول" value={ToPersianNumbersWithComma(Balance)}/>
    </div>
  )
}

export default Stats