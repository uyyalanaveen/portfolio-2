import { Icon, transition } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ img, title,Github_url,Project_url}) => {
  return (
    <motion.div className="border rounded-md w-[450px] h-[300px] border-emerald-50"
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