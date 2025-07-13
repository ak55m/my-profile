import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaCode, FaGlobe, FaUtensils, FaStore } from 'react-icons/fa';

const Startup = () => {
  const startupProjects = [
    {
      title: "orderU",
      description: "A revolutionary food ordering platform designed to combat labor shortages for small restaurants. Customers order directly from their phones, eliminating the need for front-counter staff while providing real-time order tracking, visual menus, and streamlined kitchen workflow.",
      status: "MVP Phase",
      role: "Founder & CEO",
      duration: "2024 - Present",
      technologies: ["React.js", "Node.js", "Vercel", "Real-time Tracking", "Mobile-First"],
      metrics: {
        restaurants: "25+",
        orders: "1000+",
        waitlist: "500+"
      },
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
      metrics: {
        users: "2000+",
        sellers: "150+",
        transactions: "5000+"
      },
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

  const achievements = [
    {
      title: "orderU - UT Dallas Student Innovation",
      description: "Developed orderU as a student-led initiative to solve real restaurant industry challenges, currently in MVP phase with growing waitlist",
      year: "2024",
      icon: <FaLightbulb />
    },
    {
      title: "PearLocal - Community Commerce Success",
      description: "Successfully built and operated PearLocal for 4 years, serving 2000+ users and facilitating 5000+ local transactions before market consolidation",
      year: "2019-2023",
      icon: <FaCode />
    },
    {
      title: "University Startup Competition",
      description: "Won 1st place in UTD's annual startup pitch competition with innovative solutions for local business challenges",
      year: "2023",
      icon: <FaGlobe />
    },
    {
      title: "TechCrunch Disrupt",
      description: "Selected as one of 50 startups to present at TechCrunch Disrupt 2024 with orderU platform",
      year: "2024",
      icon: <FaRocket />
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
      <motion.div className="section-container" variants={itemVariants}>
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
                <div style={{ fontSize: '2rem', marginRight: '15px', color: '#fff' }}>
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
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      background: startup.status === 'Active' ? 'rgba(76, 175, 80, 0.3)' : 
                                startup.status === 'Defunct' ? 'rgba(244, 67, 54, 0.3)' : 'rgba(255, 193, 7, 0.3)',
                      color: startup.status === 'Active' ? '#4CAF50' : 
                             startup.status === 'Defunct' ? '#F44336' : '#FFC107'
                    }}>
                      {startup.status}
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      {startup.duration}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="project-description">{startup.description}</p>
              
              {startup.reason && (
                <div style={{ 
                  marginBottom: '15px', 
                  padding: '10px', 
                  background: 'rgba(244, 67, 54, 0.1)', 
                  borderRadius: '8px',
                  border: '1px solid rgba(244, 67, 54, 0.3)'
                }}>
                  <strong style={{ color: '#F44336', fontSize: '0.9rem' }}>Reason for Closure: </strong>
                  <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>{startup.reason}</span>
                </div>
              )}
              
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: 'white', fontSize: '0.9rem' }}>Role: </strong>
                <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{startup.role}</span>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: 'white', fontSize: '0.9rem' }}>Key Features:</strong>
                <ul style={{ 
                  margin: '8px 0 0 0', 
                  paddingLeft: '20px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem'
                }}>
                  {startup.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: '3px' }}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                {startup.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
                gap: '10px',
                marginTop: '15px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px'
              }}>
                {Object.entries(startup.metrics).map(([key, value]) => (
                  <div key={key} style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontWeight: '600', fontSize: '1.1rem' }}>
                      {value}
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', textTransform: 'capitalize' }}>
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div className="section-container" variants={itemVariants}>
        <h2 className="section-title">Entrepreneurial Achievements</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                background: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateX(5px)'
              }}
            >
              <div style={{ fontSize: '2rem', color: '#fff' }}>
                {achievement.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: 'white', marginBottom: '5px', fontSize: '1.2rem' }}>
                  {achievement.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '5px' }}>
                  {achievement.description}
                </p>
                <span style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {achievement.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Startup; 