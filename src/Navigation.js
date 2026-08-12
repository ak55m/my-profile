import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaBriefcase, FaCode, FaEnvelope, FaFlask, FaGithub, FaHome, FaLightbulb, FaTools } from 'react-icons/fa';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 'home', icon: <FaHome /> },
    { id: 'research', icon: <FaFlask /> },
    { id: 'github', icon: <FaGithub /> },
    { id: 'experience', icon: <FaBriefcase /> },
    { id: 'skills', icon: <FaCode /> },
    { id: 'technologies', icon: <FaTools /> },
    { id: 'startup', icon: <FaLightbulb /> },
    { id: 'contact', icon: <FaEnvelope /> }
  ];
  const select = (section) => { setActiveSection(section); setIsOpen(false); };

  return <>
    <nav className="desktop-navigation" aria-label="Portfolio navigation">
      <button className="nav-brand" onClick={() => select('home')} aria-label="Go to home">AM<span>.</span></button>
      <div className="nav-links">{navItems.map(({ id, icon }) => <button key={id} className={`nav-item ${activeSection === id ? 'active' : ''}`} onClick={() => select(id)}><small aria-hidden="true">{icon}</small>{id}</button>)}</div>
      <a className="nav-contact" href="mailto:akeemmohammedutdedu@gmail.com">Let’s talk <span>↗</span></a>
    </nav>
    <nav className="mobile-navigation" aria-label="Mobile portfolio navigation">
      <button className="nav-brand" onClick={() => select('home')}>AM<span>.</span></button>
      <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation">{isOpen ? <FaTimes /> : <FaBars />}</button>
      <motion.div className="mobile-nav-dropdown" initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}>
        {navItems.map(({ id, icon }) => <button key={id} className={`mobile-nav-item ${activeSection === id ? 'active' : ''}`} onClick={() => select(id)}><span aria-hidden="true">{icon}</span>{id}</button>)}
      </motion.div>
    </nav>
  </>;
};

export default Navigation;
