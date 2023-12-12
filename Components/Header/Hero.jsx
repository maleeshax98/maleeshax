"use client";
import React from "react";
import Circle from "../Circles/Circle";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import SocialIcons from "../SocialIcons/SocialIcons";
import Link from "next/link";

export default function Hero({ setActive }) {
  const [text] = useTypewriter({
    words: [
      "Coffee Connoisseur Extraordinaire - Brewing Dreams with Every Sip.",
      "Physics Fiend - Exploring the Universe One Equation at a Time.",
      "{ JavaScript Enthusiast } - Coding Love Stories with Braces.",
      "Embracing Setbacks with Style - The Art of Turning 'FK Failures!' into Triumphs.",
      "Loyalty Unleashed - As Fierce as the Universe Itself.",
    ],
    loop: 0,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      className="h-screen hero relative flex flex-col items-center justify-center "
      // initial={{
      //   opacity: 0,
      // }}
      // animate={{
      //   opacity: 1,
      // }}
    >
      <div className=" relative z-20">
        <div className="flex flex-col justify-center items-center">
          <motion.div>
            <Image
              src={"/images/main-dark.png"}
              width={300}
              height={300}
              alt="main image"
            />
          </motion.div>
        </div>
        <h1 className="uppercase tracking-[15px] font-semibold text-[#848484] text-sm mb-[10px] text-center">
          Hello There! I'm
        </h1>
        <h1 className="font-bold text-[#c0c0c0] text-3xl text-center">
          Maleesha Nayanashan
        </h1>
        <p className="font-semibold text-[#848484] text-xl text-center mt-[10px]">
          <span>
            {" "}
            {"<"} {text} {"/>"}
          </span>
          <Cursor cursorColor="#037dff" />
        </p>

        <motion.div
          className="flex justify-center items-center gap-[10px]"
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 100,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <SocialIcons />
        </motion.div>
        <motion.div
          className="flex flex-wrap mt-[20px] justify-center items-center gap-[15px] font-semibold text-[#848484]"
          initial={{
            y: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 100,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <Link href={"#hero"}>
            <motion.p
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
                fontStyle: "underline",
                background:
                  "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              Home
            </motion.p>
          </Link>
          <Link href={"#main"}>
            <motion.p
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
                fontStyle: "underline",
                background:
                  "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
                padding: "5px",
                borderRadius: "10px",
              }}
              onClick={() => {
                setActive("About")
              }}
            >
              About Me
            </motion.p>
          </Link>
          <Link href={"#main"}>
            <motion.p
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
                fontStyle: "underline",
                background:
                  "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
                padding: "5px",
                borderRadius: "10px",
              }}
              onClick={() => {
                setActive("Awards")
              }}
            >
              Awards
            </motion.p>
          </Link>
          <Link href={"#main"}>
            <motion.p
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
                fontStyle: "underline",
                background:
                  "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
                padding: "5px",
                borderRadius: "10px",
              }}
              onClick={() => {
                setActive("Projects")
              }}
            >
              Projects
            </motion.p>
          </Link>
          <Link href={"#main"}>
            <motion.p
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
                fontStyle: "underline",
                background:
                  "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
                padding: "5px",
                borderRadius: "10px",
              }}
              onClick={() => {
                setActive("Experience")
              }}
            >
              Experience
            </motion.p>
          </Link>
          <Link href={"#main"}>
            <motion.p
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
                fontStyle: "underline",
                background:
                  "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
                padding: "5px",
                borderRadius: "10px",
              }}
              onClick={() => {
                setActive("Contact")
              }}
            >
              Contact
            </motion.p>
          </Link>
        </motion.div>
      </div>
      <div className=" absolute">
        <Circle />
      </div>
    </motion.div>
  );
}
