import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0,}}
    animate={{scale: [1,2,2,3,1], opacity: [0.1, 0.2,0.4, 0.8, 0.1, 1.0]}}
    transition={{duration: 2.5}}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute rounded-full border border-[#333333] h-[300px] w-[300px] mt-52'/>
        <div className='absolute rounded-full border border-[#333333] h-[500px] w-[500px] mt-52'/>
        <div className='absolute rounded-full border border-[#333333] h-[500px] w-[500px] mt-52'/>
        <div className='absolute rounded-full border border-yellow-500 h-[650px] w-[650px] opacity-20 mt-52 animate-pulse'/>
        <div className='absolute rounded-full border border-[#333333] h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}