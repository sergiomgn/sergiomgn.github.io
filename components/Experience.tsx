import React from 'react';
import { motion } from 'framer-motion';
import ExperinenceCard from './ExperinenceCard';

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex relative flex-col h-screen overflow-hidden text-lft items-center md:flex-row
      max-w-full px-10 justify-evenly mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div className='flex w-full space-x-5 overflow-scroll p-10 snap-x snap-mandatory'>
        <ExperinenceCard />
        <ExperinenceCard />
        <ExperinenceCard />
        <ExperinenceCard />
      </div>
    </motion.div>
  )
}