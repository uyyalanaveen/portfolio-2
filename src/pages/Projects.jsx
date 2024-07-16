import React from 'react'
import ProjectCard from '../components/ProjectCard'

import { projects } from '../utils/constants'

const Projects = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold max-sm:text-center mt-10'>Projects__________</h1>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 mt-10 md:gap-16'>
        {projects.map((project) => {
          return <ProjectCard img={project.img} title={project.title} Github_url={project.Github_url} Project_url={project.Project_url} />
        })}
      </div>
    </div>
  )
}

export default Projects