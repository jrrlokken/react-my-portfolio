import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Resume from "./Resume";

export default function Navbar() {
  return (
    <header className="top-0 bg-gray-800 z-100 md:sticky">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <div className="mb-4 font-medium text-white title-font md:mb-0">
          <a href="#about" className="ml-3 text-2xl">
            Joshua Lokken
          </a>
        </div>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
          <div>
            <a href="#projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
          </div>
          <div>
            <button
              href="https://github.com/jrrlokken"
              className="mr-5 hover:text-white"
            >
              Github
            </button>
          </div>
          <Resume />
        </nav>
      </div>
    </header>
  );
}
