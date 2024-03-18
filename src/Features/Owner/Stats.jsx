import React from 'react'


const Stats = ({projects}) => {
  const NumOfProjects = projects.length
  const NumOfAcceptedProjects = projects.map(project => project.status === 2).length
  const NumOfProposals = projects.reduce((acc , curr) => curr.proposals.length + acc ,0)
  return (
    <div>
        
    </div>
  )
}

export default Stats