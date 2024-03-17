import React, { useState } from 'react'
import Table from '../../UI/Table'
import { ToPersianNumbersWithComma } from '../../Utils/ToPersianNumbersWithComma'
import ToLocalDateStringShort from '../../Utils/ToLocalDateStringShort'
import TruncateText from '../../Utils/TruncateText'
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from '../../UI/Modal'
import useRemoveProject from './useRemoveProject'

const ProjectRow = ({project , index}) => {
const {_id , title , category , budget , deadline , tags , freelancer , status} = project
const [isEditOpen , setIsEditOpen] = useState(false)
const [isDeleteOpen , setIsDeleteOpen] = useState(false)
const {removeProject , isDeleting} = useRemoveProject()
  return (

    <React.Fragment key={_id}>
      <Table.Row>
                <th className="px-6 py-4">
                    {index + 1}
                </th>
                <td className="px-6 py-4">
                    {TruncateText(title , 30)}
                </td>
                <td className="px-6 py-4">
                    {category.title}
                </td>
                <td className="px-6 py-4">
                    {ToPersianNumbersWithComma(budget)}
                </td>
                <td className="px-6 py-4 text-right">
                   {ToLocalDateStringShort(deadline)}
                </td>
                <td className="px-6 py-4 text-right">
                <div className='flex flex-wrap items-center gap-2 max-w-[200px'>
                   {tags.map((tag) => (<span className='badge badge-secondary' key={tag}>{tag}</span>))}
                </div>
                </td>
                <td className="px-6 py-4 text-right">
                   {freelancer?.name || "-"}
                </td>
                <td className="px-6 py-4 text-right">
                   {
                    status === "OPEN" ? <span className='badge badge-primary px-6 py-2'>باز</span> : <span className='badge badge-close px-6 py-2'>بسته</span>
                   }
                </td>
                <td>
                    <div className='flex-center gap-x-4'>
                    <button onClick={() => setIsEditOpen((prev) => !prev)}>
                    <TbPencilMinus className='size-5 text-sky-500'/>
                    </button>
                    {/* Edit Modal */}
                    <Modal open={isEditOpen} title={`ویرایش ${title}`} OnCloseHandler={() => setIsEditOpen((prev) => !prev)}>
                        this is modal
                    </Modal>
                    <button onClick={() => setIsDeleteOpen((prev) => !prev)}>
                    <HiOutlineTrash className='size-5 text-rose-500'/>
                    </button>
                    {/* Delete Modal */}
                    <Modal open={isDeleteOpen} resourceName={title} title={`حذف ${title}`} OnCloseHandler={() => setIsDeleteOpen((prev) => !prev)} OnConfirmHandler={() => removeProject(_id , {onSuccess: () => setIsDeleteOpen((prev) => !prev)})} disabled={false}>
                        this is modal
                    </Modal>
                    </div>
                </td>
                       </Table.Row>
                       
    </React.Fragment>
  )
}

export default ProjectRow