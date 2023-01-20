import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial= {{
            x: -500,
            opacity: 0,
            scale: .5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.2
        }}
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url='https://www.linkedin.com/in/s-neves/' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://github.com/sNeves20' fgColor='gray' bgColor='transparent'/>
        </motion.div>

        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: .5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.2
        }}
        className='flex flex-row items-center cursor-pointer text-gray-300'>
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>
                Get in Touch
            </p>
        </motion.div>
    </header>
  )
}