import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    companyName: string,
    companyLogo: string,
    companyRole: string,
    techStack: string[],
    date: {"start": string, "end": string},
}

export default function ExperinenceCard(props: Props) {

    const stack = props.techStack.map((img => 
        <img className='md:h-10 md:w-10 h-8 w-8 rounded-full' src={img} alt="" />
    ));
      
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
                className='md:w-[33%] md:h-[25%] w-32 h-25 rounded-full object-cover object-center'
                src={props.companyLogo} alt="" />

                <div className='px-0 md:px-10'>
                    <h4 id="companyRole" className='md:text-2xl font-light text-lg'>{props.companyRole}</h4>
                    <p id="companyName" className='font-bold md:text-xl mt-1 text-md'>{props.companyName}</p>
                </div>

                <div className='flex space-x-2 my-2 py-2'>
                    {stack}
                </div>
                
                <p id="date" className='py-0 text-md md:text-sm md:py-1 uppercase text-gray-400'> {props.date.start} - {props.date.end}</p>
                <ul id="summaryPoints" className='list-disc space-y-4 ml-5 text-sm md:text-lg overflow-y-scroll'>
                    <li>Summary Point</li>
                </ul>
        </article>

  )
}