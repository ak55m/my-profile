import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaStore } from 'react-icons/fa';

const Startup = () => {
  const startupProjects = [
    {
      title: "orderU",
      description: "A revolutionary food ordering platform designed to combat labor shortages for small restaurants. Customers order directly from their phones, eliminating the need for front-counter staff while providing real-time order tracking, visual menus, and streamlined kitchen workflow.",
      status: "MVP Phase",
      role: "Founder & CEO",
      duration: "2024 - Present",
      technologies: ["React.js", "Node.js", "Vercel", "Real-time Tracking", "Mobile-First"],
      highlight: "orderU has received interest from Base10 Ventures.",
      icon: <FaUtensils />,
      features: [
        "Phone-based ordering system",
        "Real-time preparation tracking",
        "Visual menus & promotions",
        "Lower fees than 3rd-party apps",
        "Streamlined kitchen workflow"
      ]
    },
    {
      title: "PearLocal",
      description: "A marketplace platform connecting local sellers with local customers, enabling community-based commerce and supporting small businesses. The platform facilitated peer-to-peer transactions and local market discovery.",
      status: "Defunct",
      role: "Founder & CEO",
      duration: "2019 - 2023",
      technologies: ["React.js", "Node.js", "MongoDB", "Payment Integration", "Location Services"],
      icon: <FaStore />,
      features: [
        "Local seller-customer matching",
        "Community-based commerce",
        "Payment processing",
        "Location-based discovery",
        "Seller verification system"
      ],
      reason: "Discontinued due to larger companies entering the local commerce space"
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
      {/* Startup Projects */}
      <motion.div className="section-container startup-page" variants={itemVariants}>
        <h2 className="section-title">Startup Ventures</h2>
        <div className="projects-grid">
          {startupProjects.map((startup, index) => (
            <motion.div
              key={startup.title}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div className="startup-icon">
                  {startup.icon}
                </div>
                <div>
                  <h3 className="project-title">{startup.title}</h3>
                  <div style={{ 
                    display: 'flex', 
                    gap: '10px', 
                    alignItems: 'center',
                    marginTop: '5px'
                  }}>
                    <span className={`startup-status ${startup.status === 'Defunct' ? 'is-defunct' : 'is-active'}`}>
                      {startup.status}
                    </span>
                    <span className="startup-duration">
                      {startup.duration}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="project-description">{startup.description}</p>
              
              {startup.reason && (
                <div className="startup-reason">
                  <strong>Reason for Closure: </strong>
                  <span>{startup.reason}</span>
                </div>
              )}
              
              <div className="startup-detail">
                <strong>Role: </strong>
                <span>{startup.role}</span>
              </div>
              
              <div className="startup-detail">
                <strong>Key Features:</strong>
                <ul className="startup-features">
                  {startup.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                {startup.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              {startup.highlight && (
                <div className="startup-highlight">
                  {startup.highlight}
                </div>
              )}

              {startup.metrics && <div className="startup-metrics">
                {Object.entries(startup.metrics).map(([key, value]) => (
                  <div key={key} className="startup-metric">
                    <div className="startup-metric-value">
                      {value}
                    </div>
                    <div className="startup-metric-label">
                      {key}
                    </div>
                  </div>
                ))}
              </div>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Startup;
