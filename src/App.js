import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';
import './styles/design.css';
import './styles/portfolio.css';
import Owner from './Owner';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Startup from './Startup';
import Research from './Research';
import Contact from './Contact';
import Navigation from './Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = {
    home: <Owner />,
    experience: <Experience />,
    skills: <Skills />,
    projects: <Projects />,
    startup: <Startup />,
    research: <Research />,
    contact: <Contact />
  };

  return (
    <div className="portfolio-container">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
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
