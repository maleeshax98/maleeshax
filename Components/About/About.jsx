import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard/ServiceCard";
import Skills from "../Skills/Skills";
import Image from "next/image";
export default function About() {
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
        <h1 className="font-bold text-2xl text-white text-left">About Me</h1>
        <div className="underline w-[80px] h-[5px] rounded-full"></div>
        <div className="mt-[30px]">
          <div className="w-[150px] h-[150px] mb-[20px] rounded-lg overflow-hidden relative">
            <Image
              src={"/images/1.jpg"}
              fill
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white">
            Welcome to my corner of the web. I'm Maleesha, a self-taught Web
            Developer with a relentless passion for crafting elegant and
            efficient digital experiences. Despite the absence of a formal
            degree, my journey is defined by a commitment to continuous learning
            and a pursuit of excellence.
            <br />
            <br />
            In the realm of coding, I specialize in turning ideas into reality,
            translating concepts into clean, functional, and visually appealing
            websites. Each line of code I write is infused with creativity and a
            dedication to delivering seamless user experiences.
            <br />
            <br />
            Driven by a genuine love for problem-solving and innovation, I
            thrive in the dynamic world of web development. As I navigate
            through the ever-evolving landscape of technology, my goal is to
            bring forth solutions that not only meet but exceed expectations.
            <br />
            <br />
            And, of course, no journey through the digital realm is complete
            without a healthy dose of caffeine. Coffee isn't just a beverage;
            it's a companion in my coding adventures, a source of inspiration
            that fuels my creativity.
            <br />
            <br />
            Join me on this journey where simplicity meets sophistication, where
            lines of code transform into functional art. Let's build something
            extraordinary together.
          </p>
        </div>
        <div className="mt-[30px]">
          <h1 className="font-bold text-2xl text-white text-left">What I Do</h1>
          <div className="underline w-[80px] h-[5px] rounded-full"></div>
          <div className="mt-[20px] flex flex-wrap gap-[15px] items-start justify-center">
            <ServiceCard
              img={"/icons/web.svg"}
              title={"Web Development & Design"}
              desc={
                "Weaving the web with precision and creativity. Your digital dreams, our code reality. Professional type web development"
              }
            />
            <ServiceCard
              img={"/icons/app.svg"}
              title={"App Development & Design"}
              desc={
                "Turning ideas into interactive experiences. App Developer on a mission to redefine user engagement. "
              }
            />
            <ServiceCard
              img={"/icons/blockchain.svg"}
              title={"WEB 3 Development"}
              desc={
                "Navigating the decentralized frontier. Web3 Developer exploring the limitless possibilities of blockchain."
              }
            />
            <ServiceCard
              img={"/icons/graphic.svg"}
              title={"Graphic Design"}
              desc={
                "Bringing visuals to life with a stroke of creativity. Graphic Designer transforming concepts into captivating art."
              }
            />
          </div>
        </div>
        <div className="mt-[30px]">
          <h1 className="font-bold text-2xl text-white text-left">My Skills</h1>
          <div className="underline w-[80px] h-[5px] rounded-full"></div>
          <div className="mt-[20px] ">
            <Skills />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
