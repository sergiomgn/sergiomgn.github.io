import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" items-center h-screen flex relative flex-col text-center mx-w-[2000px] min-h-screen justify-center md:text-left mx-auto items xl:flex-row xl:p-10 xl:space-y-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[4px] text-gray-500 text-xs">
        Hover over a skills for current proficiency
      </h3>

      <div className="absolute grid grid-cols-4 gap-5">
        <Skill skillImg="./assets/tech_stack/mongodb.svg"/>
        <Skill skillImg="./assets/tech_stack/mongodb.svg"/>
        <Skill skillImg="./assets/tech_stack/mongodb.svg"/>
        <Skill skillImg="./assets/tech_stack/mongodb.svg"/>
        
      </div>
    </motion.div>
  );
}

export default Skills;
