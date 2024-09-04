import { Icon, transition } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ img,title,Github_url,Project_url}) => {
  return (
    <motion.div className="border-[2px] rounded-md w-[490px] h-[300px] border-gray-500 shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.1 }}>
      <img src={img} alt="" className="w-full h-[200px] object-cover" />
      <div className="p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex justify-between mt-4">
          <a href={Github_url} target="_blank" rel="noreferrer">
            <Icon as={FaGithub} className="text-2xl" />
          </a>
          <a href={Project_url} target="_blank" rel="noreferrer">
            <Icon as={FaExternalLinkAlt} className="text-2xl" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
