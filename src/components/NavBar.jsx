import React, { useState, useEffect } from 'react';
import { navItems } from '../utils/constants';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import resumeFile from '../assets/MyResume.pdf';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const NavItems = ({ className, onItemClick }) => {
  return (
    <ul className={`flex flex-row w-full justify-center gap-10 items-center md:gap-[5rem] ${className} `}>
      {navItems.map((item, index) => (
        <Link key={index} to={item.path} onClick={onItemClick}>
          <div className='text-[1.2rem] hover:text-white hover:bg-violet-700 text-black p-2 rounded-md'>
            {item.name}
          </div>
        </Link>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`md:flex justify-center font-mono py-2 sticky top-0 z-50`}>
      {/* Desktop Navbar */}
      <div className='hidden md:flex w-[80%] h-14 rounded-[50px] justify-center'>
        <NavItems />
        <a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex justify-center items-center gap-10 p-1 rounded-md ${darkMode ? 'bg-violet-600 hover:bg-violet-500' : 'bg-violet-700 hover:bg-violet-500'}`}
          aria-label="View Resume"
        >
          <button className='text-white p-1  font-bold text-md'>Resume</button>
        </a>
        <div
          className={`ml-10 flex justify-center items-center border border-gray-400 p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-transparent hover:bg-violet-500'}`}
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <MdLightMode className='text-[2rem]' /> : <MdDarkMode className='text-[2rem]' />}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className='md:hidden bg-none p-2'>
        <button onClick={toggleNavbar} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
          {isOpen ? <X className='w-[2rem] h-[2rem] text-violet-500' /> : <Menu className='w-[2rem] h-[2rem] text-violet-500' />}
        </button>
        {isOpen && (
          <div className={`fixed top-0 left-0 w-full h-full ${darkMode ? 'bg-gray-900' : 'bg-white'} bg-opacity-95 flex flex-col items-start p-5 z-50 gap-10`}>
            <button onClick={toggleNavbar} aria-label='Close Menu' className='mb-4'>
              <X className='w-[2rem] h-[2rem] text-violet-500' />
            </button>
            <NavItems className='flex-col gap-5 w-full' onItemClick={toggleNavbar} />
            <div
              className={`absolute flex border border-gray-400 p-3 rounded-full left-[80%] ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-transparent hover:bg-violet-500'}`}
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <MdLightMode className='text-[2rem]' /> : <MdDarkMode className='text-[2rem]' />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

