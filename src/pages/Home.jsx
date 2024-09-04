import React from 'react';
import profile from '../../src/assets/profile.png';
import { Icon } from '@chakra-ui/react';
import { socialLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import {ReactTyped} from 'react-typed';
import resumeFile from '../assets/MyResume.pdf';

const Home = () => {
  return (
    <div className='flex items-center justify-center p-4 md:mt-[5rem] flex-col'>
      {/* Profile Image */}
      <div>
        <img 
          src={profile} 
          alt="Navee Uyyala" 
          className='rounded-full w-[250px] h-[250px] max-[600px]:w-[150px] max-[600px]:h-[150px]' 
        />
      </div>

      {/* Name Section */}
      <div className='p-4 mt-3 flex flex-col gap-5'>
        <h1 className='text-center text-[#5BE6C9] font-[Righteous] text-3xl'>
          Hi, my name is
        </h1>
        <p className='name text-center text-7xl md:text-9xl font-medium max-[600px]:text-5xl'>
          Naveen Uyyala
        </p>
      </div>

      {/* Typed Animation */}
      <div className='flex items-center justify-center gap-2 md:gap-5 text-violet-500'>
        <span className='text-violet-500 text-2xl md:text-4xl'>
          I'm
        </span>
        <ReactTyped
          strings={['Developer', 'Designer', 'Coder']}
          typeSpeed={50}
          loop
          backSpeed={50}
          cursorChar="|"
          showCursor={true}
          className='text-2xl md:text-4xl font-bold text-violet-500'
        />
      </div>

      {/* Social Links */}
      <div className='social-links flex gap-5 md:gap-10 mt-10'>
        {socialLinks.map((linkData, index) => (
          <Link
            key={index}
            to={linkData.href}
            target="_blank"
            aria-label={linkData.name}
          >
            <Icon as={linkData.icon} className='text-2xl md:text-[2.3rem] hover:text-violet-500' />
          </Link>
        ))}
      </div>

      {/* Resume Button for Mobile */}
      <div className='flex justify-center items-center mt-9 md:hidden'>
            <a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className='flex justify-center items-center gap-10 bg-violet-700 p-2 rounded-md hover:bg-violet-500'
          aria-label="View Resume"
        >
          <button className='text-white p-2 font-bold text-lg'>Resume</button>
        </a>
    </div>
    </div>
  );
};

export default Home;

