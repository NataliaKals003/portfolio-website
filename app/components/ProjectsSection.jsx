"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "TMS-CRM",
    description:
      "A CRM web application built from scratch and deployed to production. Used technologies like React, API Gateway, Lambda, Cognito, Infrastructure as Code, automated testing, CI/CD, and more.",
    image: "/images/projects/tmsCRM.png",
    gitUrl:
      "https://medium.com/@nataliakals03/exploring-software-engineering-my-journey-building-a-web-application-from-scratch-b81e56326cb9",
  },
  {
    id: 2,
    title: "FoodExplorer",
    description:
      "A digital menu project developed with HTML, CSS, JavaScript, Node.js, and React.js.",
    image: "/images/projects/foodExplorer.png",
    gitUrl: {
      frontend: "https://github.com/NataliaKals003/FoodExplorer.Frontend",
      backend: "https://github.com/NataliaKals003/FoodExplorer.Backend",
    },
  },
  {
    id: 3,
    title: "Movies",
    description:
      "A movie management app developed using ReactJS, Node.js, and SQL with Knex.js.",
    image: "/images/projects/movies.png",
    gitUrl: {
      frontend: "https://github.com/NataliaKals003/Movies.Frontend",
      backend: "https://github.com/NataliaKals003/Movies.Backend",
    },
  },
  {
    id: 4,
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
    id: 5,
    title: "Galaxies",
    description: "List of galaxies project using HTML and CSS.",
    image: "/images/projects/Galaxies.png",
    gitUrl: "https://github.com/NataliaKals003/Galaxies",
  },
  {
    id: 6,
    title: "Focus Timer",
    description:
      "A timer developed in JavaScript, HTML and CSS with background music.",
    image: "/images/projects/focusTimer.png",
    gitUrl: "https://github.com/NataliaKals003/FocusTimer-2.0",
    previewUrl: "https://focus-timer-gray.vercel.app/",
  },
  {
    id: 7,
    title: "Photography Blog",
    description: "Developed with HTML and CSS for users to search images.",
    image: "/images/projects/photography-blog.png",
    gitUrl: "https://github.com/NataliaKals003/Photography-Blog",
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
