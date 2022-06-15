import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import "react-simple-typewriter/dist/index";

const Header = () => {
  const words = [
    "Frontend Development",
    "Web Development",
    "Backend Development",
  ];
  const { text } = useTypewriter({
    words,
    loop: 0,
  });

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <img
        src="/header_gif.gif"
        alt="header_gif"
        className="w-40 md:w-52 mb-20"
      />
      <h1 className="font-press-start-2P text-2xl md:text-4xl mb-4 text-red-600">
        Sayan Munshi
      </h1>
      <p className="font-press-start-2P my-4 flex text-[0.6rem] md:text-base">
        I am into <span className="ml-4">{text}</span> <Cursor />
      </p>
      <a href="/Sayan_Resume.pdf" target="_blank" rel="noreferrer">
        <button className="font-press-start-2P text-xs md:text-sm my-4 border-2 border-red-500 p-2 md:p-3 rounded-md hover:bg-red-500 hover:text-white transition-all">
          My Resume
        </button>
      </a>
    </div>
  );
};

export default Header;
