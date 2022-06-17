import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="mt-32">
      <h1 className="font-press-start-2P text-red-600 text-xl md:text-3xl">
        About me.
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mx-4">
        <div>
          <p className="font-press-start-2P text-xs md:text-base md:mr-8 my-4 text-justify">
            Hi I am Sayan Munshi, a budding Fullstack Developer. I am currently
            pursuing my <span className="text-red-600">B.Tech</span> Degree on{" "}
            <span className="text-red-600">Information Technology</span> from{" "}
            <span className="text-red-600">
              Institute of Engineering and Management, Kolkata
            </span>
            .
          </p>
          <p className="font-press-start-2P text-xs md:text-base md:mr-8 my-4 text-justify">
            I am looking for opportunities to work on the industry. I am really
            passionate about the Web and its technologies{" "}
          </p>
        </div>
        <img
          src="./pic.jpg"
          alt="pic"
          className="w-40 md:w-64 my-4 ml-2 rounded-full"
        />
      </div>
      <div className="flex items-center justify-center md:justify-start md:items-start">
        <a
          href="https://github.com/SayanMunshi-blank36"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="mx-2 text-2xl md:text-4xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
        <a href="https://twitter.com/blank_36" target="_blank" rel="noreferrer">
          <FaTwitter className="mx-2 text-2xl md:text-4xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
        <a
          href="https://www.instagram.com/sayanmunshi36/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="mx-2 text-2xl md:text-4xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
        <a
          href="https://www.linkedin.com/in/sayan-munshi-714a401b8/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="mx-2 text-2xl md:text-4xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
        <a
          href="mailto:sayanmunshi36@gmil.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="mx-2 text-2xl md:text-4xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
      </div>
    </div>
  );
};

export default About;
