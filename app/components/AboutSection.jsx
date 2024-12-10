import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full text-center text-2xl lg:text-3xl text-white px-4 sm:px-8 lg:px-16">
      <div className="pt-32 pb-6 sm:pt-27 sm:pb-6 sm:mt-6">
        <h3 className="uppercase tracking-[20px]  text-black dark:text-white">
          ABOUT
        </h3>
      </div>

      <div className="relative group rounded-xl w-full max-w-4xl p-[4px] bg-gradient-to-br from-orange-300 via-yellow-300 to-pink-400 shadow-xl">
        <div className="flex flex-col bg-[#ffffff] dark:bg-[#0a0a0a]  rounded-lg p-6 sm:p-10 text-gray-200">
          <h4 className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-black dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            praesentium nihil impedit qui unde natus voluptates veritatis neque,
            magni ullam? Qui atque unde sequi quo quam repellat facere at
            laboriosam!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
