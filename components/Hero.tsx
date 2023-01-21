import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}
export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hey there! My name is Sérgio!",
        ],
        loop: 1,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: [0.1, 0.5,  1.0] }}
            transition={{duration: 2.5}}

        >        
            <img
                className='relative rounded-full h-32 w-32 mx-auto' 
                src="./profile.jpeg" alt=""/>
        </motion.div>

        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-4xl font-semibold px-10 lg:text-5xl'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#8D33FF'/>      
            </h1>
        </div>

        <div className='py-5 z-20'>
            <Link href="#about">
                <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
                <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
                <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
                <button className="heroButton">Projects</button>
            </Link>
        </div>
    </div>
  )
}