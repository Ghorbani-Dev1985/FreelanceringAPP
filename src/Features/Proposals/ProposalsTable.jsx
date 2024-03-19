import React from 'react'
import useProposals from './useProposals'
import Loading from '../../UI/Loading'
import EmptyAlert from '../../UI/EmptyAlert'
import ProposalRow from './ProposalRow'
import Table from '../../UI/Table'

const ProposalsTable = () => {
   const {isLoading , proposals} = useProposals()
   if(isLoading) return <Loading />
   if(!proposals.length) return <EmptyAlert text="تا حالا درخواستی ثبت نشده" />
  return (
    <>
        <Table>
        <Table.Header>
        <th scope="col" className="py-4.5">
                    ردیف
                </th>
                <th scope="col" className="px-6 py-4.5">
                    توضیحات 
                </th>
                <th scope="col" className="px-6 py-4.5">
                    زمان تحویل 
                </th>
                <th scope="col" className="px-6 py-4.5">
                    هزینه(تومان)
                </th>
                  <th scope="col" className="px-6 py-4.5">
                    وضعیت               
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