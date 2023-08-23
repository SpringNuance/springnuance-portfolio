// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Spring Nuance. 
            <br className="hidden lg:inline-block" /> I work with data analytics and mechanical engineering.  
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            I am specialized in blending the analytical prowess of data science with the hands-on practicality of mechanical engineering to address interdisciplinary problems.
            My hobbies include digital art, 3D printing, playing piano and chess
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="w-64 h-64 object-cover object-center rounded"
            alt="profile_picture"
            src="./profile_picture.png"
          />
        </div>
      </div>
    </section>
  );
}