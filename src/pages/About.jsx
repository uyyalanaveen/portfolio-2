import React from 'react';
import Card from '../components/Card';
import profile from '../assets/mypic.jpeg';
import { interestsData } from '../utils/constants';

const About = () => {
  return (
    <div className='p-4 md:p-8 mt-7 flex flex-col items-center justify-center'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-8'>
        About
      </h1>
      
      <div className='flex flex-col md:flex-row gap-8 items-center'>
        <img src={profile} alt="Profile" className='rounded-md w-40 md:w-48' />
        <div className='flex flex-col gap-4 text-center md:text-left'>
          <h2 className='text-2xl md:text-3xl'>Hey there!!</h2>
          <p className='text-base md:text-lg text-justify'>
            Hello! I'm Naveen, a dedicated and enthusiastic web developer with a deep passion for coding and building innovative solutions. I thrive on the challenge of transforming ideas into functional, user-friendly web applications. My journey in the tech world is driven by a constant desire to learn and grow, embracing new technologies and methodologies to stay at the forefront of web development. I believe in the power of collaboration and the magic of creating something amazing together. If you're looking for someone who is eager to bring fresh ideas to the table, work seamlessly in a team, and contribute positively to your projects, let's connect! Together, we can turn visions into reality and embark on exciting new ventures.
          </p>
        </div>
      </div>

      <h1 className='text-3xl md:text-4xl font-bold text-center mt-10'>
        Interest
      </h1>
      
      <div className='flex flex-col items-center mt-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {interestsData.map((data, index) => (
            <Card
              src={data.icon}
              content={data.interest}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

