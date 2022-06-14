import React from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiStrapi,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <div id="skills" className="my-32">
      <h1 className="font-press-start-2P mb-8 text-red-600 text-xl md:text-3xl">
        Skills.
      </h1>
      <p className="font-press-start-2P text-xs md:text-base mb-16">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
        perspiciatis!
      </p>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="grid grid-cols-5 gap-8">
          <SiJavascript className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiHtml5 className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiCss3 className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiReact className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <TbBrandNextjs className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiNodedotjs className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiExpress className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiMongodb className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiTailwindcss className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiRedux className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiStrapi className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiFigma className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiGit className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
          <SiGithub className="text-4xl md:text-7xl cursor-pointer hover:-translate-y-2 transition-all hover:text-red-600" />
        </div>
        <img
          src="/skills.gif"
          alt="skills_gif"
          className="w-96 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Skills;
