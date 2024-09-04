import { Icon } from '@chakra-ui/react'
import React from 'react'

const SkillCard = ({icon,title}) => {
  return (
    <div className="border rounded-md w-[200px] h-[7rem] border-gray-300  hover:bg-violet-700 hover:text-white">
      <div className="flex w-full items-center justify-center h-full flex-col"> 
        <Icon as={icon} alt="" className="text-[3rem] ml-3"/> 
        <div className="flex items-center justify-center w-full"> 
          <h1 className="text-center text-[1.6rem] font-semibold">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
