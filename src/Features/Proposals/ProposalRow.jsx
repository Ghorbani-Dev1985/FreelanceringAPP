import React from 'react'
import Table from '../../UI/Table'
import { ToPersianNumbersWithComma } from '../../Utils/ToPersianNumbersWithComma'
import TruncateText from '../../Utils/TruncateText'

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
const {_id , description , duration , price , status} = proposal
  return (

    <React.Fragment key={_id}>
      <Table.Row>
      <tr className="bg-secondary-50/50 text-center border-b last:border-b-0 text-secondary-700 hover:bg-slate-100 dark:hover:bg-secondary-500 px-6 py-4 transition-colors">
                <th className="px-6 py-4">
                    {index + 1}
                </th>
                <td className="px-6 py-4">
                    {TruncateText(description , 80)}
                </td>
                <td className="px-6 py-4">
                    {duration} روز
                </td>
                <td className="px-6 py-4">
                    {ToPersianNumbersWithComma(price)}
                </td>
                <td className="px-1 py-4">
                <span className={`badge ${statusStyle[status].className}`}>
                        {statusStyle[status].label}
                    </span>  
                </td>
                </tr>
                       </Table.Row>
                       
    </React.Fragment>
  )
}

export default ProposalRow