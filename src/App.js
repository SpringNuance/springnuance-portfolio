// src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import DataProjects from "./components/DataProjects";
import MechProjects from "./components/MechProjects";

//import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Experience />
      <DataProjects />
      <MechProjects />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}