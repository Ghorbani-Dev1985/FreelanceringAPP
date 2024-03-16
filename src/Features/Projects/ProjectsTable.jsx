import React from 'react'
import useOwnerProjects from './useOwnerProjects'

const ProjectsTable = () => {
    const {isLoading , projects} = useOwnerProjects()
  return (
    <div>ProjectsTable</div>
  )
}

export default ProjectsTable