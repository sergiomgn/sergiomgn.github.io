import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div>
      <motion.img initial={{ x: directionLeft ? -200 : 200 , opacity: 0}} transition={{duration: 1}} whileInView={{x: 0, opacity: 1}}  src="./assets/" alt="" />
    </div>
  );
}

export default Skill;
