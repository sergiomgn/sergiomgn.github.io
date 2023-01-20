import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {

    return (
        <div className='flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto items-center justify-evenly align-items-y'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img 
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{ duration: 0.77, }}
                whileInView={{ 
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                src='https://scontent.flis3-1.fna.fbcdn.net/v/t39.30808-6/309680341_5800611829957440_3536387482233508831_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hsPWF1fDFg0AX-lNuLS&_nc_ht=scontent.flis3-1.fna&oh=00_AfBjTHYstQ5GpSxIcbiEKwgXcx2WU_Q2Og7YAXmkslGM3w&oe=63C65B18'
                className='xs:mb-20 w-32 h-32 top-48 flex-shrink-0 rounded-full object-cover md:bottom-[30%] md:rounderd-large md:mb-0 md:w-64 md:h-96 md:rounded-lg xl:w-[28%] xl:h-[60%] absolute md:left-40'
            />
            <motion.div 
                initial={{
                    opacity: 0,
                }}
                whileInView={{ opacity: 1 }}
                transition={{duration: 0.77}}
                viewport={{ once: true}}
                className='absolute tracking-wide px-4 md:left-[450px] xl:left-[560px] bottom-[20%] sm:bottom-32 xs:text-xs md:top-[244px] text-gray-500 md:right-40 text-justify sm:text-lg md:text-xl' >
                <p>
                    My name is Sérgio Neves, I am a Software Developer based in Portugal working at <a className="decoration underline " href='https://www.criticaltechworks.com/' >Critical Techworks</a>, 
                    applying my skills to create innovative solutions.
                    I hold a Master's degree in Computer and Electrotecnical Engineering from Instituto Superior Técnico.
                </p>
                <p>
                  I am an avid sports enthusiast, playing Volleyball and also interested in personal finance and investing. 
                  I enjoy using statistical methods, especially those involving machine learning, deep learning and A.I. to make better decisions and achieve financial goals. 
                  I am eager to learn new things and make a positive impact in the world.
                </p>
            </motion.div>
        </div>
    )
}