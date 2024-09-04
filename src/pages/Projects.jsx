import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/constants';

const Projects = () => {
  return (
    <div className='flex flex-col items-center p-4 md:p-8'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mt-10'>
        Projects
      </h1>
      <div className='grid grid-cols-1 gap-6 sm:gap-8 mt-8 md:grid-cols-2 md:gap-12'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            Github_url={project.Github_url}
            Project_url={project.Project_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
