import React, { useState } from 'react'
import Table from '../../UI/Table'
import { ToPersianNumbersWithComma } from '../../Utils/ToPersianNumbersWithComma'
import ToLocalDateStringShort from '../../Utils/ToLocalDateStringShort'
import TruncateText from '../../Utils/TruncateText'
import { TbPencilMinus } from "react-icons/tb";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import Modal from '../../UI/Modal'
import ConfirmDelete from '../../UI/ConfirmDelete'
import useRemoveProject from './useRemoveProject'
import CreateProjectForm from './CreateProjectForm'
import ToggleProjectStatus from './ToggleProjectStatus'
import { Link } from 'react-router-dom'


const ProjectRow = ({project , index}) => {
const {_id , title , category , budget , deadline , tags , freelancer , status} = project
const [isEditOpen , setIsEditOpen] = useState(false)
const [isDeleteOpen , setIsDeleteOpen] = useState(false)
const {removeProject , isDeleting} = useRemoveProject()
  return (

    <React.Fragment key={_id}>
      <Table.Row>
      <tr className={`${status === "OPEN" ? "bg-emerald-50 dark:bg-secondary-300" : "bg-primary-50/50"} text-center border-b text-secondary-700 hover:bg-slate-200 dark:hover:bg-secondary-500 px-6 py-4 transition-colors`}>
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
                <td className="px-6 py-4">
                   {ToLocalDateStringShort(deadline)}
                </td>
                <td className="px-1 py-4">
                <div className='flex flex-wrap items-center gap-2 max-w-[200px'>
                   {tags.map((tag) => (<span className='badge badge-secondary' key={tag}>{tag}</span>))}
                </div>
                </td>
                <td className="px-6 py-4">
                   {freelancer?.name || "-"}
                </td>
                <td className="px-6 py-4">
                    <ToggleProjectStatus project={project}/>
                </td>
                <td>
                    <div className='flex-center gap-x-4'>
                    <button onClick={() => setIsEditOpen((prev) => !prev)}>
                    <TbPencilMinus className='size-5 text-sky-500'/>
                    </button>
                    {/* Edit Modal */}
                    <Modal open={isEditOpen} title={`ویرایش ${title}`} OnCloseHandler={() => setIsEditOpen((prev) => !prev)}>
                        <CreateProjectForm ProjectToEdit={project} OnCloseHandler={() => setIsEditOpen((prev) => !prev)}/>
                    </Modal>
                    <button onClick={() => setIsDeleteOpen((prev) => !prev)}>
                    <HiOutlineTrash className='size-5 text-rose-500'/>
                    </button>
                    {/* Delete Modal */}
                    <ConfirmDelete open={isDeleteOpen} resourceName={title} title={`حذف ${title}`} OnCloseHandler={() => setIsDeleteOpen((prev) => !prev)} OnConfirmHandler={() => removeProject(_id , {onSuccess: () => setIsDeleteOpen((prev) => !prev)})} disabled={false} />
                    </div>
                </td>
                <td>
                    <Link to={_id} className='flex-center'>
                    <HiEye className='size-6 text-sky-500'/>
                    </Link>
                </td>
                </tr>
                       </Table.Row>
                       
    </React.Fragment>
  )
}

export default ProjectRow