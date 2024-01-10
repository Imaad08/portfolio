"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a sophmore at Del Norte High School. I am currently taking three AP courses and am the president of Coding4Kidz where we teach younger children the basics of coding languages inluding Scratch, Python, and Java. I am also in the process of starting a second club and I am involved with many other clubs such as Robotics, STEM volunteer groups, and a hackathon club. I am also working with another high school student to create a startup.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and hanging out with friends. I also enjoy{" "}
        <span className="font-medium">learning and applying new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">how to design robots for my robotics team with CAD softwares like OnShape</span>. 
      </p>
    </motion.section>
  );
}
