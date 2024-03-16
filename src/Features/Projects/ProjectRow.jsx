import React from 'react'
import Table from '../../UI/Table'
import { ToPersianNumbersWithComma } from '../../Services/ToPersianNumbersWithComma'
import ToLocalDateStringShort from '../../Services/ToLocalDateStringShort'
import TruncateText from '../../Utils/TruncateText'


const ProjectRow = ({project , index}) => {
const {_id , title , category , budget , deadline , tags , freelancer , status} = project
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
                    {category.name}
                </td>
                <td className="px-6 py-4">
                    {ToPersianNumbersWithComma(budget)}
                </td>
                <td className="px-6 py-4 text-right">
                   {ToLocalDateStringShort(deadline)}
                </td>
                <td className="px-6 py-4 text-right">
                <div className='flex flex-wrap items-center gap-2 max-w-[200px'>
                   {tags.map((tag) => (<span className='badge badge-secondary' key={teg}>{tag}</span>))}
                </div>
                </td>
                <td className="px-6 py-4 text-right">
                   {freelancer?.name || "-"}
                </td>
                <td className="px-6 py-4 text-right">
                   {
                    status === "open" ? <span className='badge badge-primary'>باز</span> : <span className='badge badge-close'>بسته</span>
                   }
                </td>
                       </Table.Row>
    </React.Fragment>
  )
}

export default ProjectRow