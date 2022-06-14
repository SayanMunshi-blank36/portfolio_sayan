import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <a
          href="https://github.com/SayanMunshi-blank36"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="mx-2 text-xl md:text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
        <a href="https://twitter.com/blank_36" target="_blank" rel="noreferrer">
          <FaTwitter className="mx-2 text-xl md:text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
        <a
          href="https://www.instagram.com/sayanmunshi36/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="mx-2 text-xl md:text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
        <a
          href="https://www.linkedin.com/in/sayan-munshi-714a401b8/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="mx-2 text-xl md:text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
        <a
          href="mailto:sayanmunshi36@gmil.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="mx-2 text-xl md:text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 font-press-start-2P">
        <p className="text-xs md:text-base text-justify">Thanks For Visiting</p>
        <p className="text-xs md:text-base text-justify">&copy; Sayan Munshi</p>
      </div>
      <img
        src="/pikachu_gif.gif"
        alt="pikachu gif"
        className="mx-auto mb-2 w-20"
      />
    </div>
  );
};

export default Footer;
