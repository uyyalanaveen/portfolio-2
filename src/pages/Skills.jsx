import React from 'react'
import SkillCard from '../components/SkillCard'
import { skills } from '../utils/constants'

const Skills = () => {
    return (
        <div className='p-16'>
            <h1 className='text-3xl font-bold relative left-10 mb-10'>Skills_______</h1>
            <div className='grid min-[1200px]:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-9  min-[1024px]:grid-cols-4 relative left-10'>
                {skills.map((data, index) => (
                    <SkillCard icon={data.icon} title={data.title} />
                ))
                }
            </div>


        </div>
    )
}

export default Skills