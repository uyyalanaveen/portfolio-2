import React, { useState } from 'react';
import { navItems } from '../utils/constants';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';


const NavItems = ({ className }) => {
  return (
      <ul className={`flex flex-row w-full justify-evenly items-center gap-10 md:gap-10 ${className}`}>
          {navItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <div className='text-[1.5rem] hover:text-green-500'>
              {item.name}
            </div>
          </Link>
        ))}
      </ul>
  );
};

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:flex justify-center font-mono py-2 sticky top-0 z-50'>
      <div className='hidden md:flex w-[67%] h-14 rounded-[50px] justify-center bg-transparent text-white '>
      <NavItems className={`flex-wrap`} />
      </div>

      <div className='md:hidden bg-none p-1'>
        <button onClick={toggleNavbar}>
          {isOpen ? <X /> : <Menu className='w-[4rem] h-[2rem] text-white' />}
        </button>
        {isOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-start p-5 z-50 text-white gap-10'>
            <button onClick={toggleNavbar} className='mb-4'>
              <X className='w-[2rem] h-[2rem] text-white' />
            </button>
            <NavItems className='flex-col gap-5' />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
