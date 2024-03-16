import React from 'react'
import ProjectsTable from '../../Features/Projects/ProjectsTable'
import Modal from '../../UI/Modal'
import ConfirmDelete from '../../UI/ConfirmDelete'

const Projects = () => {
  return (
    <div>
        <ProjectsTable />
       <ConfirmDelete >
        
       </ConfirmDelete>
    </div>
  )
}

export default Projects