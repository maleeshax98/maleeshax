"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SingleProjectCard({
  img,
  title,
  desc,
  tech,
  link,
  id,
  github,
}) {
  const [showSet, setShowSet] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col items-center gap-[10px] min-w-[80vw] md:min-w-[350px] max-w-[350px] justify-center bg-[#242424] card rounded-lg p-4"
    >
      <div className="w-full  h-[250px] rounded-md max-w-[80vw] overflow-hidden relative">
        <Image
          src={img}
          fill
          className=" w-full h-full object-cover rounded-md"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-white ">{title}</h1>
        <p className="text-sm mt-[10px] text-[#707070]">{desc}</p>
        <p
          className="mt-[15px] text-[#707070]"
          onClick={() => {
            setShowSet((prev) => !prev);
          }}
        >
          Technologies {showSet ? <span>&uarr;</span> : <span>&darr;</span>}{" "}
        </p>
        {showSet && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <ul className=" list-disc ml-[35px] text-[#b1b1b1]">
              {tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <div className="flex items-center gap-[15px]">
        <Link href={link} target="_blank">
          <motion.div
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.1,
            }}
          >
            <Image src={"/icons/eye.svg"} width={25} height={25} alt="" />
          </motion.div>
        </Link>
        <Link href={github} target="_blank">
          <motion.div
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.1,
            }}
          >
            <Image src={"/icons/code.svg"} width={25} height={25} alt="" />
          </motion.div>
        </Link>

        <motion.div
          initial={{
            scale: 1,
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <Image src={"/icons/read.svg"} width={25} height={25} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
}
