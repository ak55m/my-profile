import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Akeem from './img/akeem.jpeg';
import ResumePdf from './pdf/Akeem_Resume_Grad.docx-2.pdf';

const Owner = () => (
  <motion.main className="hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
    <section className="hero-copy">
      <p className="eyebrow"><span /> Available for aerial robotics research opportunities</p>
      <h1>Building thoughtful<br /><em>digital systems.</em></h1>
      <p className="hero-summary">I’m Akeem Mohammed, a Computer Science graduate student who enjoys understanding computer technologies and the synergies between them.</p>
      <div className="hero-actions">
        <a className="button button-primary" href={ResumePdf} target="_blank" rel="noopener noreferrer">View résumé <FaArrowDown /></a>
        <a className="button button-secondary" href="https://www.linkedin.com/in/akeemmohammedutdedu/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> Connect</a>
      </div>
      <div className="social-row">
        <a href="https://github.com/ak55m" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        <span>Based in Texas</span>
        <span>MSCS · UTD</span>
      </div>
    </section>
    <aside className="hero-visual">
      <div className="photo-frame"><img src={Akeem} alt="Akeem Mohammed" /></div>
      <div className="floating-note note-top"><span>01</span> Software<br />Engineering</div>
      <div className="floating-note note-bottom"><span>2026</span> MS Computer<br />Science, UTD</div>
    </aside>
    <section className="about-panel">
      <p className="section-kicker">A little about me</p>
      <p>PhD student researching the ecosystem of Drones as a Service (DaaS), including the deployment of UAV cyber-physical systems to perform aerial services.</p>
      <div className="stat-row"><div><strong>Full stack</strong><span>Product builder</span></div><div><strong>DaaS</strong><span>Curious researcher</span></div><div><strong>Startups</strong><span>Entrepreneurial</span></div></div>
    </section>
  </motion.main>
);

export default Owner;
