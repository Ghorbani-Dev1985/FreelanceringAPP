import React from 'react'
import EmptyAlert from "./../../UI/EmptyAlert"
import Table from '../../UI/Table'
import ProposalRow from './ProposalRow'
const ProposalsTable = ({proposals}) => {

  if(!proposals.length) return <EmptyAlert text="تا حالا هیچ درخواستی براش ثبت نشده" />
  return (
    <>
     <Table>
        <Table.Header>
        <th scope="col" className="py-4.5">
                    ردیف
                </th>
                <th scope="col" className="px-6 py-4.5">
                    نام فریلنسر 
                </th>
                <th scope="col" className="px-6 py-4.5">
                    توضیحات
                </th>
                <th scope="col" className="px-6 py-4.5">
                    زمان تحویل
                </th>
                <th scope="col" className="px-1 py-4.5">
                    هزینه               
                  </th>
                  <th scope="col" className="px-6 py-4.5">
                   وضعیت           
                  </th>
                <th scope="col" className="px-1.5 py-4.5">
                تغییر وضعیت
                </th>
        </Table.Header>
        <Table.Body>
            {
                proposals.map((proposal , index) => {
                    return( 
                      <React.Fragment key={index}>
                        <ProposalRow proposal={proposal} index={index} />
                      </React.Fragment>               
                    )
                })
            }
        </Table.Body>
       </Table>
    </>
  )
}

export default ProposalsTable