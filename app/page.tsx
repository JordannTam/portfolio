import React from 'react';
import Skills from '@/components/sections/skills';
import Header from '@/components/sections/header';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';

const Portfolio = () => {


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy p-8 transition-colors duration-300">
      {/* Header Section */}
      <Header id="header" />
      {/* Skills Section */}
      <Skills id="skills" />
      {/* Experience Section */}
      <Experience id="experience" />
      {/* Projects Section */}
      <Projects id="projects" />
    </div>
  );
};

export default Portfolio;