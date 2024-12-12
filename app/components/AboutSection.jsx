import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full w-full text-center text-2xl lg:text-3xl text-white px-4 sm:px-8 lg:px-16"
    >
      <div className="pt-32 pb-6 sm:pt-27 sm:pb-6 sm:mt-6">
        <h3 className="uppercase tracking-[20px]  text-black dark:text-white">
          ABOUT
        </h3>
      </div>

      <div className="relative group rounded-xl w-full max-w-4xl p-[4px] bg-gradient-to-br from-orange-300 via-yellow-300 to-pink-400 shadow-xl">
        <div className="flex flex-col bg-[#ffffff] dark:bg-[#0a0a0a]  rounded-lg p-6 sm:p-10 text-gray-200">
          <h4 className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-black dark:text-gray-300">
            My journey in software engineering began with a technical course in
            Information Technology in 2017, which gave me an idea and helped me
            decide on the path I wanted to follow in my career. In March 2024, I
            fully immersed myself in full-stack development by joining
            Rocketseat’s Explorer program. There, I had the opportunity to work
            on real projects, tackling everyday challenges and learning how to
            solve problems in the tech world. This experience has helped me
            develop a practical and creative approach to building applications.
            I’m always eager to learn new things and take on exciting challenges
            — feel free to reach out!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
