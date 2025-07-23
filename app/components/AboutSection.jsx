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

      <div className="relative group rounded-xl w-full max-w-lg p-[5px] bg-gradient-to-br from-orange-300 via-yellow-300 to-pink-400 shadow-xl">
        <div className="flex flex-col bg-white dark:bg-[#0a0a0a] rounded-lg p-6 sm:p-8 text-gray-800 dark:text-gray-300 text-base sm:text-lg">
          <p>
            My journey in software engineering began in 2017 with a technical
            course in Information Technology, which helped me decide the path I
            wanted to follow.
            <br />
            <br />
            In 2024, I joined Rocketseat’s Explorer program, where I worked on
            real projects and learned to tackle everyday tech challenges through
            hands-on full-stack development.
            <br />
            <br />
            Lately, I’ve been focused on cloud technologies and how modern web
            apps are built. To apply this, I’ve been developing a personal
            project from scratch using AWS — gaining experience from setting up
            infrastructure to deploying the final application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
