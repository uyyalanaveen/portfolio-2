import React from 'react'
import ProjectCard from '../components/ProjectCard'

import { projects } from '../utils/constants'

const Projects = () => {
  return (
    <div className='p-16'>
      <h1 className='text-3xl font-bold relative left-10'>Projects__________</h1>
      <div className='grid grid-cols-3 mt-10 ml-10'>
        {projects.map((project) => {
          return <ProjectCard img={project.img} title={project.title} Github_url={project.Github_url} Project_url={project.Project_url} />
        })}
      </div>

    </div>
  )
}

export default Projects