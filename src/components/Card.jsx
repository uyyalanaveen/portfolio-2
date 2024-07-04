// components/Card.jsx
import React from 'react';
import { Icon } from '@chakra-ui/react';
const Card = ({ src, content }) => { 
  return (
    <div className="border rounded-md w-[300px] md:w-none h-[5rem] border-emerald-50 p-2 hover:bg-white hover:text-black">
      <div className="flex w-full items-center justify-center h-full ml-4"> 
        <Icon as={src} alt="" className="text-[2rem]"/> 
        <div className="flex items-center justify-center w-full"> 
          <h1 className="text-center text-[1.3rem] font-bold">{content}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;