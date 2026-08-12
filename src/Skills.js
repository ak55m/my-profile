import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaJava, 
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaTerminal,
  FaCode,
  FaServer,
  FaCuttlefish,
  FaFileCode
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiMysql, 
  SiPostgresql, 
  SiFirebase,
  SiPhp,
  SiNgrok,
  SiDigitalocean,
  SiTeradata,
  SiJira
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact />, level: 'Advanced' },
    { name: 'JavaScript', icon: <FaJs />, level: 'Advanced' },
    { name: 'Python', icon: <FaPython />, level: 'Primary' },
    { name: 'Java', icon: <FaJava />, level: 'Basic' },
    { name: 'C#', icon: <FaCuttlefish />, level: 'Basic' },
    { name: 'C++', icon: <FaCuttlefish />, level: 'Intermediate' },
    { name: 'PHP', icon: <SiPhp />, level: 'Intermediate' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 'Basic' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
    { name: 'Django', icon: <FaServer />, level: 'Basic' },
    { name: 'Swift', icon: <FaCode />, level: 'Basic' },
    { name: 'API Development', icon: <FaServer />, level: 'Basic' },
    { name: 'COBOL Development', icon: <FaCode />, level: 'Basic' },
    { name: 'CICS', icon: <FaTerminal />, level: 'Basic' },
    { name: 'Jira', icon: <SiJira />, level: 'Basic' },
    { name: 'REXX', icon: <FaCode />, level: 'Basic' },
    { name: '.DAT', icon: <FaFileCode />, level: 'Basic' },
    { name: 'SWIFT MT', icon: <FaServer />, level: 'Basic' },
    { name: 'Job Control Language', icon: <FaTerminal />, level: 'Basic' },
    { name: 'Express.js', icon: <SiExpress />, level: 'Basic' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 'Basic' },
    { name: 'MySQL', icon: <SiMysql />, level: 'Basic' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Basic' },
    { name: 'Teradata', icon: <SiTeradata />, level: 'Basic' },
    { name: 'Autosys', icon: <FaTerminal />, level: 'Basic' },
    { name: 'FileZilla', icon: <FaFileCode />, level: 'Basic' },
    { name: 'IDA Pro', icon: <FaCode />, level: 'Basic' },
    { name: 'Ghidra', icon: <FaCode />, level: 'Basic' },
    { name: 'OllyDbg', icon: <FaCode />, level: 'Basic' },
    { name: 'Pandas', icon: <FaPython />, level: 'Basic' },
    { name: 'Google Colab', icon: <FaCode />, level: 'Basic' },
    { name: 'Git', icon: <FaGitAlt />, level: 'Basic' },
    { name: 'Docker', icon: <FaDocker />, level: 'Basic' },
    { name: 'AWS', icon: <FaAws />, level: 'Basic' },
    { name: 'DigitalOcean', icon: <SiDigitalocean />, level: 'Basic' },
    { name: 'Firebase', icon: <SiFirebase />, level: 'Basic' },
    { name: 'ngrok', icon: <SiNgrok />, level: 'Basic' },
    { name: 'PuTTY', icon: <FaTerminal />, level: 'Basic' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      className="section-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">{skill.level}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
