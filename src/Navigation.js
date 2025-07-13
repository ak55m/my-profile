import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['home', 'experience', 'skills', 'projects', 'startup', 'research', 'contact'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="desktop-navigation">
        {navItems.map((item) => (
          <motion.button
            key={item}
            className={`nav-item ${activeSection === item ? 'active' : ''}`}
            onClick={() => handleNavClick(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.button>
        ))}
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className="mobile-navigation">
        <div className="mobile-nav-content">
          <div className="mobile-nav-brand">
            <h2>Portfolio</h2>
          </div>
          
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <motion.div 
          className="mobile-nav-dropdown"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item}
              className={`mobile-nav-item ${activeSection === item ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
              transition={{ delay: 0.1 }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation; 