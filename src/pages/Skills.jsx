import React from 'react';
import SkillCard from '../components/SkillCard';
import { skills } from '../utils/constants';

const Skills = () => {
  return (
    <div className='flex flex-col items-center p-4 md:p-8 mt-10'>
      <h1 className='text-2xl md:text-3xl font-bold mb-8'>
        Skills
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {skills.map((data, index) => (
          <SkillCard
            key={index} // Ensure a unique key is provided if data doesn't have a unique id
            icon={data.icon}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

