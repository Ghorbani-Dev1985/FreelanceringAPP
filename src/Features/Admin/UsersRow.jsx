import React, { useState } from 'react'
import Table from '../../UI/Table';
import Modal from '../../UI/Modal';
import { HiMiniArrowPathRoundedSquare } from 'react-icons/hi2';
import ChangeUserStatus from './ChangeUserStatus';

const userStatus = {
    0 : {
        label: "باز",
        className: "badge-primary px-4"
    },
    1: {
        label: "در انتظار تایید",
        className: "badge-primary"
    },
    2: {
        label: "تایید شده",
        className: "badge-success"
    }
}

const ProjectRow = ({users , index}) => {
const {_id , name , phoneNumber , email , role ,  status} = users
const [isChangeOpen , setIsChangeOpen] = useState(false)
  return (

    <React.Fragment key={_id}>
      <Table.Row>
      <tr className="bg-secondary-50/50 text-center border-b last:border-b-0 text-secondary-700 hover:bg-slate-100 dark:hover:bg-secondary-500 px-6 py-4 transition-colors">
                <th className="px-6 py-4">
                    {index + 1}
                </th>
                <td className="px-6 py-4">
                    {name}
                </td>
                <td className="px-6 py-4">
                    {phoneNumber}
                </td>
                <td className="px-6 py-4">
                    {email}
                </td>
                <td className="px-6 py-4">
                   {role === "ADMIN" ? "ادمین" : "کاربر"}
                </td>
                <td className="px-6 py-4">
                 <span className={`badge ${userStatus[status].className}`}>
                    {userStatus[status].label}
                 </span>
                </td>
                <td>
                    <button className='disabled:text-secondary-500 disabled:cursor-not-allowed text-sky-500' onClick={() => setIsChangeOpen((prev) => !prev)}>
                    <HiMiniArrowPathRoundedSquare className='size-5'/>
                    </button>
                    {/* Add Modal */}
                    <Modal open={isChangeOpen} title={`تغییر وضعیت کاربر ${name}`} OnCloseHandler={() => setIsChangeOpen((prev) => !prev)}>
                        <ChangeUserStatus userId={_id} OnCloseHandler={() => setIsChangeOpen((prev) => !prev)}/>
                    </Modal>

                </td>

                </tr>
                       </Table.Row>
                       
    </React.Fragment>
  )
}

export default ProjectRow