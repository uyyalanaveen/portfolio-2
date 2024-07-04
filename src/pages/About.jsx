import React from 'react'
import Card from '../components/Card'
import profile from '../assets/mypic.jpeg'
import { interestsData } from '../utils/constants'

const About = () => {
  return (
    <>
      <div className='p-16'>
        {/* <div className=''> */}
        <div className='flex justify-center gap-2 flex-col items-center md:items-start'>
          <h1 className='text-3xl font-bold relative left-10'>About_______</h1>
          <div className='flex justify-between  md:p-10 gap-16 md:w-[80%] flex-col md:flex-row w-full items-center'>
            <img src={profile} alt="" width={200} className='rounded-md' />
            <div className="content w-full flex flex-col gap-3 justify-center items-center md:items-start">
              <h2 className='text-4xl'>Hey there!!</h2>
              <h2>
                I am Naveen, a passionate web developer. I love to code and create new things. I am a quick learner and always ready to learn new things. I am a team player and always ready to help others.
                lets create something new together, lets connect.
              </h2>
            </div>
          </div>
          {/* </div> */}

        </div>

        <div className='mt-10'>
          <h1 className='text-3xl font-bold relative left-10'>Interest_____</h1>
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