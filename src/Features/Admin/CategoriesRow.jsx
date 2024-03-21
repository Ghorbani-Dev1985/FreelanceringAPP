import React, { useState } from 'react'
import Table from '../../UI/Table';
import Modal from '../../UI/Modal';
import CreateNewCategory from './CreateNewCategory';
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from 'react-icons/hi';
import ConfirmDelete from '../../UI/ConfirmDelete';
import useRemoveCategory from './useRemoveCategory'

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

const ProjectRow = ({category , index}) => {
const { label , value , desc , enTitle} = category
const [isNewOpen , setIsNewOpen] = useState(false)
const [isDeleteOpen , setIsDeleteOpen] = useState(false)
 const {isDeleting , removeCategory} = useRemoveCategory()
  return (

    <React.Fragment key={value}>
      <Table.Row>
      <tr className="bg-secondary-50/50 text-center border-b last:border-b-0 text-secondary-700 hover:bg-slate-100 dark:hover:bg-secondary-500 px-6 py-4 transition-colors">
                <th className="px-6 py-4">
                    {index + 1}
                </th>
                <td className="px-6 py-4">
                    {label}
                </td>
                <td className="px-6 py-4">
                    {enTitle}
                </td>
                <td className="px-6 py-4">
                    {desc}
                </td>
                <td>
                    <div className='flex-center gap-x-4'>
                <button className='disabled:text-secondary-500 disabled:cursor-not-allowed text-sky-500' onClick={() => setIsNewOpen((prev) => !prev)}>
                    <TbPencilMinus className='size-5'/></button>
        
                    {/* Edit Modal */}
                    <Modal open={isNewOpen} title={` ویرایش دسته‌بندی‌ ${label}`} OnCloseHandler={() => setIsNewOpen((prev) => !prev)}>
                        <CreateNewCategory CategoryToEdit={category} OnCloseHandler={() => setIsNewOpen((prev) => !prev)}/>
                    </Modal>
                    <button onClick={() => setIsDeleteOpen((prev) => !prev)}>
                    <HiOutlineTrash className='size-5 text-rose-500'/>
                    </button>
                    {/* Delete Modal */}
                    <ConfirmDelete open={isDeleteOpen} resourceName={label} title={`حذف ${label}`} OnCloseHandler={() => setIsDeleteOpen((prev) => !prev)} OnConfirmHandler={() => removeCategory(value , {onSuccess: () => setIsDeleteOpen((prev) => !prev)})} disabled={false} />
                    </div>

                </td>

                </tr>
                       </Table.Row>
                       
    </React.Fragment>
  )
}

export default ProjectRow