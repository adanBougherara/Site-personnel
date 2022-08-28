import React from 'react'
import Sidebar from '../Components/Sidebar'
import ProjectList from "../Components/Projets/ProjectList"
function Projects() {
  return (
    <div className='projectsPage'>
        <Sidebar/>
        <ProjectList />
        
    </div>
  )
}

export default Projects