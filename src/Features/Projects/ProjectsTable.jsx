import React from 'react'
import useOwnerProjects from './useOwnerProjects'
import Loading from './../../UI/Loading'
import EmptyAlert from '../../UI/EmptyAlert'
import Table from '../../UI/Table'
import ProjectRow from './ProjectRow'

const ProjectsTable = () => {
    const {isLoading , projects} = useOwnerProjects()
    if(isLoading) return <Loading />
    if(projects.length) return <EmptyAlert text="تا حالا پروژه ای ثبت نشده" />
  return (
    <>
       <Table>
        <Table.Header>
        <th scope="col" className="px-6 py-3">
                    ردیف
                </th>
                <th scope="col" className="px-6 py-3">
                    عنوان 
                </th>
                <th scope="col" className="px-6 py-3">
                    دسته بندی
                </th>
                <th scope="col" className="px-6 py-3">
                    بودجه
                </th>
                <th scope="col" className="px-6 py-3">
                    ددلاین               
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ددلاین               
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تگ ها               
                  </th>
                  <th scope="col" className="px-6 py-3">
                    فریلنسر               
                  </th>
                  <th scope="col" className="px-6 py-3">
                    وضعیت               
                  </th>
                <th scope="col" className="px-6 py-3">
                عملیات
                </th>
        </Table.Header>
        <Table.Body>
            {
                projects.map((project , index) => {
                    return(                
                       <ProjectRow project={project} index={index} />
                    )
                })
            }
        </Table.Body>
       </Table>

    </>
  )
}

export default ProjectsTable