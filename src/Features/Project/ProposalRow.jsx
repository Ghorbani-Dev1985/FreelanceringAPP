import React, { useState } from 'react'
import { ToPersianNumbersWithComma } from '../../Utils/ToPersianNumbersWithComma'
import Table from '../../UI/Table'
import TruncateText from '../../Utils/TruncateText'
import Modal from '../../UI/Modal'
import { HiMiniArrowPathRoundedSquare } from 'react-icons/hi2'
import ChangeProposalStatus from './ChangeProposalStatus'

const statusStyle = [
    {
        label: "رد شده",
        className: "badge-danger"
    },
    {
        label: " در انتظار تایید",
        className: "badge-primary"
    },
    {
        label: "تایید شده",
        className: "badge-success"
    }
]

const ProposalRow = ({proposal , index}) => {
const {_id , user , description , duration , price , status} = proposal
const [isStatusOpen , setIsStatusOpen] = useState(false)
  return (
    <React.Fragment key={_id}>
      <Table.Row>
      <tr className={`${status === 0 ? "bg-rose-50" : status === 1 ? "bg-primary-100/50" : status === 2 ? "bg-emerald-50" : "bg-secondary-0"} border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 px-6 py-4 transition-colors`}>
                <th className="px-6 py-4">
                    {index + 1}
                </th>
                <td className="px-6 py-4">
                    {user.name}
                </td>
                <td className="px-6 py-4">
                    {TruncateText(description , 50) }
                </td>
                <td className="px-6 py-4">
                    {duration} روز
                </td>
                <td className="px-6 py-4">
                    {ToPersianNumbersWithComma(price)}
                </td>
                <td className="px-6 py-4">
                    <span className={`badge ${statusStyle[status].className}`}>
                        {statusStyle[status].label}
                    </span>             
                </td>
                <td>
                    <div className='flex-center gap-x-4'>
                    <button onClick={() => setIsStatusOpen((prev) => !prev)}>
                    <HiMiniArrowPathRoundedSquare className='size-5 text-sky-500'/>
                    </button>
                    {/* Edit Modal */}
                    <Modal open={isStatusOpen} title="تغییر وضعیت درخواست" OnCloseHandler={() => setIsStatusOpen((prev) => !prev)}>
                       <ChangeProposalStatus proposalID={_id} OnCloseHandler={() => setIsStatusOpen((prev) => !prev)}/>
                    </Modal>
                    </div>
                </td>
            
                </tr>
                       </Table.Row>
                       
    </React.Fragment>
  )
}

export default ProposalRow