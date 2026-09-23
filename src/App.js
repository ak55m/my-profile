import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';
import './styles/design.css';
import './styles/portfolio.css';
import Owner from './Owner';
import Experience from './Experience';
import Skills from './Skills';
import Technologies from './Technologies';
import Startup from './Startup';
import Research from './Research';
import Contact from './Contact';
import Navigation from './Navigation';
import Github from './Github';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);
  
  const sections = {
    home: <Owner />,
    experience: <Experience />,
    skills: <Skills />,
    technologies: <Technologies />,
    startup: <Startup />,
    research: <Research />,
    github: <Github />,
    contact: <Contact />
  };

  return (
    <div className={`portfolio-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} setTheme={setTheme} />
      
      <motion.div 
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="content-section"
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {sections[activeSection]}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
