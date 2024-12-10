"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import React, { useState, useEffect } from "react";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);

    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container mt:24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
