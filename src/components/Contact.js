// src/components/Contact.js

import React from "react";
// import { MailIcon } from "@heroicons/react/solid";
//import { LinkedinIcon, GithubIcon } from '@heroicons/react/solid';

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          /> */}
              {/* Replace the iframe with an img element */}
          <img
              src="./isometric_nobg.png" // Replace with the path to your image
              alt="Isometric_image" // Provide a brief description of the image for accessibility
              className="w-full h-auto" // This will make the image cover the entire container
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            
          </div>
        </div>


        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          
          
            <h4 className="text-white sm:text-4xl text-3xl mb-4 font-medium title-font">
                My Contacts
            </h4>
          
            <a href="datamech@springnuance.com" className="text-indigo-400 leading-relaxed flex items-center text-lg mb-3">
              <img src="./icons/gmail.svg" alt="Mail Icon" className="h-8 w-8 mr-3 mb-1" />
              <span className="underline">datamech@springnuance.com</span>
            </a>
      
            <a href="https://www.linkedin.com/in/xuanbinh/" className="text-indigo-400 leading-relaxed flex items-center text-lg mb-3">
              <img src="./icons/linkedin.svg" alt="Linkedin Icon" className="h-8 w-8 mr-3 mb-1" />
              <span className="underline">https://www.linkedin.com/in/xuanbinh/</span>
            </a>

            <a href="https://github.com/SpringNuance" className="text-indigo-400 leading-relaxed flex items-center text-lg mb-3">
              <img src="/icons/github.svg" alt="GitHub Icon" className="h-8 w-8 mr-3 mb-1" />
              <span className="underline">https://github.com/SpringNuance</span>
            </a>
          
          <br></br>
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            If you wish to have me as part of your team, don't hesitate to drop me a message! I am open to any opportunities and collaborations <span role="img" aria-label="smiley face"> 😊 </span>
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}