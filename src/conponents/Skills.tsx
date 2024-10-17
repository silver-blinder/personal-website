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
    description:
      "I have a solid foundation in React and Next.js, having built several projects using these technologies. I am comfortable with both functional and class-based components, and I have experience with React Hooks, Context API, and React Router.",
  },
  {
    title: "Typescript/Javascript",
    description:
      "I have a solid foundation in Typescript and Javascript, having built several projects using these technologies. I am comfortable with both functional and class-based components, and I have experience with React Hooks, Context API, and React Router.",
  },
  {
    title: "HTML5/CSS3",
    description:
      "I have a solid foundation in HTML5 and CSS3, having built several projects using these technologies. I am comfortable with both functional and class-based components, and I have experience with React Hooks, Context API, and React Router.",
  },
  {
    title: "Git/Github",
    description:
      "I have a solid foundation in Git and Github, having built several projects using these technologies. I am comfortable with both functional and class-based components, and I have experience with React Hooks, Context API, and React Router.",
  },
  {
    title: "TailwindCSS",
    description:
      "I have a solid foundation in TailwindCSS, having built several projects using these technologies. I am comfortable with both functional and class-based components, and I have experience with React Hooks, Context API, and React Router.",
  },
  {
    title: "Python",
    description:
      "I have a solid foundation in Python, having built several projects using these technologies. I am comfortable with both functional and class-based components, and I have experience with React Hooks, Context API, and React Router.",
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
        <div className="relative flex lg:w-1/2 w-full items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
        <HoverEffect items={skills} className="lg:w-1/2 w-full" />
      </div>
    </section>
  );
};

export default Skills;
