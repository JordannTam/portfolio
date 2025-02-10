import React from 'react';
import Skills from '@/components/sections/skills';
import Header from '@/components/sections/header';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import { Separator } from '@radix-ui/react-dropdown-menu';

const Portfolio = () => {


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent p-8 transition-colors duration-300">
      {/* Header Section */}
      <Header />
      {/* Skills Section */}
      <Skills />
      {/* Experience Section */}
      <Experience />
      {/* Projects Section */}
      <Projects />
      <Separator />
      {/* Contact Section */}
      <Contact />
      <footer className="text-left mx-10 text-gray-500 dark:text-gray-400 mt-32">
        <p>© 2025. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;