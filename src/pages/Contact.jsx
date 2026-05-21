import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject || !formData.message.trim()) {
      setStatus('error');
      setResponseMsg('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(formData.email.trim())) {
      setStatus('error');
      setResponseMsg('Please enter a valid email address.');
      return;
    }

    const sanitizedPhone = formData.phone.trim() || 'N/A';
    
    // =========================================================================
    // API INTEGRATION (Vercel Serverless Function)
    // The HTML version uses the Vercel function deployed at /api/contact
    // =========================================================================
    const API_URL = '/api/contact';
    
    const payload = {
      name: formData.name.trim(),
      phone: sanitizedPhone,
      email: formData.email.trim(),
      subject: formData.subject,
      message: formData.message.trim()
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // If the response is not OK, surface an informative error
      if (!response.ok) {
        let errMsg = `Server responded with ${response.status}`;
        const ct = response.headers.get('content-type') || '';
        if (ct.includes('application/json')) {
          const errJson = await response.json();
          errMsg = errJson.message || errMsg;
        }
        throw new Error(errMsg);
      }

      // Ensure we received JSON
      const ct = response.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        const result = await response.json();
        if (result.status === 'success') {
          setStatus('success');
          setResponseMsg('Thank you! Your message has been sent successfully.');
          setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        } else {
          setStatus('error');
          setResponseMsg(`Error: ${result.message || 'Something went wrong.'}`);
        }
      } else {
        throw new Error('Invalid server response (not JSON). Ensure your API is running.');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Submission Error:', error);
      setStatus('error');
      if (error.name === 'AbortError') {
        setResponseMsg('Request timed out. Please try again later.');
      } else {
        setResponseMsg(error.message || 'A network error occurred. Please try again later.');
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div>
      {/* ================= PAGE HEADER ================= */}
      <section className="page-header-section text-center">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="page-header-title"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="page-header-subtitle"
          >
            Get in touch with our security experts to secure your future.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <div className={styles.contactContentSection}>
        <div className="container">
          <div className="row g-5 align-items-center">
            
            {/* LEFT COLUMN: INFO */}
            <div className="col-lg-5">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className={styles.contactInfoWrapper}
              >
                <motion.h3 variants={itemVariants} className={styles.infoHeading}>
                  Get in Touch
                </motion.h3>
                <motion.p variants={itemVariants} className={styles.infoDesc}>
                  Have a query about our quantum-safe solutions? Fill out the form or visit us at our headquarters.
                </motion.p>

                <div className="d-flex flex-column gap-4">
                  <motion.div variants={itemVariants} className={styles.infoItem}>
                    <a href="https://maps.app.goo.gl/f2Mga5XmQvTkhj2F9" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                      <div className={styles.infoIcon}>
                        <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                      </div>
                    </a>
                    <div>
                      <h5>Delhi Office</h5>
                      <p>
                        SafeQbit Technologies Private Limited,<br/>
                        Udhmodya Foundation, 5th Floor, Maharishi Kanad Bhawan,<br/>
                        North Campus, University of Delhi - 110007
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h5>Headquarters</h5>
                      <p>F No 6053, Mahagun Mywoods, Sect- 16C<br/>Gr Noida (W), G. B. Nagar-201318, India</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h5>Phone</h5>
                      <p><a href="tel:+918929874957">+91 89298 74957</a></p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h5>Email</h5>
                      <p><a href="mailto:contact@safeqbit.in">contact@safeqbit.in</a></p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <i className="bi bi-globe" aria-hidden="true"></i>
                    </div>
                    <div>
                      <h5>Website</h5>
                      <p><a href="https://www.SafeQbit.in" target="_blank" rel="noopener noreferrer">www.SafeQbit.in</a></p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: STATEFUL FORM */}
            <div className="col-lg-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={styles.contactFormBox}
              >
                <h3>Contact Us</h3>
                
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.customInput} 
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.customInput} 
                        placeholder="+91 000 000 0000"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.customInput} 
                      placeholder="name@company.com" 
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.customInput}
                      required
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className={styles.formLabel}>Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.customInput} 
                      rows="5"
                      placeholder="How can we help you?" 
                      required
                    ></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={styles.submitBtn}
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {status !== 'idle' && status !== 'submitting' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className={`alert ${status === 'success' ? 'alert-success' : 'alert-danger'} py-2 mb-0 border-0 rounded-3`}
                        role="alert"
                        style={{ fontSize: '0.9rem' }}
                      >
                        {responseMsg}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
