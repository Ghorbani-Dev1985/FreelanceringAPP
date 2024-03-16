import React from 'react'
import ProjectsTable from '../../Features/Projects/ProjectsTable'
import Modal from '../../UI/Modal'

const Projects = () => {
  return (
    <div>
        <ProjectsTable />
        <Modal title="ویرایش پروژه" 
        >
            مودال
        </Modal>
    </div>
  )
}

export default Projects