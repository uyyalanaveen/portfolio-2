import React from 'react'
import Card from '../components/Card'
import profile from '../assets/mypic.jpeg'
import { interestsData } from '../utils/constants'

const About = () => {
  return (
    <>
      <div className='p-16 '>
        {/* <div className=''> */}
        <div className='relative left-10'>
         <h1 className='text-4xl font-bold '>About______</h1>
         </div>
        <div className='flex justify-center gap-2 flex-col items-center mt-6'>
          <div className='flex justify-between  md:p-10 gap-16 md:w-[80%] flex-col md:flex-row w-full items-center'>
            <img src={profile} alt="" width={200} className='rounded-md' />
            <div className="content w-full flex flex-col gap-3 justify-center items-center md:items-start md:relative bottom-3">
              <h2 className='text-4xl '>Hey there!!</h2>
              <h2 className='text-2xl font-normal text-justify'>
              Hello! I'm Naveen, a dedicated and enthusiastic web developer with a deep passion for coding and building innovative solutions. I thrive on the challenge of transforming ideas into functional, user-friendly web applications. My journey in the tech world is driven by a constant desire to learn and grow, embracing new technologies and methodologies to stay at the forefront of web development.
              I believe in the power of collaboration and the magic of creating something amazing together. If you're looking for someone who is eager to bring fresh ideas to the table, work seamlessly in a team, and contribute positively to your projects, let's connect! Together, we can turn visions into reality and embark on exciting new ventures.
              </h2>
            </div>
          </div>
          {/* </div> */}

        </div>

        <h1 className='text-4xl font-bold relative left-10'>Interest_____</h1>
        <div className='flex justify-center gap-2 flex-col items-center '>
          <div className='md:p-4 m-5'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 md:p-5  '>
              {interestsData.map((data, index) => (
                <Card src={data.icon} content={data.interest} key={index} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
    
  )
}

export default About