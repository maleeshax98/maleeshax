"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const skills = [
  {
    img: "skills/nextjs.svg",
    skill: "Next Js",
    level: "95%",
  },

  {
    img: "skills/react.svg",
    skill: "React Js",
    level: "98%",
  },
  {
    img: "skills/node.svg",
    skill: "Node Js (Express Js)",
    level: "98%",
  },
  {
    img: "skills/tailwind.svg",
    skill: "Tailwind Css",
    level: "90%",
  },
  {
    img: "skills/git.svg",
    skill: "Git",
    level: "85%",
  },
  {
    img: "skills/mongo.svg",
    skill: "MongoDB",
    level: "80%",
  },
  {
    img: "skills/firebase.svg",
    skill: "Firebase",
    level: "50%",
  },
  ,
  {
    img: "skills/reactnative.svg",
    skill: "React Native",
    level: "95%",
  },
  {
    img: "skills/php.svg",
    skill: "PHP",
    level: "80%",
  },
  {
    img: "skills/python.svg",
    skill: "Python",
    level: "90%",
  },
];
export default function () {
  return (
    <div className="md:flex flex-wrap justify-center gap-[20px]">
      {skills.map((s) => (
        <div className="mt-[20px] md:min-w-[450px]" key={s.skill}>
          <div className="flex gap-[10px] mb-[10px] items-center">
            <div className="p-2 card rounded-lg">
              <Image src={s.img} width={20} height={20} alt="" />
            </div>
            <p className="font-semibold text-white">
              {s.skill} - {s.level}
            </p>
          </div>

          <motion.div
            initial={{
              width: "0%",
            }}
            whileInView={{
              width: s.level,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="h-[10px] bg-blue-600 rounded-full skill-loader"
          ></motion.div>
        </div>
      ))}
    </div>
  );
}
