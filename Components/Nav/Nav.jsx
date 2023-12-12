"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function Nav({ setActive, active }) {
  return (
    <motion.nav
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
        once: true
      }}
      className="nav rounded-md p-2 sticky border-[1px] border-[#333333] flex gap-[10px] items-center justify-center top-10 "
    >
      <ul className="flex flex-wrap items-center justify-center ">
        <motion.li
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={`${ active === "About" ? 'active-card' : ''}  p-2 rounded-l-md font-semibold text-[#888888]`}
          onClick={() => {
            setActive("About")
          }}
        >
          <p>About</p>
        </motion.li>
        <motion.li
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={` ${ active === "Awards" ? 'active-card' : ''} cursor-pointer p-2 font-semibold text-[#888888] rounded-l-md`}
          onClick={() => {
            setActive("Awards")
          }}
        >
          <p>Awards</p>
        </motion.li>
        <motion.li
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={` ${ active === "Experience" ? 'active-card' : ''} cursor-pointer p-2 font-semibold text-[#888888] rounded-l-md `}
          onClick={() => {
            setActive("Experience")
          }}
        >
          <p>Experience</p>
        </motion.li>
        <motion.li
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={` ${ active === "Projects" ? 'active-card' : ''} cursor-pointer p-2 font-semibold text-[#888888] rounded-l-md `}
          onClick={() => {
            setActive("Projects")
          }}
        >
          <p>Projects</p>
        </motion.li>
        <motion.li
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={` ${ active === "Contact" ? 'active-card' : ''} cursor-pointer p-2 font-semibold text-[#888888] rounded-l-md `}
          onClick={() => {
            setActive("Contact")
          }}
        >
          <p>Contact</p>
        </motion.li>
      </ul>
    </motion.nav>
  );
}
