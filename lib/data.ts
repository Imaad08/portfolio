import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import flippymazeImg from "@/public/flippymaze.png";
import stocksImg from "@/public/stocks.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "San Diego, CA",
    description:
      "I graduated a code bootcamp that taught me the basics of JavaScript, Lua, and C# game development",
    icon: React.createElement(LuGraduationCap),
    date: "Early 2022",
  },
  {
    title: "Front-End Developer",
    location: "San Diego, CA",
    description:
      "I worked as a front-end developer for clubs at my school",
    icon: React.createElement(CgWorkAlt),
    date: "Mid 2022   ",
  },
  {
    title: "Full-Stack Developer",
    location: "San Diego, CA",
    description:
      "I started learning full stack website development with Next Js and am able to create full stack websites",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Flippy Maze",
    description:
      "A 2D based maze game created in Unity game engine and deployed on Github",
    tags: ["Unity", "C#", "Github"],
    imageUrl: flippymazeImg,
  },
  {
    title: "Stocks Analyzer",
    description:
      "Stock Analyzer with multiple tools to help investors which I played a large role in co-developing. Includes Python backend and HTML frontend",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    imageUrl: stocksImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Unity",
  "Flask",
  "C#",
  "Lua",
  "Blender",
  "Python",
  "Framer Motion",
] as const;
