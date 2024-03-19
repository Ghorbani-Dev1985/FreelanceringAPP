import React from 'react'
import Table from '../../../UI/Table'
import Loading from '../../../UI/Loading'
import EmptyAlert from '../../../UI/EmptyAlert'
import useAllProjects from "../../../Hooks/useAllProjects"
import ProjectRow from './ProjectRow'


const ProjectTable = () => {
   const {isLoading , projects} = useAllProjects()
    if(isLoading) return <Loading />
    if(!projects.length) return <EmptyAlert text="پروژه‌ای یافت نشد" />
  return (
    <>
        <Table>
        <Table.Header>
        <th scope="col" className="py-4.5">
                    ردیف
                </th>
                <th scope="col" className="px-6 py-4.5">
                    عنوان 
                </th>
                <th scope="col" className="px-6 py-4.5">
                    بودجه(تومان)
                </th>
                <th scope="col" className="px-1 py-4.5">
                    ددلاین               
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
                projects.map((project , index) => {
                    return( 
                      <React.Fragment key={index}>
                        <ProjectRow project={project} index={index} />
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