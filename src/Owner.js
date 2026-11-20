import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Akeem from './img/akeem.jpeg';
import ResumePdf from './pdf/Akeem_Resume_Grad.docx-2.pdf';

const Owner = () => (
  <motion.main className="hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
    <section className="hero-copy">
      <p className="eyebrow"><span /> PhD researcher · autonomous aerial systems</p>
      <h1>Aerial manipulation<br /><em>10× more feasible.</em></h1>
      <div className="hero-actions">
        <a className="button button-primary" href={ResumePdf} target="_blank" rel="noopener noreferrer">View résumé <FaArrowDown /></a>
        <a className="button button-secondary" href="https://www.linkedin.com/in/akeemmohammedutdedu/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> Connect</a>
      </div>
      <div className="social-row">
        <a href="https://github.com/ak55m" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        <span>Aerial manipulation</span>
        <span>UT Dallas · Computer Science</span>
      </div>
    </section>
    <aside className="hero-visual scientist-visual">
      <div className="photo-frame"><img src={Akeem} alt="Akeem Mohammed" /></div>
    </aside>
    <section className="about-panel">
      <p className="section-kicker">A little about me</p>
      <p>First-year PhD student researching drones as a service through aerial manipulation, advised by Professor I-Ling Yen.</p>
      <div className="research-path" aria-label="Research path: autonomous UAVs, embodied robotics, and drones as a service">
        <div className="path-step"><span className="path-number">01</span><strong>Research</strong><small>Autonomous UAVs</small></div>
        <div className="path-connector" aria-hidden="true"><span /></div>
        <div className="path-step"><span className="path-number">02</span><strong>Systems</strong><small>Embodied robotics</small></div>
        <div className="path-connector" aria-hidden="true"><span /></div>
        <div className="path-step"><span className="path-number">03</span><strong>Direction</strong><small>Drones as a Service</small></div>
      </div>
    </section>
  </motion.main>
);

export default Owner;
