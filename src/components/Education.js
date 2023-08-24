// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";
import { AcademicCapIcon } from "@heroicons/react/outline";

import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
        
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-3">
           <AcademicCapIcon className="w-10 inline-block mb-3" /> &nbsp; My Education
          </h1>
          <p className="text-base leading-relaxed xl:w-3/5 lg:w-3/5 mx-auto text-center">
            My diverse educational background has given me a thorough perspective on problem solving skills.
          </p>
        </div>
        
        <div class="container mx-auto space-y-6 h-3/5 w-3/5 md:w-3/5 lg:w-3/5 md:h-3/5 lg:h-3/5">

          {/* <!-- Master's Box --> */}
          <div class="bg-red-500 p-6 rounded-lg shadow-md border-4 border-green-500">
            <h4 class="text-xl font-semibold text-white mb-4">
              Master of Science: Computer, Communication and Information Sciences
            </h4>
            <p class="text-white mb-2 flex items-center">
              <img src="/icons/aalto_univ.png" alt="Aalto University Logo" class="w-15 h-10 mr-2"></img>
              Aalto University, Espoo, Finland. Attended: 2023-2025
            </p>
            <p class="text-white mb-2 flex items-center">
              Major: Machine Learning, Data Science &amp; AI &nbsp; | &nbsp; Minor: Mechanical Engineering
            </p>
          </div>

          {/*           
          <div class="p-6 rounded-lg shadow-md flex items-center">
            <img src="/icons/aalto_univ.png" alt="Master University Logo" class="w-28 h-24 mr-4 bg-white border-4 border-green-500 rounded"></img>
            <div class="bg-blue-500 rounded-lg shadow-md p-4"> 
              <h3 class="text-2xl font-semibold text-white mb-4">Master of Science in [Your Field]</h3>
              <p class="text-white mb-2">[University Name], [Location]</p>
              <p class="text-white">Graduated: [Year]</p>
            </div>
          </div> */}


          {/* <!-- Bachelor's Box --> */}
          <div class="bg-purple-500 p-6 rounded-lg shadow-md border-4 border-green-500">
            <h3 class="text-xl font-semibold text-white mb-4">Bachelor of Science: Computational Engineering</h3>
            <p class="text-white mb-2 flex items-center">
              <img src="/icons/aalto_univ.png" alt="Aalto University Logo" class="w-15 h-10 mr-2"></img>
              Aalto University, Espoo, Finland. Attended: 2020-2023
            </p>
            <p class="text-white mb-2 flex items-center">
              Major: Mechanical &amp; Civil Engineering &nbsp; | &nbsp; Minor: Computer &amp; Data Science 
            </p>
          </div>
          

          {/* <!-- Bachelor's Box --> */}
          <div class="bg-blue-500 p-6 rounded-lg shadow-md border-4 border-green-500">
            <h3 class="text-xl font-semibold text-white mb-4">Bachelor of Business Administration</h3>
            <p class="text-white mb-2 flex items-center">
              <img src="/icons/apu_univ.jpg" alt="Aalto University Logo" class="w-18 h-12 mr-2"></img>
              Asia Pacific University, Oita, Japan. Attended: 2018-2019
            </p>
            <p class="text-white mb-2 flex items-center">
              Major: Accounting &nbsp; | &nbsp; Minor: Economics
            </p>
          </div>

        </div>


      </div>
    </section>
  );
}