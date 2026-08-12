import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaDatabase, FaServer } from 'react-icons/fa';

const technologies = [
  {
    title: 'Frontend',
    icon: <FaCode />,
    description: 'Responsive, accessible interfaces with a focus on clarity and performance.',
    items: ['React', 'Vue.js', 'JavaScript', 'HTML', 'CSS', 'Framer Motion']
  },
  {
    title: 'Backend & APIs',
    icon: <FaServer />,
    description: 'Reliable services and integrations that connect products to the data they need.',
    items: ['Node.js', 'Django', 'OpenRouter', 'Google Gemini', 'Stripe API', 'PayPal API']
  },
  {
    title: 'Data',
    icon: <FaDatabase />,
    description: 'Structured data systems, ETL workflows, and practical analytics foundations.',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Teradata', 'SQL', 'PyTorch', 'TensorFlow']
  },
  {
    title: 'Cloud & Dev Tools',
    icon: <FaCloud />,
    description: 'Tools for shipping, operating, and evolving applications with confidence.',
    items: ['AWS', 'Docker', 'GitHub', 'Firebase', 'DigitalOcean', 'Railway', 'Cloudflare', 'SigNoz']
  },
  {
    title: 'Robotics',
    icon: <FaCode />,
    description: 'Tools for simulation, autonomous systems, and intelligent physical products.',
    items: ['ROS', 'Gazebo', 'Unity', 'DJI SDK']
  },
  {
    title: 'Payments',
    icon: <FaServer />,
    description: 'Platforms for building reliable and secure online commerce experiences.',
    items: ['PayPal', 'Stripe', 'SWIFT MT']
  }
];

const Technologies = () => (
  <motion.div className="section-container technologies-section" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
    <p className="section-kicker">Technology stack</p>
    <h2 className="section-title">Tools I build with.</h2>
    <p className="technologies-intro">A practical toolkit for building end-to-end products—from polished user interfaces to dependable backend systems and data workflows.</p>
    <div className="technologies-grid">
      {technologies.map((technology, index) => (
        <motion.article className="technology-card" key={technology.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
          <div className="technology-icon">{technology.icon}</div>
          <h3>{technology.title}</h3>
          <p>{technology.description}</p>
          <div className="technology-list">{technology.items.map((item) => <span key={item}>{item}</span>)}</div>
        </motion.article>
      ))}
    </div>
  </motion.div>
);

export default Technologies;
