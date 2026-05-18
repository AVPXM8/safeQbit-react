import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

// Import assets
import ompalImg from '../assets/images/Ompal.png';
import laxmiImg from '../assets/images/Laxmi.png';
import pardeepImg from '../assets/images/Pardeep.png';

export default function About() {
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
            About Us
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="page-header-subtitle"
          >
            Pioneering the future of quantum-safe cybersecurity.
          </motion.p>
        </div>
      </section>

      {/* ================= ABOUT DETAILS ================= */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center">
            
            {/* Heading */}
            <div className="col-lg-4 mb-4 mb-lg-0 text-center">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={styles.goldKicker}
              >
                Securing the Digital Future
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="fw-bold display-6 mt-1 text-navy"
              >
                About SafeQbit
              </motion.h2>
            </div>

            {/* Description Paragraphs */}
            <div className="col-lg-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.borderGoldLeft}
              >
                <p className="text-muted fs-5">
                  SafeQbit, formally known as SafeQbit Technologies Pvt. Ltd., is a DPIIT-registered, Noida-based deep-tech cybersecurity company focused on quantum-safe cryptography, secure communication systems, and next-generation encryption technologies. The company was pre-incubated at the Udhmodya Foundation, University of Delhi—a Central University and an Institution of Eminence.
                </p>
                <p className="text-muted fs-5 mb-0">
                  The company is dedicated to building a secure digital future by developing and deploying standards-compliant cryptographic solutions that remain resilient against emerging threats posed by quantum computing.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section className="py-5" style={{ background: '#f5f8ff' }}>
        <div className="container py-3">
          <div className="row align-items-center">
            
            {/* Content (LEFT) */}
            <div className="col-lg-8 order-2 order-lg-1">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.borderGoldRight}
              >
                <p className="text-muted fs-5">
                  To enable a quantum-secure digital future where India’s critical communication systems remain trusted, resilient, and secure even in the era of large-scale quantum computing.
                </p>
                <p className="text-muted fs-5 mb-0">
                  We envision a future where organizations can transition safely to post-quantum security without disruption, protecting sensitive data over decades.
                </p>
              </motion.div>
            </div>

            {/* Heading (RIGHT) */}
            <div className="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0 text-center">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={styles.goldKicker}
              >
                Our Direction
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="fw-bold display-6 mt-1 text-navy"
              >
                Vision
              </motion.h2>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row align-items-center">
            
            {/* Heading */}
            <div className="col-lg-4 mb-4 mb-lg-0 text-center">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={styles.goldKicker}
              >
                What We Do
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="fw-bold display-6 mt-1 text-navy"
              >
                Mission
              </motion.h2>
            </div>

            {/* Content */}
            <div className="col-lg-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.borderGoldLeft}
              >
                <p className="text-muted fs-5">
                  To build deployable, hybrid post-quantum cryptographic solutions aligned with global standards and national priorities.
                </p>
                <p className="text-muted fs-5">
                  To help governments and regulated enterprises mitigate “harvest now, decrypt later” threats.
                </p>
                <p className="text-muted fs-5 mb-0">
                  To provide backward-compatible security platforms that integrate with existing infrastructure.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP HEADING ================= */}
      <section className="py-5" style={{ background: '#f8fafc', borderBottom: '1px solid #edf2f7' }}>
        <div className="container text-center py-2">
          <span className="text-uppercase fw-bold text-gold fs-6" style={{ letterSpacing: '2px' }}>Our</span>
          <h2 className="fw-bold display-5 text-navy mt-1">Leadership Team</h2>
        </div>
      </section>

      {/* ================= LEADER 1: OM PAL ================= */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Profile image (LEFT) */}
            <div className="col-lg-5 mb-4 mb-lg-0 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="d-inline-block"
              >
                <img 
                  src={ompalImg} 
                  alt="Dr. Om Pal - Director & CEO" 
                  className={`${styles.teamImg} ${styles.borderGoldThick}`}
                />
              </motion.div>
            </div>

            {/* Profile Content (RIGHT) */}
            <div className="col-lg-7">
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold fw-bold text-uppercase"
              >
                Dr. Om Pal
              </motion.h2>
              <h5 className="text-navy fw-semibold mb-2">Leadership Head</h5>
              <h6 className="text-dark fw-semibold mb-1">Co-Founder & CEO, SafeQbit Technologies Pvt. Ltd.</h6>
              <h6 className="text-dark fw-semibold mb-1">Associate Professor, University of Delhi</h6>
              <h6 className="text-dark fw-semibold mb-1">Former Scientist, MeitY</h6>
              <h6 className="text-dark fw-semibold mb-3">Former Sr. Technical Officer, C-DAC</h6>

              <p className="text-muted mt-4">
                Dr. Om Pal is a distinguished academician, technologist, and industry leader with extensive experience in emerging technologies and cyber security. As the Director & CEO of SafeQbit, he drives strategic initiatives in Cyber Security, IoT, Digital Forensics, AI & Data Science, Blockchain, Data Privacy, and advanced technology research.
              </p>
              <p className="text-muted">
                With strong academic and government research experience, he has served as a Scientist at MeitY (Ministry of Electronics & Information Technology), Government of India, and as a Senior Technical Officer at C-DAC (Centre for Development of Advanced Computing), contributing to national-level technology development initiatives.
              </p>
              <p className="text-muted">
                Dr. Om Pal actively collaborates with academia, corporates, and government institutions to bridge the gap between innovation, skill development, and real-world implementation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LEADER 2: LAXMI CHANDOLIA ================= */}
      <section className="py-5" style={{ background: '#fbfcfd' }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* Content (LEFT) */}
            <div className="col-lg-7 order-2 order-lg-1">
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold fw-bold text-uppercase"
              >
                Laxmi Chandolia
              </motion.h2>
              <h5 className="text-navy fw-semibold mb-2">Strategic Operations Head</h5>
              <h6 className="text-navy fw-semibold mb-1">Co-Founder & COO, SafeQbit Technologies Pvt. Ltd.</h6>
              <h6 className="text-dark fw-semibold mb-3">Senior Research Fellow, University of Delhi</h6>

              <p className="text-muted mt-4">
                Laxmi Chandolia serves as the Director & Chief Operating Officer at SafeQbit Technologies Pvt. Ltd., where she leads operational strategy, institutional development, and execution across technology-driven training and research initiatives.
              </p>
              <p className="text-muted">
                As a Senior Research Fellow at the University of Delhi, she actively contributes to advanced research, academic collaboration, and innovation-led knowledge development, strengthening the industry–academia ecosystem.
              </p>
              <p className="text-muted">
                With expertise in strategic operations, program management, and research coordination, she plays a key role in ensuring excellence, scalability, and sustainable growth within the organization.
              </p>
            </div>

            {/* Profile image (RIGHT) */}
            <div className="col-lg-5 order-1 order-lg-2 mb-4 mb-lg-0 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="d-inline-block"
              >
                <img 
                  src={laxmiImg} 
                  alt="Laxmi Chandolia - Director & COO" 
                  className={`${styles.teamImg} ${styles.borderGoldThick}`}
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LEADER 3: PARDEEP SINGH ================= */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Profile image (LEFT) */}
            <div className="col-lg-5 mb-4 mb-lg-0 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="d-inline-block"
              >
                <img 
                  src={pardeepImg} 
                  alt="Pardeep Singh - Director & CTO" 
                  className={`${styles.teamImg} ${styles.borderGoldThick}`}
                />
              </motion.div>
            </div>

            {/* Profile Content (RIGHT) */}
            <div className="col-lg-7">
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold fw-bold text-uppercase"
              >
                Pardeep Singh
              </motion.h2>
              <h5 className="text-navy fw-semibold mb-2">Technology Head</h5>
              <h6 className="text-dark fw-semibold mb-1">Co-Founder & CTO, SafeQbit Technologies Pvt. Ltd.</h6>
              <h6 className="text-dark fw-semibold mb-3">Visvesvaraya Senior Research Fellow, University of Delhi</h6>

              <p className="text-muted mt-4">
                Pardeep Singh is a technology strategist and research-driven innovator with expertise in post-quantum cryptography and quantum-safe cybersecurity. As the Director, Co-Founder & CTO of SafeQbit Technologies Pvt. Ltd., he leads technology landscape, cryptographic product innovation, and secure digital solutions development.
              </p>
              <p className="text-muted">
                As a Visvesvaraya Senior Research Fellow at the University of Delhi, he actively contributes to advanced research in post-quantum cryptography (PQC), hybrid classical-to-PQC transition frameworks, and lightweight cryptographic primitives for critical communication systems.
              </p>
              <p className="text-muted">
                He plays a pivotal role in integrating research excellence with real-world cryptographic deployment, ensuring scalable, quantum-safe, and standards-compliant solutions for academia, enterprise, and government sectors.
              </p>

              <div className="mt-4">
                <a href="mailto:pardeep177601@gmail.com" className="text-navy text-decoration-none fw-bold">
                  <i className="bi bi-envelope-fill me-2" aria-hidden="true"></i> pardeep177601@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= EXPERTISE SECTION ================= */}
      <section className="py-5" style={{ background: '#f5f8ff' }}>
        <div className="container py-4">
          
          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="text-navy fw-bold text-uppercase display-6">
              Our Expertise
            </h2>
            <p className="text-muted fs-5 mt-2 max-width-600 mx-auto">
              SafeQbit specializes in emerging technologies, offering cutting-edge solutions and services.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="row g-4 justify-content-center">
            {[
              {
                icon: "bi bi-lock-fill",
                title: "Post-Quantum Cryptography Solutions",
                desc: "Deploy hybrid post-quantum cryptographic solutions designed to secure digital infrastructure against future quantum threats."
              },
              {
                icon: "bi bi-shield-lock-fill",
                title: "Cybersecurity Consulting & Advisory",
                desc: "Strategic advisory services to help organizations assess risks, strengthen security posture, and achieve compliance readiness."
              },
              {
                icon: "bi bi-flask",
                title: "Research And Development (R&D)",
                desc: "Innovation-driven research initiatives focused on next-generation encryption, secure systems, and advanced cybersecurity technologies."
              },
              {
                icon: "bi bi-tools",
                title: "Security Tools & Platforms",
                desc: "Development of secure, scalable, and backward-compatible platforms that integrate seamlessly with existing infrastructure."
              },
              {
                icon: "bi bi-person-workspace",
                title: "Training And Workshops",
                desc: "Specialized training programs and workshops designed to build technical expertise in emerging cybersecurity domains."
              }
            ].map((exp, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={styles.expertiseCard}
                >
                  <div className="text-center">
                    <div className={styles.expertiseIcon}>
                      <i className={exp.icon} aria-hidden="true"></i>
                    </div>
                    <h4>{exp.title}</h4>
                    <p>{exp.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
