import React, { useState } from 'react'

import { ToPersianNumbersWithComma } from '../../../Utils/ToPersianNumbersWithComma'
import ToLocalDateStringShort from '../../../Utils/ToLocalDateStringShort'
import TruncateText from '../../../Utils/TruncateText'
import { TbPencilMinus } from "react-icons/tb";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import Modal from '../../../UI/Modal'
import Table from '../../../UI/Table';
import { MdAssignmentAdd } from "react-icons/md";

const projectStatus = {
    OPEN : {
        label: "باز",
        className: "badge-primary px-4"
    },
    CLOSED: {
        label: "بسته",
        className: "badge-close"
    }
}

const ProjectRow = ({project , index}) => {
const {_id , title , budget , deadline , status} = project
const [isEditOpen , setIsEditOpen] = useState(false)
const [isDeleteOpen , setIsDeleteOpen] = useState(false)
  return (

    <React.Fragment key={_id}>
      <Table.Row>
      <tr className="bg-secondary-100 text-center border-b last:border-b-0 text-secondary-700 hover:bg-slate-100 dark:hover:bg-secondary-500 px-6 py-4 transition-colors">
                <th className="px-6 py-4">
                    {index + 1}
                </th>
                <td className="px-6 py-4">
                    {TruncateText(title , 30)}
                </td>
                <td className="px-6 py-4">
                    {ToPersianNumbersWithComma(budget)}
                </td>
                <td className="px-6 py-4">
                   {ToLocalDateStringShort(deadline)}
                </td>
                <td className="px-6 py-4">
                 <span className={`badge ${projectStatus[status].className}`}>
                    {projectStatus[status].label}
                 </span>
                </td>
                <td>
                    <button>
                        <MdAssignmentAdd className='size-5 text-sky-500'/>
                    </button>
                    {/* <div className='flex-center gap-x-4'>
                    <button onClick={() => setIsEditOpen((prev) => !prev)}>
                    <TbPencilMinus className='size-5 text-sky-500'/>
                    </button> */}
                    {/* Edit Modal */}
                    {/* <Modal open={isEditOpen} title={`ویرایش ${title}`} OnCloseHandler={() => setIsEditOpen((prev) => !prev)}>
                        <CreateProjectForm ProjectToEdit={project} OnCloseHandler={() => setIsEditOpen((prev) => !prev)}/>
                    </Modal>
                    <button onClick={() => setIsDeleteOpen((prev) => !prev)}>
                    <HiOutlineTrash className='size-5 text-rose-500'/>
                    </button> */}
                    {/* Delete Modal */}
                    {/* <ConfirmDelete open={isDeleteOpen} resourceName={title} title={`حذف ${title}`} OnCloseHandler={() => setIsDeleteOpen((prev) => !prev)} OnConfirmHandler={() => removeProject(_id , {onSuccess: () => setIsDeleteOpen((prev) => !prev)})} disabled={false} />
                    </div> */}
                </td>

                </tr>
                       </Table.Row>
                       
    </React.Fragment>
  )
}

export default ProjectRow