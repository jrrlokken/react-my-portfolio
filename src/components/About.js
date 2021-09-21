import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container flex flex-col items-center px-10 py-20 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
            Hi, I'm Joshua.
          </h1>
          <h2 className="mb-4 text-2xl font-medium text-white title-font sm:text-3xl">
            I love to design and build software.
          </h2>
          <p className="mb-8 leading-relaxed">
            I have added software development to my skill set after being a
            hobbyist for years. I am an experienced Information Technology
            specialist and bring a critical eye to the development space.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="inline-flex px-6 py-2 ml-4 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
