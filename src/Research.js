import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaFileAlt, FaChartBar, FaMicroscope, FaAward, FaUniversity } from 'react-icons/fa';

const Research = () => {
  const researchAreas = [
    {
      title: "Machine Learning & AI",
      description: "Focus on deep learning applications in computer vision and natural language processing. Research includes neural network optimization and transfer learning techniques.",
      keywords: ["Deep Learning", "Computer Vision", "NLP", "Neural Networks"],
      icon: <FaMicroscope />
    },
    {
      title: "Data Science & Analytics",
      description: "Big data processing and predictive analytics for business intelligence. Specializing in real-time data streaming and statistical modeling.",
      keywords: ["Big Data", "Predictive Analytics", "Statistical Modeling", "Data Mining"],
      icon: <FaChartBar />
    },
    {
      title: "Computer Graphics",
      description: "Research in 3D graphics, rendering techniques, and visual computing. Developing novel approaches to real-time rendering and computer animation.",
      keywords: ["3D Graphics", "Rendering", "Animation", "Visual Computing"],
      icon: <FaGraduationCap />
    }
  ];

  const publications = [
    {
      title: "Optimizing Neural Network Architectures for Real-Time Image Processing",
      authors: "Mohammed, A., Smith, J., Johnson, M.",
      journal: "IEEE Transactions on Neural Networks and Learning Systems",
      year: "2024",
      doi: "10.1109/TNNLS.2024.123456",
      abstract: "This paper presents a novel approach to optimizing neural network architectures for real-time image processing applications, achieving 40% faster inference times while maintaining accuracy.",
      citations: 15,
      status: "Published"
    },
    {
      title: "Machine Learning Approaches for Cybersecurity Threat Detection",
      authors: "Mohammed, A., Brown, R., Davis, K.",
      journal: "ACM Digital Library - Security Symposium",
      year: "2023",
      doi: "10.1145/123456.789012",
      abstract: "A comprehensive study of machine learning techniques applied to cybersecurity threat detection, with experimental results showing 95% accuracy in identifying malicious activities.",
      citations: 28,
      status: "Published"
    },
    {
      title: "Big Data Analytics for Predictive Business Intelligence",
      authors: "Johnson, M., Mohammed, A., Wilson, P.",
      journal: "Data Science Journal",
      year: "2023",
      doi: "10.1000/dsj.2023.456789",
      abstract: "Implementation of big data analytics frameworks for predictive business intelligence, demonstrating significant improvements in decision-making processes.",
      citations: 12,
      status: "Published"
    },
    {
      title: "Transfer Learning in Computer Vision: A Systematic Review",
      authors: "Mohammed, A., Lee, S., Garcia, M.",
      journal: "Computer Vision and Pattern Recognition",
      year: "2024",
      doi: "10.1109/CVPR.2024.789012",
      abstract: "A systematic review of transfer learning techniques in computer vision, providing insights into best practices and future research directions.",
      citations: 8,
      status: "Under Review"
    }
  ];

  const conferences = [
    {
      title: "IEEE International Conference on Machine Learning",
      location: "San Francisco, CA",
      year: "2024",
      presentation: "Neural Network Optimization Techniques",
      type: "Oral Presentation"
    },
    {
      title: "ACM SIGKDD Conference on Knowledge Discovery",
      location: "Chicago, IL",
      year: "2023",
      presentation: "Big Data Analytics in Cybersecurity",
      type: "Poster Presentation"
    },
    {
      title: "NeurIPS - Neural Information Processing Systems",
      location: "New Orleans, LA",
      year: "2023",
      presentation: "Deep Learning for Real-Time Applications",
      type: "Workshop"
    }
  ];

  const awards = [
    {
      title: "Outstanding Research Award",
      organization: "University of Texas at Dallas",
      year: "2024",
      description: "Recognized for exceptional contributions to machine learning research"
    },
    {
      title: "Best Paper Award",
      organization: "IEEE Computer Society",
      year: "2023",
      description: "Awarded for the paper on neural network optimization"
    },
    {
      title: "Graduate Research Fellowship",
      organization: "National Science Foundation",
      year: "2023",
      description: "Three-year fellowship for outstanding graduate research"
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
      {/* Research Areas */}
      <motion.div className="section-container" variants={itemVariants}>
        <h2 className="section-title">Research Areas</h2>
        <div className="skills-grid">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="skill-icon">{area.icon}</div>
              <div className="skill-name">{area.title}</div>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '0.9rem', 
                marginTop: '10px',
                lineHeight: '1.4'
              }}>
                {area.description}
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '5px', 
                marginTop: '10px' 
              }}>
                {area.keywords.map((keyword) => (
                  <span key={keyword} style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontSize: '0.7rem'
                  }}>
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Publications */}
      <motion.div className="section-container" variants={itemVariants}>
        <h2 className="section-title">Publications</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: 'clamp(20px, 4vw, 25px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                background: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateX(5px)'
              }}
            >
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '10px' 
              }}>
                <h3 style={{ 
                  color: 'white', 
                  fontSize: 'clamp(1rem, 3vw, 1.2rem)', 
                  marginBottom: '5px',
                  lineHeight: '1.3'
                }}>
                  {pub.title}
                </h3>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                  fontWeight: '500',
                  background: pub.status === 'Published' ? 'rgba(76, 175, 80, 0.3)' : 'rgba(255, 193, 7, 0.3)',
                  color: pub.status === 'Published' ? '#4CAF50' : '#FFC107',
                  alignSelf: 'flex-start'
                }}>
                  {pub.status}
                </span>
              </div>
              
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                marginBottom: '10px', 
                fontStyle: 'italic',
                fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)'
              }}>
                {pub.authors}
              </p>
              
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                marginBottom: '10px',
                fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)'
              }}>
                <strong>{pub.journal}</strong> • {pub.year}
              </p>
              
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                marginBottom: '15px', 
                lineHeight: '1.5',
                fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)'
              }}>
                {pub.abstract}
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '5px'
              }}>
                <span style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                  wordBreak: 'break-all'
                }}>
                  DOI: {pub.doi}
                </span>
                <span style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  fontSize: 'clamp(0.7rem, 2vw, 0.9rem)'
                }}>
                  Citations: {pub.citations}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Conferences */}
      <motion.div className="section-container" variants={itemVariants}>
        <h2 className="section-title">Conference Presentations</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {conferences.map((conf, index) => (
            <motion.div
              key={conf.title}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: 'clamp(15px, 3vw, 20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(15px, 3vw, 20px)'
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                background: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateX(5px)'
              }}
            >
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#fff', flexShrink: 0 }}>
                <FaUniversity />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  color: 'white', 
                  marginBottom: '5px', 
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  lineHeight: '1.3'
                }}>
                  {conf.title}
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  marginBottom: '5px',
                  fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)'
                }}>
                  {conf.presentation}
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '5px'
                }}>
                  <span style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)'
                  }}>
                    {conf.location} • {conf.year}
                  </span>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    alignSelf: 'flex-start'
                  }}>
                    {conf.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Awards */}
      <motion.div className="section-container" variants={itemVariants}>
        <h2 className="section-title">Research Awards & Recognition</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: 'clamp(15px, 3vw, 20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(15px, 3vw, 20px)'
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                background: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateX(5px)'
              }}
            >
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#fff', flexShrink: 0 }}>
                <FaAward />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  color: 'white', 
                  marginBottom: '5px', 
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  lineHeight: '1.3'
                }}>
                  {award.title}
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  marginBottom: '5px',
                  fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)'
                }}>
                  {award.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '5px'
                }}>
                  <span style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)'
                  }}>
                    {award.organization}
                  </span>
                  <span style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)'
                  }}>
                    {award.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Research; 