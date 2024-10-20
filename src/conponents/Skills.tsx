"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import { IconCloud } from "./ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "git",
  "github",
  "tailwindcss",
  "nextdotjs",
  "cplusplus",
  "python",
  "vercel",
];

const skills = [
  {
    title: "React/Next.js",
    description: (
      <div className="leading-relaxed">
        I built some personal website using Next.js and React, which you can see{" "}
        <a href="/#projects" className="underline underline-offset-4">
          in the project section
        </a>
        . Also, I help built{" "}
        <a
          href="https://dreamle.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          dreamle.ai
        </a>{" "}
        at Company Decoda AI mainly with React and Next.js
      </div>
    ),
  },
  {
    title: "Typescript/Javascript",
    description: (
      <div className="leading-relaxed">
        I have a solid foundation in Typescript and Javascript, which is the main language I use for
        building web applications.
      </div>
    ),
  },
  {
    title: "HTML5/CSS3",
    description: (
      <div className="leading-relaxed">
        The basic of web development, I am comfortable with both functional and class-based
        components.
      </div>
    ),
  },
  {
    title: "Git/Github",
    description: (
      <div className="leading-relaxed">
        I am comfortable with the workflow of Git and Github and I often use it for collaborating
        with my team.
      </div>
    ),
  },
  {
    title: "TailwindCSS",
    description: (
      <div className="leading-relaxed">
        A modern CSS framework, which I often use for building responsive and beautiful website.
      </div>
    ),
  },
  {
    title: "Python",
    description: (
      <div className="leading-relaxed">
        I used Python for building some deep learning models. I made a dog-nose-detection model
        using Pytorch. I also want to use it to build some personal website for analyzing data.
      </div>
    ),
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="lg:mx-5 relative h-auto pt-[4vh] min-h-screen transition-transform duration-200 ease-in-out fade-in"
    >
      <p className=" text-center text-gray-400 text-2xl">Explore My</p>
      <h1 className="text-center text-black font-bold text-5xl">Skills</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="relative flex lg:w-1/2 w-full items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-8 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
        <HoverEffect items={skills} className="lg:w-1/2 w-full" />
      </div>
    </section>
  );
};

export default Skills;
