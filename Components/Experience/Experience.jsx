"use client";
import React from "react";
import { motion } from "framer-motion";
import Timeline from "../Timeline/Timeline";

export default function Experience() {
  return (
    <motion.div
      initial={{
        y: 500,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="bg-[#1e1e1f] rounded-md p-4  border-[1px] border-[#333333] flex gap-[10px]  top-10 pb-[80px]"
    >
      <div>
        <h1 className="font-bold text-2xl text-white text-left">Experience</h1>
        <div className="underline w-[80px] h-[5px] rounded-full"></div>
        <div className="mt-[30px]">
          <Timeline />
        </div>
      </div>
    </motion.div>
  );
}
