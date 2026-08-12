import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'University of Texas at Dallas', location: 'Dallas, TX', role: 'Graduate Research Assistant for I-Ling Yen', period: 'Dec. 2025 - Present',
    bullets: [
      'Conducting systems-level research on UAV precision landing, evaluating the feasibility of autonomous operations on non-traditional landing surfaces under real-world conditions.',
      'Coding the IMU-first autonomous control pipeline for UAV precision landing, integrating synchronized inertial-vision sensing, navigation frame alignment, and data-driven PD/PID control.'
    ]
  },
  {
    company: 'University of Texas at Dallas', location: 'Dallas, TX', role: 'Food Cashier', period: 'Aug. 2025 - Dec. 2025',
    bullets: ['Handled customer payments and order processing in a fast-paced university dining environment.']
  },
  {
    company: 'Bank of America', location: 'New York City, NY', role: 'Global Technology Summer Analyst Intern', period: 'June 2023 - Aug. 2023',
    bullets: [
      'Collaborated on an end-to-end ETL process with the Data Technology team, utilizing AutoSys for efficient loading and monitoring logs via secure SSH tunnel PuTTY/Unix.',
      'Contributed to data quality initiatives using Teradata Studio to manage and optimize data storage and validate cash and foreign check records.',
      'Executed targeted data visualization via SQL queries, ensuring high data quality in the ETL process.'
    ]
  },
  {
    company: 'Texas Tech University Advanced Technology Learning Center', location: 'Lubbock, TX', role: 'Lead Student Technician III', period: 'Nov. 2022 - Dec. 2023',
    bullets: [
      'Initiated a weekend staffing model to ensure adequate student coverage during peak and non-peak usage periods.',
      'Collaborated on an inactive script, automating user logout after a designated period of computer inactivity.',
      'Led a team of 5 to supervise school computers, mobile laptops, and desktops daily.'
    ]
  },
  {
    company: 'Texas Tech University Advanced Technology Learning Center', location: 'Lubbock, TX', role: 'Lead Student Technician II', period: 'May 2021 - Nov. 2022',
    bullets: [
      'Supervised 43 campus printers to ensure high uptime and proper functioning.',
      'Networked at least 57 computers onto Texas Tech University’s intranet, running programmed scripts.',
      'Utilized Quest KACE software to transmit patches and upgrade vulnerabilities through the KACE servers.'
    ]
  },
  {
    company: 'MTN Nigeria Communications', location: 'Remote', role: 'Software Engineer Intern', period: 'June 2022 - Aug. 2022',
    bullets: ['Enhanced e-commerce platform with an improved UI using React.js and implemented Express.js to handle APIs of new products.']
  },
  {
    company: 'Globacom Limited', location: 'Remote', role: 'Software Engineer Intern', period: 'June 2019 - Aug. 2019',
    bullets: ['Optimized codebase by resolving inconsistencies, leading to a 30% speed improvement.']
  }
];

const Experience = () => (
  <motion.main className="experience-page" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
    <header className="experience-heading">
      <p className="section-kicker">Work experience</p>
      <h2>Work shaped by<br /><em>systems and service.</em></h2>
      <a className="button button-secondary" href="https://www.linkedin.com/in/akeemmohammedutdedu/" target="_blank" rel="noopener noreferrer">View LinkedIn <span>↗</span></a>
    </header>
    <section className="experience-timeline" aria-label="Work experience timeline">
      {experiences.map((experience, index) => (
        <motion.article className="experience-card" key={`${experience.company}-${experience.role}`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }}>
          <div className="experience-index">0{index + 1}</div>
          <div className="experience-content">
            <div className="experience-topline"><span>{experience.location}</span><span>{experience.period}</span></div>
            <h3>{experience.company}</h3>
            <p className="experience-role">{experience.role}</p>
            <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        </motion.article>
      ))}
    </section>
  </motion.main>
);

export default Experience;
