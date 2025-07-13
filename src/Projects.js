import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React.js frontend and Node.js backend. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
      liveLink: "https://pearlocal.com",
      githubLink: "#",
      image: "https://via.placeholder.com/300x200/667eea/ffffff?text=E-commerce"
    },
    {
      title: "Weather Application",
      description: "A responsive weather app that provides real-time weather information using OpenWeather API. Features include location-based weather, 5-day forecast, and beautiful UI design.",
      technologies: ["React.js", "OpenWeather API", "CSS3", "Responsive Design"],
      liveLink: "https://akeem-weather-app.netlify.app",
      githubLink: "#",
      image: "https://via.placeholder.com/300x200/764ba2/ffffff?text=Weather+App"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing my skills, experience, and projects. Built with React.js and featuring smooth animations and professional design.",
      technologies: ["React.js", "Framer Motion", "CSS3", "Responsive Design"],
      liveLink: "https://akeemmohammed.netlify.app",
      githubLink: "https://github.com/ak55m/my-profile",
      image: "https://via.placeholder.com/300x200/667eea/ffffff?text=Portfolio"
    },
    {
      title: "LeetCode Solutions",
      description: "A collection of my LeetCode problem solutions with detailed explanations and optimized approaches. Demonstrates problem-solving skills and algorithmic thinking.",
      technologies: ["JavaScript", "Python", "Java", "Algorithms", "Data Structures"],
      liveLink: "https://akeem-mohammed.netlify.app",
      githubLink: "#",
      image: "https://via.placeholder.com/300x200/764ba2/ffffff?text=LeetCode"
    },
    {
      title: "Bank of America ETL Project",
      description: "Developed end-to-end ETL processes using Autosys, Teradata Studio, and SQL. Implemented data validation and visualization for cash advance and foreign check data.",
      technologies: ["SQL", "Teradata", "Autosys", "ETL", "Data Visualization"],
      liveLink: "#",
      githubLink: "#",
      image: "https://via.placeholder.com/300x200/667eea/ffffff?text=ETL+Project"
    },
    {
      title: "Texas Tech ATLC Management System",
      description: "Led development of automation scripts and management systems for campus IT infrastructure. Supervised 43 printers and managed computer lab operations.",
      technologies: ["Python", "Automation", "System Administration", "Team Leadership"],
      liveLink: "#",
      githubLink: "#",
      image: "https://via.placeholder.com/300x200/764ba2/ffffff?text=ATLC+System"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="section-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.liveLink !== "#" && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.githubLink !== "#" && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects; 