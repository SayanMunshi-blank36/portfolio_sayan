import React from "react";

const Navbar = () => {
  return (
    <nav className="mx-auto my-6 font-press-start-2P text-xs">
      <ul className="flex flex-wrap items-center justify-center">
        <li className="mx-3 my-2 cursor-pointer hover:scale-125 transition-all hover:text-red-600">
          <a href="/">Home</a>
        </li>
        <li className="mx-3 my-2 cursor-pointer hover:scale-125 transition-all hover:text-red-600">
          <a href="#about">About</a>
        </li>
        <li className="mx-3 my-2 cursor-pointer hover:scale-125 transition-all hover:text-red-600">
          <a href="#skills">Skills</a>
        </li>
        <li className="mx-3 my-2 cursor-pointer hover:scale-125 transition-all hover:text-red-600">
          <a href="#projects">Projects</a>
        </li>
        <li className="mx-3 my-2 cursor-pointer hover:scale-125 transition-all hover:text-red-600">
          <a href="#experience">Experience</a>
        </li>
        <li className="mx-3 my-2 cursor-pointer hover:scale-125 transition-all hover:text-red-600">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
