"use client";
import React from "react";
import { motion } from "framer-motion"; // Ensure motion is imported for animation
import ProjectCard from "./ProjectCard";

// Define projects data outside the component for better readability and maintenance
const projectsData = [
  {
    id: 1,
    title: "Focus Timer",
    description:
      "A timer developed in JavaScript with dark/light mode and background music.",
    image: "/images/projects/focusTimer.png",
    gitUrl: "https://github.com/NataliaKals003/FocusTimer-2.0",
    previewUrl: "https://focus-timer-gray.vercel.app/",
  },
  {
    id: 2,
    title: "Photography Blog",
    description: "Developed with HTML and CSS for users to search images.",
    image: "/images/projects/photography-blog.png",
    gitUrl: "https://github.com/NataliaKals003/Photography-Blog",
  },
  {
    id: 3,
    title: "Galaxies",
    description: "List of galaxies project using HTML and CSS.",
    image: "/images/projects/Galaxies.png",
    gitUrl: "https://github.com/NataliaKals003/Galaxies",
    previewUrl: "/",
  },

  {
    id: 5,
    title: "Notes",
    description:
      "A note management application with ReactJS, Node.js, and SQL using Knex.js.",
    image: "/images/projects/notes.png",
    gitUrl: {
      frontend: "https://github.com/NataliaKals003/Notes.Frontend",
      backend: "https://github.com/NataliaKals003/Notes.Backend",
    },
  },
  {
    id: 6,
    title: "Movies",
    description:
      "A movie management app developed using ReactJS, Node.js, and SQL with Knex.js.",
    image: "/images/projects/movies.png",
    gitUrl: {
      frontend: "https://github.com/NataliaKals003/Movies.Frontend",
      backend: "https://github.com/NataliaKals003/Movies.Backend",
    },
    previewUrl: "https://rocketset-movies.netlify.app/",
  },
  {
    id: 7,
    title: "FoodExplorer",
    description:
      "A digital menu project developed with HTML, CSS, JavaScript, Node.js, and React.js.",
    image: "/images/projects/foodExplorer.png",
    gitUrl: {
      frontend: "https://github.com/NataliaKals003/FoodExplorer.Frontend",
      backend: "https://github.com/NataliaKals003/FoodExplorer.Backend",
    },
    previewUrl: "https://menu-foodexplorer.netlify.app/#/sign-up",
  },
];

const ProjectsSection = () => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-2xl lg:text-3xl pt-32 mb-10 sm:mt-32 sm:mb-16 uppercase tracking-[20px] text-black dark:text-white">
        Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-16 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
