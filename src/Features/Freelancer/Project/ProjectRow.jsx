import React, { useState } from 'react'

import { ToPersianNumbersWithComma } from '../../../Utils/ToPersianNumbersWithComma'
import ToLocalDateStringShort from '../../../Utils/ToLocalDateStringShort'
import TruncateText from '../../../Utils/TruncateText'
import Modal from '../../../UI/Modal'
import Table from '../../../UI/Table';
import { MdAssignmentAdd } from "react-icons/md";
import CreateProposal from '../../Proposals/CreateProposal'

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
const [isAddOpen , setIsAddOpen] = useState(false)
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
                    <button onClick={() => setIsAddOpen((prev) => !prev)}>
                        <MdAssignmentAdd className='size-5 text-sky-500'/>
                    </button>
                    {/* Add Modal */}
                    <Modal open={isAddOpen} title={`درخواست انجام ${title}`} OnCloseHandler={() => setIsAddOpen((prev) => !prev)}>
                        <CreateProposal projectID={_id} OnCloseHandler={() => setIsAddOpen((prev) => !prev)}/>
                    </Modal>

                </td>

                </tr>
                       </Table.Row>
                       
    </React.Fragment>
  )
}

export default ProjectRow