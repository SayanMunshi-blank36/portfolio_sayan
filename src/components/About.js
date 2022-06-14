import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="mt-32">
      <h1 className="font-press-start-2P text-red-600 text-xl md:text-3xl">
        About me.
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mx-4">
        <p className="font-press-start-2P text-xs md:text-base md:mr-8 my-4 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          reprehenderit eveniet fugit autem suscipit recusandae labore tempora
          natus ea nobis dolores quibusdam vitae temporibus mollitia dicta
          cupiditate quam rem! Ratione.
        </p>
        <img
          src="./pic.jpg"
          alt="pic"
          className="w-40 md:w-64 my-4 ml-2 rounded-full"
        />
      </div>
      <div className="flex items-center justify-center md:justify-start md:items-start">
        <FaTwitter className="mx-2 text-2xl md:text-4xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        <FaInstagram className="mx-2 text-2xl md:text-4xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        <FaLinkedin className="mx-2 text-2xl md:text-4xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
        <FaEnvelope className="mx-2 text-2xl md:text-4xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all" />
      </div>
    </div>
  );
};

export default About;
