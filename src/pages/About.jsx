import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

// Import assets
import ompalImg from '../assets/images/Ompal.png';
import laxmiImg from '../assets/images/Laxmi.png';
import pardeepImg from '../assets/images/Pardeep.png';
import teamImg from '../assets/images/team.png';

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
      <section className={`${styles.aboutSection} py-5`}>
        <div className="container py-4">
          <div className="row align-items-center g-5">

            {/* Typography Content (LEFT) */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className={styles.goldKicker}>Securing the Digital Future</span>
                <h2 className={styles.aboutTitle}>About SafeQbit</h2>

                <p className={styles.aboutText}>
                  SafeQbit, formally known as SafeQbit Technologies Pvt. Ltd., is a DPIIT-registered, Noida-based deep-tech cybersecurity company focused on quantum-safe cryptography, secure communication systems, and next-generation encryption technologies.
                </p>
                <p className={styles.aboutText}>
                  The company was pre-incubated at the Udhmodya Foundation, University of Delhi—a Central University and an Institution of Eminence. We are dedicated to building a secure digital future by developing and deploying standards-compliant cryptographic solutions that remain resilient against emerging threats posed by quantum computing.
                </p>

                {/* Highlights Grid */}
                <div className={styles.highlightsGrid}>
                  <div className={styles.highlightItem}>
                    <div className={styles.highlightIcon}><i className="bi bi-patch-check-fill"></i></div>
                    <span className={styles.highlightText}>DPIIT Registered Startup</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <div className={styles.highlightIcon}><i className="bi bi-shield-lock-fill"></i></div>
                    <span className={styles.highlightText}>Deep-Tech Innovation</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <div className={styles.highlightIcon}><i className="bi bi-mortarboard-fill"></i></div>
                    <span className={styles.highlightText}>Incubated at DU</span>
                  </div>
                  <div className={styles.highlightItem}>
                    <div className={styles.highlightIcon}><i className="bi bi-cpu-fill"></i></div>
                    <span className={styles.highlightText}>Quantum-Safe Cryptography</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Premium Image Frame (RIGHT) */}
            <div className="col-lg-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={styles.aboutImageWrapper}
              >
                <div className={styles.aboutImageFrame}>
                  <img
                    src={teamImg}
                    alt="SafeQbit Core Working Team"
                    className={styles.aboutImg}
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION SECTION ================= */}
      <section className={`${styles.purposeSection} py-5`}>
        <div className="container py-4">

          <div className={`${styles.purposeSectionHeader} text-center`}>
            <span className={styles.goldKicker}>Our Core Purpose</span>
            <h2 className="fw-bold display-6 mt-1 text-navy">Shaping Post-Quantum Trust</h2>
            <p className="text-muted fs-5 mt-3 max-width-600 mx-auto text-center">
              Aligning national communication security priorities with robust, global post-quantum cryptographic engineering.
            </p>
          </div>

          <div className="row g-4 justify-content-center mt-3">

            {/* VISION CARD */}
            <div className="col-lg-6 col-md-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`${styles.purposeCard} ${styles.visionCard}`}
              >
                <div className={`${styles.purposeIconBox} ${styles.visionIcon}`}>
                  <i className="bi bi-compass-fill" aria-hidden="true"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To enable a quantum-secure digital future where India’s critical communication systems remain trusted, resilient, and secure even in the era of large-scale quantum computing.
                </p>
                <p className="mb-0">
                  We envision a future where organizations can transition safely to post-quantum security without disruption, protecting sensitive data over decades.
                </p>
              </motion.div>
            </div>

            {/* MISSION CARD */}
            <div className="col-lg-6 col-md-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${styles.purposeCard} ${styles.missionCard}`}
              >
                <div className={`${styles.purposeIconBox} ${styles.missionIcon}`}>
                  <i className="bi bi-shield-fill-check" aria-hidden="true"></i>
                </div>
                <h3>Our Mission</h3>
                <ul className={styles.missionList}>
                  <li>To build deployable, hybrid post-quantum cryptographic solutions aligned with global standards and national priorities.</li>
                  <li>To help governments and regulated enterprises mitigate “harvest now, decrypt later” threats.</li>
                  <li>To provide backward-compatible security platforms that integrate with existing infrastructure.</li>
                </ul>
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
      <section className={`${styles.leaderSection} bg-white`}>
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Profile image (LEFT) */}
            <div className="col-lg-5 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.teamImgWrapper}
              >
                <img
                  src={ompalImg}
                  alt="Dr. Om Pal - Director & CEO"
                  className={styles.teamImg}
                />
              </motion.div>
            </div>

            {/* Profile Content (RIGHT) */}
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className={styles.leaderName}>Dr. Om Pal</h2>
                <h5 className={styles.leaderRole}>Co-Founder & CEO</h5>

                {/* Professional tags */}
                <div className={styles.badgeContainer}>
                  <span className={`${styles.customBadge} ${styles.badgeGold}`}>Associate Professor, University of Delhi</span>
                  <span className={`${styles.customBadge} ${styles.badgeAzure}`}>Former Scientist, MeitY</span>
                  <span className={`${styles.customBadge} ${styles.badgeNavy}`}>Former Sr. Technical Officer, C-DAC</span>
                </div>

                <p className={styles.leaderBio}>
                  Dr. Om Pal is a distinguished academician, technologist, and industry leader with extensive experience in emerging technologies and cyber security. As the Director & CEO of SafeQbit, he drives strategic initiatives in Cyber Security, IoT, Digital Forensics, AI & Data Science, Blockchain, Data Privacy, and advanced technology research.
                </p>
                <p className={styles.leaderBio}>
                  With strong academic and government research experience, he has served as a Scientist at MeitY (Ministry of Electronics & Information Technology), Government of India, and as a Senior Technical Officer at C-DAC (Centre for Development of Advanced Computing), contributing to national-level technology development initiatives.
                </p>
                <p className={styles.leaderBio}>
                  Dr. Om Pal actively collaborates with academia, corporates, and government institutions to bridge the gap between innovation, skill development, and real-world implementation.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LEADER 2: LAXMI CHANDOLIA ================= */}
      <section className={`${styles.leaderSection}`} style={{ background: '#fbfcfd' }}>
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Profile Content (LEFT on Desktop, order-2 on mobile) */}
            <div className="col-lg-7 order-2 order-lg-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className={styles.leaderName}>Laxmi Chandolia</h2>
                <h5 className={styles.leaderRole}>Strategic Operations Head</h5>

                {/* Professional tags */}
                <div className={styles.badgeContainer}>
                  <span className={`${styles.customBadge} ${styles.badgeGold}`}>Co-Founder & COO, SafeQbit</span>
                  <span className={`${styles.customBadge} ${styles.badgeAzure}`}>Senior Research Fellow, DU</span>
                </div>

                <p className={styles.leaderBio}>
                  Laxmi Chandolia serves as the Director & Chief Operating Officer at SafeQbit Technologies Pvt. Ltd., where she leads operational strategy, institutional development, and execution across technology-driven training and research initiatives.
                </p>
                <p className={styles.leaderBio}>
                  As a Senior Research Fellow at the University of Delhi, she actively contributes to advanced research, academic collaboration, and innovation-led knowledge development, strengthening the industry–academia ecosystem.
                </p>
                <p className={styles.leaderBio}>
                  With expertise in strategic operations, program management, and research coordination, she plays a key role in ensuring excellence, scalability, and sustainable growth within the organization.
                </p>
              </motion.div>
            </div>

            {/* Profile image (RIGHT on Desktop, order-1 on mobile) */}
            <div className="col-lg-5 text-center order-1 order-lg-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.teamImgWrapper}
              >
                <img
                  src={laxmiImg}
                  alt="Laxmi Chandolia - Director & COO"
                  className={styles.teamImg}
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LEADER 3: PARDEEP SINGH ================= */}
      <section className={`${styles.leaderSection} bg-white`}>
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Profile image (LEFT) */}
            <div className="col-lg-5 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.teamImgWrapper}
              >
                <img
                  src={pardeepImg}
                  alt="Pardeep Singh - Director & CTO"
                  className={styles.teamImg}
                />
              </motion.div>
            </div>

            {/* Profile Content (RIGHT) */}
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className={styles.leaderName}>Pardeep Singh</h2>
                <h5 className={styles.leaderRole}>Strategic Innovation & Technology Head </h5>

                {/* Professional tags */}
                <div className={styles.badgeContainer}>
                  <span className={`${styles.customBadge} ${styles.badgeGold}`}>Co-Founder & CTO, SafeQbit</span>
                  <span className={`${styles.customBadge} ${styles.badgeAzure}`}>Visvesvaraya Senior Research Fellow, DU</span>
                </div>

                <p className={styles.leaderBio}>
                  Pardeep Singh is a technology strategist and research-driven innovator with expertise in post-quantum cryptography and quantum-safe cybersecurity. As the Director, Co-Founder & CTO of SafeQbit Technologies Pvt. Ltd., he leads technology landscape, cryptographic product innovation, and secure digital solutions development.
                </p>
                <p className={styles.leaderBio}>
                  As a Visvesvaraya Senior Research Fellow at the University of Delhi, he actively contributes to advanced research in post-quantum cryptography (PQC), hybrid classical-to-PQC transition frameworks, and lightweight cryptographic primitives for critical communication systems.
                </p>
                <p className={styles.leaderBio}>
                  He plays a pivotal role in integrating research excellence with real-world cryptographic deployment, ensuring scalable, quantum-safe, and standards-compliant solutions for academia, enterprise, and government sectors.
                </p>

                <div className="mt-4">
                  <a href="mailto:pardeep177601@gmail.com" className={styles.contactLink}>
                    <i className="bi bi-envelope-fill" aria-hidden="true"></i> pardeep177601@gmail.com
                  </a>
                </div>
              </motion.div>
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
