import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaBriefcase, FaCode, FaEnvelope, FaFlask, FaGithub, FaHome, FaLightbulb, FaRobot, FaTools } from 'react-icons/fa';

const Navigation = ({ activeSection, setActiveSection, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
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
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    let previousY = window.scrollY;
    const updateHeader = () => {
      const currentY = window.scrollY;
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
      const atPageEnd = maxScrollY > 0 && currentY >= maxScrollY - 4;
      if (currentY <= 32 || atPageEnd) {
        setIsCompact(false);
        setScrollDirection('up');
        previousY = currentY;
      } else if (Math.abs(currentY - previousY) > 4) {
        const scrollingDown = currentY > previousY;
        setScrollDirection(scrollingDown ? 'down' : 'up');
        setIsCompact(true);
        previousY = currentY;
      }
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return <>
    <nav className={`desktop-navigation ${isCompact ? 'is-compact' : ''} scroll-${scrollDirection}`} aria-label="Portfolio navigation">
      <div className="nav-header"><button className="nav-brand" onClick={() => select('home')} aria-label="Go to home" title="Home"><FaRobot /></button></div>
      <div className="nav-links">{navItems.map(({ id, icon }) => <button key={id} className={`nav-item ${activeSection === id ? 'active' : ''}`} onClick={() => select(id)}><small aria-hidden="true">{icon}</small>{id}</button>)}</div>
      <div className="nav-footer">
        <button className="theme-toggle icon-only" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span></button>
        <a className="nav-contact" href="mailto:akeemmohammedutdedu@gmail.com">Let’s talk <span>↗</span></a>
      </div>
    </nav>
    <nav className={`mobile-navigation ${isCompact ? 'is-compact' : ''} ${isOpen ? 'is-open' : ''} scroll-${scrollDirection}`} aria-label="Mobile portfolio navigation">
      <button className="nav-brand" onClick={() => select('home')} aria-label="Go to home" title="Home"><FaRobot /></button>
      <div className="mobile-actions"><button className="theme-toggle icon-only" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? '☀️' : '🌙'}</button><button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label="Toggle navigation">{isOpen ? <FaTimes /> : <FaBars />}</button></div>
      <motion.div className="mobile-nav-dropdown" initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}>
        {navItems.map(({ id, icon }) => <button key={id} className={`mobile-nav-item ${activeSection === id ? 'active' : ''}`} onClick={() => select(id)}><span aria-hidden="true">{icon}</span>{id}</button>)}
      </motion.div>
    </nav>
  </>;
};

export default Navigation;
