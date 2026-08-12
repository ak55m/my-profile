import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { alert('Thank you for your message! I will get back to you soon.'); setFormData({ name: '', email: '', subject: '', message: '' }); setIsSubmitting(false); }, 1000);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'akeem.mohammed@utdallas.edu', link: 'mailto:akeem.mohammed@utdallas.edu' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/akeemmohammedutdedu', link: 'https://www.linkedin.com/in/akeemmohammedutdedu/' },
    { icon: <FaGithub />, label: 'GitHub', value: 'github.com/ak55m', link: 'https://github.com/ak55m' }
  ];

  return <motion.main className="contact-page" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
    <section className="contact-heading">
      <p className="section-kicker">Contact</p>
      <h2>Let’s build<br /><em>something useful.</em></h2>
      <p>Have a question, research idea, or project in mind? I’d be glad to connect.</p>
    </section>
    <div className="contact-layout">
      <section className="contact-details" aria-label="Contact details">
        <p className="contact-label">Find me online</p>
        {contactInfo.map((info) => <a className="contact-link" href={info.link} target={info.link.startsWith('mailto:') ? undefined : '_blank'} rel={info.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'} key={info.label}><span className="contact-icon">{info.icon}</span><span><strong>{info.label}</strong><small>{info.value}</small></span><b aria-hidden="true">↗</b></a>)}
        <p className="contact-note">Based in Texas · Available for research and engineering conversations.</p>
      </section>
      <section className="contact-form-card">
        <div className="form-heading"><p className="contact-label">Start a conversation</p><h3>Send a message</h3></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row"><div className="form-group"><label htmlFor="name">Name</label><input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required /></div><div className="form-group"><label htmlFor="email">Email</label><input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required /></div></div>
          <div className="form-group"><label htmlFor="subject">Subject</label><input id="subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What would you like to discuss?" required /></div>
          <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me a little about it..." rows="6" required /></div>
          <motion.button type="submit" className="submit-btn" disabled={isSubmitting} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>{isSubmitting ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span></motion.button>
        </form>
      </section>
    </div>
  </motion.main>;
};

export default Contact;
