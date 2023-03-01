import React from 'react';
import { motion } from 'framer-motion';
import ExperinenceCard from './ExperinenceCard';

type Props = {}

enum techStack {
  Python = './python.svg',
  Github = './github.svg'
}

export default function Experience({}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex relative flex-col h-screen overflow-hidden text-lft items-center md:flex-row
      max-w-full px-10 justify-evenly mx-auto container">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>
      
        <div className='flex w-full space-x-5 overflow-x-scroll py-100 p-10 snap-x snap-mandatory z-1'>
          <ExperinenceCard companyName="Critical Techworks" companyLogo='./ctw_logo.svg' companyRole='CI & Build Developer' techStack={[techStack.Python, techStack.Github]} date={{"start": "Jun 2021", "end": "Present"}}/>
          <ExperinenceCard companyName="Critical Techworks" companyLogo='./ctw_logo.svg' companyRole='CI & Build Developer' techStack={[techStack.Python, techStack.Github]} date={{"start": "Sept. 2020","end": "Jun. 2021" }}/>
        </div>

    </motion.div>
  )
}