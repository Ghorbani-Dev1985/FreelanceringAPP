import React from 'react'
import useOwnerProjects from './useOwnerProjects'
import Loading from './../../UI/Loading'
import EmptyAlert from '../../UI/EmptyAlert'
import Table from '../../UI/Table'
import ProjectRow from './ProjectRow'



const ProjectsTable = () => {
    const {isLoading , projects} = useOwnerProjects()
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
                    دسته بندی
                </th>
                <th scope="col" className="px-6 py-4.5">
                    بودجه
                </th>
                <th scope="col" className="px-1 py-4.5">
                    ددلاین               
                  </th>
                  <th scope="col" className="px-6 py-4.5">
                    تگ ها               
                  </th>
                  <th scope="col" className="px-6 py-4.5">
                    فریلنسر               
                  </th>
                  <th scope="col" className="px-6 py-4.5">
                    وضعیت               
                  </th>
                <th scope="col" className="px-1.5 py-4.5">
                عملیات
                </th>
                <th scope="col" className="px-1.5 py-4.5">
                درخواست‌ها
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

export default ProjectsTable