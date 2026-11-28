import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaExternalLinkAlt, FaGoogle } from 'react-icons/fa';

const scholarProfile = 'https://scholar.google.com/citations?user=c5gz0x0AAAAJ&hl=en';

const Research = () => (
  <motion.div className="research-page" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
    <header className="research-masthead">
      <section className="research-intro">
        <p className="section-kicker">Research / Publications</p>
        <h2 className="section-title">Autonomous systems<br /><em>for the physical world.</em></h2>
        <p>My research explores how perception, planning, and control can enable autonomous aerial robots to interact with their surroundings using bimanual manipulators.</p>
      </section>
      <a className="scholar-card" href={scholarProfile} target="_blank" rel="noopener noreferrer">
        <span className="scholar-card-top"><FaGoogle /><span>Research profile</span><FaExternalLinkAlt /></span>
        <strong>Google Scholar</strong>
        <span className="scholar-card-copy">Explore my publications and academic profile.</span>
        <span className="scholar-card-link">Open profile <span aria-hidden="true">↗</span></span>
      </a>
    </header>

    <section className="publication-section">
      <div className="publication-section-heading"><div><p className="section-kicker">Selected work</p><h2 className="section-title">Publications</h2></div><span className="publication-count">02 / PAPERS</span></div>
      <article className="publication-card">
        <div className="publication-index">01</div>
        <div className="publication-content">
          <div className="publication-meta"><span>Accepted full paper</span><span>2026</span></div>
          <h3>A Distributed Energy Relay Framework for Sustainable Drone Missions</h3>
          <p className="publication-venue">IEEE International Conference on Parallel and Distributed Systems (ICPADS 2026)</p>
        </div>
        <div className="publication-mark"><FaBookOpen /></div>
      </article>
      <article className="publication-card">
        <div className="publication-index">02</div>
        <div className="publication-content">
          <div className="publication-meta"><span>Accepted</span><span>2026</span></div>
          <h3>OmniDroneX: An LLM-Assisted Holistic Drone-as-a-Service Ecosystem</h3>
          <p className="publication-authors">I. Yen, A. Mohammed, F. Bastani, S. Y. Hwang</p>
          <p className="publication-venue">arXiv:2606.17510</p>
          <div className="publication-actions">
            <a href="https://arxiv.org/abs/2606.17510" target="_blank" rel="noopener noreferrer">Read paper <FaExternalLinkAlt /></a>
            <a href={scholarProfile} target="_blank" rel="noopener noreferrer">Google Scholar <FaExternalLinkAlt /></a>
          </div>
        </div>
        <div className="publication-mark"><FaBookOpen /></div>
      </article>
    </section>

  </motion.div>
);

export default Research;
