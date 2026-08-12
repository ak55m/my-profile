import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaExternalLinkAlt, FaMicrochip, FaRocket } from 'react-icons/fa';

const scholarProfile = 'https://scholar.google.com/citations?user=c5gz0x0AAAAJ&hl=en';

const interests = [
  {
    icon: <FaRocket />,
    title: 'Cyber-Physical Systems',
    description: 'Exploring the connection between intelligent software systems and real-world autonomous platforms.'
  },
  {
    icon: <FaMicrochip />,
    title: 'Software Engineering',
    description: 'Interested in how modern software components can be designed to work together as dependable systems.'
  },
  {
    icon: <FaRocket />,
    title: 'Autonomous UAVs',
    description: 'Exploring autonomous unmanned aerial vehicles and the software systems that coordinate their operation.'
  },
  {
    icon: <FaMicrochip />,
    title: 'UAV Energy',
    description: 'Interested in energy-aware UAV operation, including the technologies and tradeoffs that shape flight endurance.'
  }
];

const Research = () => (
  <motion.div className="research-page" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
    <section className="section-container research-intro">
      <p className="section-kicker">Research & publications</p>
      <h2 className="section-title">Exploring intelligent systems in motion.</h2>
      <p>My work sits at the intersection of software engineering, cyber-physical systems, and AI-assisted autonomous platforms.</p>
      <a className="button button-secondary" href={scholarProfile} target="_blank" rel="noopener noreferrer">Google Scholar <FaExternalLinkAlt /></a>
    </section>

    <section className="section-container">
      <p className="section-kicker">Publication</p>
      <article className="publication-card">
        <div className="publication-mark"><FaBookOpen /></div>
        <div>
          <div className="publication-meta"><span>arXiv preprint</span><span>2026</span></div>
          <h3>OmniDroneX: An LLM-Assisted Holistic Drone-as-a-Service Ecosystem</h3>
          <p className="publication-authors">I. Yen, A. Mohammed, F. Bastani, S. Y. Hwang</p>
          <p>arXiv:2606.17510</p>
          <div className="publication-actions">
            <a href="https://arxiv.org/abs/2606.17510" target="_blank" rel="noopener noreferrer">Read on arXiv <FaExternalLinkAlt /></a>
            <a href={scholarProfile} target="_blank" rel="noopener noreferrer">View on Scholar <FaExternalLinkAlt /></a>
          </div>
        </div>
      </article>
    </section>

    <section className="section-container">
      <p className="section-kicker">Focus areas</p>
      <h2 className="section-title">Research interests.</h2>
      <div className="research-grid">
        {interests.map((interest) => <article className="research-card" key={interest.title}><div>{interest.icon}</div><h3>{interest.title}</h3><p>{interest.description}</p></article>)}
      </div>
    </section>
  </motion.div>
);

export default Research;
