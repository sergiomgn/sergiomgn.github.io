import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function ExperinenceCard({}: Props) {
  return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[35%] md:h-[500px]
                snap-center bg-[#292929] p-[3%] hover:opacity-100 opacity-40 duration-200 overflow-hidden h-[500px] mt-[30%] md:mt-[10%]">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{duration: 1.2}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true}}
                className='md:w-[25%] md:h-[25%] w-32 h-32 rounded-full object-cover object-center'
                src="./ctw_logo.svg" alt="" />

                <div className='px-0 md:px-10'>
                    <h4 className='md:text-2xl font-light text-lg'>CI & Build Developer</h4>
                    <p className='font-bold md:text-xl mt-1 text-md'>Critical Techworks</p>
                </div>
                <div className='flex space-x-2 my-2 py-2'>
                    <img className='md:h-10 md:w-10 h-8 w-8 rounded-full' src="./python.svg" alt="" />
                    <img className='md:h-10 md:w-10 h-8 w-8 rounded-full' src="./python.svg" alt="" />
                    <img className='md:h-10 md:w-10 h-8 w-8 rounded-full' src="./python.svg" alt="" />
                </div>
                <p className='py-0 text-md md:text-sm md:py-1 uppercase text-gray-400'> Started mar - Ended ...</p>
                <ul className='list-disc space-y-4 ml-5 text-sm md:text-lg overflow-y-scroll'>
                    <li>Summary Point</li>
                    <li>Summary Point</li>
                    <li>Summary Point</li>
                    <li>Summary Point</li>
                    <li>Summary Point</li>
                    <li>Summary Point</li>
                    <li>Summary Point</li>
                    <li>Summary Point</li>
                </ul>
        </article>

  )
}