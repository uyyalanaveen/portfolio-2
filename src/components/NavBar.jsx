import React, { useState } from 'react';
import { navItems } from '../utils/constants';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <div className='flex justify-center text-[1.2rem] mt-2 '>
      <div className='flex p-3 gap-14 bg-transparent backdrop-blur-md'>
        {navItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <div className='text-[1.5rem] hover:text-green-500'>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
