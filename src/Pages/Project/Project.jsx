import React from 'react'
import useProject from '../../Features/Project/useProject'
import Loading from '../../UI/Loading'
import ProjectHeader from '../../Features/Project/ProjectHeader'
import ProposalsTable from '../../Features/Project/ProposalsTable'

const Project = () => {
  
const {project , isLoading} = useProject()
 if(isLoading) return <Loading />
  return (
    <>
    <ProjectHeader project={project} />
    <ProposalsTable proposals={project.proposals} />
    </>
  )
}

export default Project