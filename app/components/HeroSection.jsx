"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-24 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-gray-900 dark:text-white  mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={["Natália", 1500, "Web Developer", 1500]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="dark:text-[#ADB7BE] text-black text-base sm:text-lg mb-6 lg:text-xl">
            Passionate to learn new technologies, with a curious mind and a
            constant learning attitude.
          </p>
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => (window.location.href = "#contact")}
            >
              Hire Me
            </button>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() =>
                window.open("/documents/CV-Natália Kals.pdf", "_blank")
              }
            >
              View My CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative overflow-hidden">
            <Image
              src="/images/portfolio-image.jpeg"
              alt="profile image"
              className="absolute rounded-full inset-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
