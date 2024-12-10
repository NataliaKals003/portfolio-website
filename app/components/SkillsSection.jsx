import React, { useEffect, useState } from "react";

const SkillsSection = () => {
  const tags = [
    { name: "JavaScript", img: "/images/js.jpg" },
    { name: "HTML", img: "/images/html.jpg" },
    { name: "CSS", img: "/images/css.jpg" },
    { name: "TypeScript", img: "/images/typescript.png" },
    { name: "NextJS", img: "/images/nextjs.jpg" },
    { name: "Tailwind", img: "/images/tailwind.jpg" },
    { name: "NodeJS", img: "/images/node.jpg" },
    // { name: "Firebase", img: "/images/firebase.jpg" },
    { name: "React", img: "/images/react.jpg" },
  ];

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <section className="flex flex-col items-center justify-center h-full w-full text-center text-2xl lg:text-3xl text-white px-4 sm:px-8 lg:px-16">
      <div className="pt-32 pb-10 sm:pt-32 sm:pb-16 sm:mt-6">
        <h3 className="uppercase tracking-[20px] text-black dark:text-white">
          SKILLS
        </h3>
      </div>

      <div className="relative flex flex-wrap justify-center gap-6">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`tag-container transform transition-transform duration-500 ${
              hasScrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={tag.img}
              alt={tag.name}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg shadow-md object-cover"
            />
            <p className="text-sm mt-2 text-black dark:text-gray-300">
              {tag.name}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tag-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tag-container:hover {
          transform: scale(1.1) translateZ(10px);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
