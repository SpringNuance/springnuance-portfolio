// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";


export default function Skills() {
  
  const dataskills = [
    {
      name: "Python",
      icon: "icons/python.svg",
    },
    {
      name: "R studio",
      icon: "icons/r-lang.svg",
    },
    {
      name: "Scala",
      icon: "icons/scala.svg",
    },
    {
      name: "PostgreSQL",
      icon: "icons/postgresql.svg",
    },
    {
      name: "MySQL",
      icon: "icons/mysql.svg",
    },
    {
      name: "MongoDB",
      icon: "icons/mongodb.svg",
    },

  ];
  
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-3">
          <ChipIcon className="w-10 inline-block mb-3" /> Skills &amp; Softwares
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I have experience in the following:
          </p> */}
        </div>

        <h2 className="text-xl font-semibold mb-2 text-center flex items-center justify-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          Data Analytics Skills
        </h2>

        <div className="bg-white h-0.5 w-4/5 mx-auto mb-4"></div>

        <div className="grid grid-cols-4 gap-2 lg:w-4/5 sm:mx-auto sm:mb-2">
          {dataskills.map((skill) => (
            <div key={skill} className="p-2">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img src={skill.icon} alt={skill.icon} className="w-6 h-6 flex-shrink-0 mr-4" />
                {/* <skill.icon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-2 text-center flex items-center justify-center mt-10">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          Mechanical Engineering Skills
        </h2>

        <div className="bg-white h-0.5 w-4/5 mx-auto mb-4"></div>

        <div className="grid grid-cols-3 gap-4 lg:w-4/5 sm:mx-auto sm:mb-2">
          {dataskills.map((skill) => (
            <div key={skill} className="p-2">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img src={skill.icon} alt={skill.icon} className="w-6 h-6 flex-shrink-0 mr-4" />
                {/* <skill.icon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}