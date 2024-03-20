import React from 'react'
import useAllUsers from './useUsers'
import Table from '../../UI/Table'
import Loading from '../../UI/Loading'
import EmptyAlert from '../../UI/EmptyAlert'
import UsersRow from './UsersRow'


const ProjectTable = () => {
   const {isLoading , users} = useAllUsers()
    if(isLoading) return <Loading />
    if(!users.length) return <EmptyAlert text="کاربری یافت نشد" />
  return (
    <>
        <Table>
        <Table.Header>
        <th scope="col" className="py-4.5">
                    ردیف
                </th>
                <th scope="col" className="px-6 py-4.5">
                    نام کامل 
                </th>
                <th scope="col" className="px-6 py-4.5">
                    شماره موبایل
                </th>
                <th scope="col" className="px-6 py-4.5">
                    ایمیل 
                </th>
                <th scope="col" className="px-1 py-4.5">
                    نقش               
                  </th>
                  <th scope="col" className="px-6 py-4.5">
                    وضعیت             
                  </th>
                <th scope="col" className="px-1.5 py-4.5">
                     عملیات
                </th>
        </Table.Header>
        <Table.Body>
            {
                users.map((user , index) => {
                    return( 
                      <React.Fragment key={index}>
                        <UsersRow users={user} index={index} />
                      </React.Fragment>               
                    )
                })
            }
        </Table.Body>
       </Table>
    </>
  )
}

export default ProjectTable