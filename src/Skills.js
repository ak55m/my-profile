import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPaypal,
  FaTerminal
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
  SiStripe
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact />, level: 'Advanced' },
    { name: 'JavaScript', icon: <FaJs />, level: 'Advanced' },
    { name: 'Python', icon: <FaPython />, level: 'Intermediate' },
    { name: 'Java', icon: <FaJava />, level: 'Intermediate' },
    { name: 'PHP', icon: <SiPhp />, level: 'Intermediate' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
    { name: 'Express.js', icon: <SiExpress />, level: 'Intermediate' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 'Intermediate' },
    { name: 'MySQL', icon: <SiMysql />, level: 'Intermediate' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Basic' },
    { name: 'Teradata', icon: <SiTeradata />, level: 'Basic' },
    { name: 'Git', icon: <FaGitAlt />, level: 'Advanced' },
    { name: 'Docker', icon: <FaDocker />, level: 'Basic' },
    { name: 'AWS', icon: <FaAws />, level: 'Basic' },
    { name: 'DigitalOcean', icon: <SiDigitalocean />, level: 'Basic' },
    { name: 'Firebase', icon: <SiFirebase />, level: 'Intermediate' },
    { name: 'PayPal', icon: <FaPaypal />, level: 'Intermediate' },
    { name: 'Stripe', icon: <SiStripe />, level: 'Intermediate' },
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