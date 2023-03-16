import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
  skillImg: string;
};

function Skill({ directionLeft, skillImg }: Props) {
  return (
    <div>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={skillImg}
        alt=""
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
}

export default Skill;
