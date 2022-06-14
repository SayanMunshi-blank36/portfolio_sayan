import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <FaTwitter className="mx-2 text-xl md:text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        <FaInstagram className="mx-2 text-xl md:text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        <FaLinkedin className="mx-2 text-xl md:text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        <FaEnvelope className="mx-2 text-xl md:text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
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
