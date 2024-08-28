import React from 'react';
import profile from '../../src/assets/profile.png';
import { Icon } from '@chakra-ui/react';
import { socialLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';


const Home = () => {
  return (
    <div className='flex items-center justify-center p-4 mt-[5rem] flex-col'>
      <div>
        <img src={profile} alt="Navee Uyyala" className='rounded-full w-[250px] h-[250px] max-[600px]:w-[150px] max-[600px]:h-[150px]' />
      </div>
      <div className='p-4 mt-3 flex flex-col gap-5'>
        <h1 className='text-center text-[#5BE6C9] font-[Righteous] text-3xl'>Hi, my name is</h1>
        <p className=' name text-center text-9xl font-medium max-[600px]:text-5xl'>Naveen Uyyala</p>
      </div>


      <div className=' flex items-center justify-center gap-5'>
        <span className='text-white text-4xl'>I'm </span>
        <ReactTyped
          strings={['Developer','Designer','Coder']}
          typeSpeed={50}
          loop
          backSpeed={50}
          cursorChar="|"
          showCursor={true}
          className='text-[1.4rem] md:text-[3.4rem] font-bold text-green-500'

        />
      </div>
      <div className='social-links flex gap-10 mt-10'>
        {socialLinks.map((linkData, index) => (
          <Link
            key={index}
            to={linkData.href}
            target="_blank"
          >
            <Icon as={linkData.icon} className='text-[2.3rem] hover:text-green-500' />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
