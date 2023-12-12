"use client";
import About from "@/Components/About/About";
import Awards from "@/Components/Awards/Awards";
import Contact from "@/Components/Contact/Contact";
import Experience from "@/Components/Experience/Experience";
import Hero from "@/Components/Header/Hero";
import Nav from "@/Components/Nav/Nav";
import Projects from "@/Components/Projects/Projects";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("About");
  return (
    <main>
      <section id="hero" className=" h-screen">
        <Hero  setActive={setActive} />
      </section>
      <section className="min-h-screen relative">
        <Nav active={active} setActive={setActive} />
        <section className="mt-[100px]" id="main">
          {active === "About" ? (
            <About />
          ) : active === "Awards" ? (
            <Awards />
          ) : active === "Experience" ? (
            <Experience />
          ) : active === "Projects" ? (
            <Projects />
          ) : active === "Contact" ? (
            <Contact />
          ) : null}
        </section>
      </section>
    </main>
  );
}
