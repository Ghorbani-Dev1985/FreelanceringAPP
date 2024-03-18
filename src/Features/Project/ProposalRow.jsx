import React from 'react'
import { ToPersianNumbersWithComma } from '../../Utils/ToPersianNumbersWithComma'
import Table from '../../UI/Table'
import TruncateText from '../../Utils/TruncateText'

const ProposalRow = ({proposal , index}) => {
const {_id , user , description , duration , price , status} = proposal
  return (
    <React.Fragment key={_id}>
      <Table.Row>
      <tr className={`${status === "OPEN" ? "bg-emerald-50" : "bg-primary-100/50"} border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 px-6 py-4 transition-colors`}>
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
                   {status}
                
                </td>
                <td className="px-6 py-4">
                    {/* <ToggleProjectStatus project={project}/> */}
                </td>
                <td>
                    {/* <div className='flex-center gap-x-4'>
                    <button onClick={() => setIsEditOpen((prev) => !prev)}>
                    <TbPencilMinus className='size-5 text-sky-500'/>
                    </button> */}
                    {/* Edit Modal */}
                    {/* <Modal open={isEditOpen} title={`ویرایش ${title}`} OnCloseHandler={() => setIsEditOpen((prev) => !prev)}>
                        <CreateProjectForm ProjectToEdit={project} OnCloseHandler={() => setIsEditOpen((prev) => !prev)}/>
                    </Modal> */}
                    {/* <button onClick={() => setIsDeleteOpen((prev) => !prev)}>
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

export default ProposalRow