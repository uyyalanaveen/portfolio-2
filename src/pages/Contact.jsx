import React from 'react'
import ContactForm from '../components/ContactForm'
import { Icon } from '@chakra-ui/react';
import { socialLinks } from '../utils/constants';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='flex flex-col gap-16 items-center p-16'>
      <div className='flex items-center justify-center '>
        <h1 className=' text-start lg:text-start font-acorn  md:text-9xl  text-7xl lg:text-[12rem] relative left-16'>Lets work together</h1>
        <div className=''>
          <ContactForm />
        </div>
      </div>

      <div className='social-links flex gap-16'>
        {socialLinks.map((linkData, index) => (
          <Link
            key={index}
            to={linkData.href}
            target="_blank"
          >
            <Icon as={linkData.icon} className='text-[2.6rem] hover:text-green-500' />
          </Link>
        ))}
      </div>


    </div>
  )
}

export default Contact