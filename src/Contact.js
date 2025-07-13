import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'axm240136@utdallas.edu',
      link: 'mailto:axm240136@utdallas.edu'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/akeemmohammedutdedu',
      link: 'https://www.linkedin.com/in/akeemmohammedutdedu/'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/ak55m',
      link: 'https://github.com/ak55m'
    }
  ];

  return (
    <motion.div 
      className="section-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Get In Touch</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px', 
        marginTop: '30px' 
      }}>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 style={{ color: 'white', marginBottom: '20px', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
            Contact Information
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: 'clamp(12px, 3vw, 15px)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                whileHover={{ 
                  background: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateX(5px)'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', flexShrink: 0 }}>{info.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontWeight: '600', 
                    marginBottom: '2px',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                  }}>
                    {info.label}
                  </div>
                  <div style={{ 
                    fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)', 
                    opacity: 0.9,
                    wordBreak: 'break-word'
                  }}>
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 style={{ color: 'white', marginBottom: '20px', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>
            Send Message
          </h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="Subject of your message"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Your message..."
                rows="5"
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 