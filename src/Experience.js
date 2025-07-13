import React from 'react';
import { motion } from 'framer-motion';
import BankofAmerica from './img/BofA.png';
import TexasTechU from './img/TexasTech.png';
import Akeem from './img/akeem.jpeg';
import Leetcode from './img/leetcode.png';

const Experience = () => {
  const experiences = [
    {
      company: "Bank of America",
      logo: BankofAmerica,
      position: "Global Technology Summer Analyst Intern",
      duration: "June 2023 - August 2023",
      description: [
        "Collaborated on end-to-end ETL process with Data Technology team utilizing Autosys for efficient loading, monitored logs via secure SSH tunnel Putty Unix.",
        "Employed Teradata Studio for optimized data file management, enhancing storage efficiency.",
        "Validated cash advance and foreign check data in Teradata Studio (development mode) for quality.",
        "Executed targeted data visualization via SQL queries, ensuring high data quality in the ETL process."
      ]
    },
    {
      company: "Texas Tech ATLC",
      logo: TexasTechU,
      position: "Lead Student Technician III (previously II)",
      duration: "May 2020 - December 2023",
      description: [
        "Supervised 43 campus printers to ensure high uptime and proper functioning.",
        "Initiated the idea of having students work during the weekends to have necessary students during peak usage time.",
        "Collaborated on an inactivity script, automating user logout after a designated period of computer inactivity.",
        "Led team of 5 to supervise school computers, mobile laptops and computers daily."
      ]
    },
    {
      company: "Texas Tech Libraries",
      logo: TexasTechU,
      position: "Student Assistant Librarian",
      duration: "June 2019",
      description: [
        "Spearheaded the adoption of an optimized methodology for space allocation on bookshelves.",
        "Served daily traffic of up to 57 students at the front desk."
      ]
    }
  ];

  const projects = [
    {
      title: "E-commerce Website",
      logo: Akeem,
      description: "Node.js as backend and React.js as frontend.",
      link: "https://pearlocal.com"
    },
    {
      title: "Weather Application",
      logo: Akeem,
      description: "OpenWeather API as backend and React.js as frontend.",
      link: "https://akeem-weather-app.netlify.app"
    },
    {
      title: "LeetCode Exercises",
      logo: Leetcode,
      description: "These are some of my LeetCode exercises.",
      link: "https://akeem-mohammed.netlify.app"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Work Experience */}
      <motion.div className="section-container" variants={itemVariants}>
        <h2 className="section-title">Work Experience</h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="push_wrapper"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="push_box">
              <div className="push_content">
                <div className="push_top">
                  <div className="col">
                    <div className="push_imgwrap">
                      <img className="push_icon" src={exp.logo} alt={exp.company} />
                    </div>
                    <span className="push_title">{exp.company}</span>
                  </div>
                  <div className="col">
                    <div className="push_time">{exp.duration}</div>
                  </div>
                </div>
                <div className="push_main">
                  <div className="push_person">{exp.position}</div>
                  {exp.description.map((desc, i) => (
                    <p key={i} className="push_text">{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Personal Projects */}
      <motion.div className="section-container" variants={itemVariants}>
        <h2 className="section-title">Personal Projects</h2>
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index + 3) * 0.1 }}
          >
            <div className="push_wrapper">
              <div className="push_box">
                <div className="push_content">
                  <div className="push_top">
                    <div className="col">
                      <div className="push_imgwrap">
                        <img className="push_icon" src={project.logo} alt={project.title} />
                      </div>
                      <span className="push_title">{project.title}</span>
                    </div>
                    <div className="col">
                      <div className="push_time">Click to view</div>
                    </div>
                  </div>
                  <div className="push_main">
                    <div className="push_person">{project.title}</div>
                    <p className="push_text">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
