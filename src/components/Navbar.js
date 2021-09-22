import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Resume from "./Resume";

export default function Navbar() {
  return (
    <header className="top-0 z-10 bg-gray-800 md:sticky">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <div className="mb-4 font-medium text-white title-font md:mb-0">
          <a href="#about" className="ml-3 text-2xl">
            Joshua Lokken
          </a>
        </div>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          {/* <a
            href="https://drive.google.com/file/d/1n7NkMw8VqclIcWj_i3XjK4au4WMS1w0R/view?usp=sharing"
            className="mr-5 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a> */}
          <Resume />
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0 hover:text-white"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
