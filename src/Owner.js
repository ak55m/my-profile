import React from 'react';
import { motion } from 'framer-motion';
import Akeem from './img/akeem.jpeg';
import ResumePdf from './pdf/Akeem_Resume_Grad.docx-2.pdf';

const Owner = () => {
  return (
    <motion.div 
      className="section-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Picture Section */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          padding: '20px'
        }}
      >
        <img 
          src={Akeem} 
          alt="Akeem Mohammed" 
          style={{
            width: 'clamp(150px, 25vw, 200px)',
            height: 'clamp(150px, 25vw, 200px)',
            borderRadius: '50%',
            border: '6px solid rgba(255, 255, 255, 0.3)',
            objectFit: 'cover',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
        />
      </motion.div>

      {/* Introduction Section */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            color: '#111111',
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: '700',
            marginBottom: '10px',
            textShadow: 'none'
          }}
        >
          Akeem Mohammed
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            color: '#111111',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            marginBottom: '5px',
            fontWeight: '500'
          }}
        >
          Masters in Computer Science @ University of Texas at Dallas
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            color: '#111111',
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            marginBottom: '20px'
          }}
        >
          Graduation: Spring 2026
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            color: '#111111',
            fontSize: 'clamp(0.9rem, 2.8vw, 1.1rem)',
            marginBottom: '30px',
            fontWeight: '500',
            padding: '0 10px',
            lineHeight: '1.4'
          }}
        >
          Looking for full/part-time opportunities | Ex Incoming Software Engineer Intern @ Bank of America
        </motion.p>
        
        <motion.a
          href={ResumePdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.7)',
            color: '#111111',
            padding: 'clamp(10px, 2.5vw, 12px) clamp(20px, 5vw, 30px)',
            borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.08)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          View Resume
        </motion.a>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '20px',
          marginTop: '30px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <h3 style={{ 
          color: 'white', 
          marginBottom: '15px', 
          fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
          textAlign: 'center'
        }}>
          About Me
        </h3>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.9)', 
          lineHeight: '1.6',
          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          textAlign: 'justify'
        }}>
          I'm a passionate Computer Science graduate student with a strong foundation in software development, 
          data engineering, and system administration. My expertise spans full-stack development, ETL processes, 
          and technical team leadership. I specialize in Natural Language Processing (NLP) and Computer Graphics, 
          with active research in Computer Vision and advanced graphics rendering techniques. I'm deeply interested 
          in startups and entrepreneurial ventures, combining technical innovation with business acumen. I'm always 
          eager to learn new technologies and take on challenging projects that push my skills forward, particularly 
          in AI/ML applications and cutting-edge computer graphics research.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Owner;
