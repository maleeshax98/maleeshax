import React from "react";
import { motion } from "framer-motion";
export default function Circle() {
  return (
    <motion.div
      className=" hidden  relative md:flex justify-center items-center z-0"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="w-[50px] h-[50px] border border-[#3b3b3b86] rounded-full  animate-ping absolute"></div>
      <div className="w-[100px] h-[100px] border border-[#3b3b3bbf] rounded-full  animate-ping absolute"></div>
      <div className="w-[200px] h-[200px] border border-[#3b3b3bec] rounded-full  animate-ping absolute"></div>
      <div className="w-[800px] h-[800px] border border-[#93939386] rounded-full  animate-pulse absolute"></div>
    </motion.div>
  );
}
