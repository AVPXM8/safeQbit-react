import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/Product.module.css';

export default function Products() {
  const [activeTab, setActiveTab] = useState('overview');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      // Compensate for sticky header (76px)
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Synchronize scroll position with active tab highlights
  useEffect(() => {
    const sections = ['overview', 'capabilities', 'architecture', 'use-cases', 'standards'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            PQCTransitSecure™
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="page-header-subtitle"
          >
            Hybrid Quantum-Safe Communication Platform
          </motion.p>
        </div>
      </section>

      {/* ================= PRODUCT INTRO ================= */}
      <section className={styles.productIntroSection}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <span className={styles.productKicker}>Product</span>
              <p className={styles.productLead}>
                Enterprise-grade cryptographic infrastructure enabling a secure transition to post-quantum security without disrupting existing systems.
              </p>

              <div className={styles.productMeta} aria-label="Product Features">
                <div className={styles.productMetaItem}>
                  <i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
                  <span>Hybrid PQC + Classical</span>
                </div>
                <div className={styles.productMetaItem}>
                  <i className="bi bi-arrow-repeat" aria-hidden="true"></i>
                  <span>Backward compatible</span>
                </div>
                <div className={styles.productMetaItem}>
                  <i className="bi bi-diagram-3-fill" aria-hidden="true"></i>
                  <span>API / Middleware</span>
                </div>
              </div>

              <div className={styles.productCta}>
                <button 
                  onClick={() => scrollToSection('overview')} 
                  className="btn btn-premium styles.productCtaSecondary"
                  style={{ border: '1.5px solid #021061' }}
                >
                  Explore Details
                </button>
              </div>

              {/* Sub-Navigation Tabs */}
              <nav className={styles.productNav} aria-label="Product Sections Menu">
                {[
                  { id: 'overview', name: 'Overview' },
                  { id: 'capabilities', name: 'Capabilities' },
                  { id: 'architecture', name: 'Architecture' },
                  { id: 'use-cases', name: 'Use Cases' },
                  { id: 'standards', name: 'Standards' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`${styles.productNavLink} ${activeTab === tab.id ? styles.activeNavLink : ''}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT PAGE SECTIONS ================= */}
      <section className={styles.productPage}>
        <div className="container">

          {/* 1. OVERVIEW */}
          <div className={styles.productSection} id="overview">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className={styles.productBlock}
            >
              <div className="row align-items-center g-4">
                <div className="col-lg-6">
                  <h2 className={styles.productH2}>Overview</h2>
                  <p className={styles.productP}>
                    PQCTransitSecure™ is a hybrid cryptographic security platform that protects critical communications against both classical and quantum threats—without disrupting existing systems.
                  </p>
                  <p className={styles.productP}>
                    Our solution ensures that your data remains secure today and resilient against the quantum computing breakthroughs of tomorrow, providing a seamless bridge to the next generation of cybersecurity.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className={styles.productBulletList} aria-label="Key points">
                    <div className={styles.productBullet}>
                      <i className="bi bi-check2-circle" aria-hidden="true"></i>
                      <span>Post‑Quantum Cryptography (PQC) + classical standards</span>
                    </div>
                    <div className={styles.productBullet}>
                      <i className="bi bi-check2-circle" aria-hidden="true"></i>
                      <span>Backward‑compatible deployment for phased migration</span>
                    </div>
                    <div className={styles.productBullet}>
                      <i className="bi bi-check2-circle" aria-hidden="true"></i>
                      <span>End‑to‑end protection: encryption + digital signatures</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 2. CAPABILITIES */}
          <div className={styles.productSection} id="capabilities">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className={`${styles.productBlock} ${styles.productBlockTint}`}
            >
              <h2 className={styles.productH2}>Key Capabilities</h2>
              <div className={styles.productCapGrid}>
                
                <div className={styles.productCap}>
                  <div className={styles.productCapIcon} aria-hidden="true">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div>
                    <div className={styles.productCapTitle}>Quantum‑resilient security</div>
                    <div className={styles.productCapText}>
                      Advanced protection against future quantum adversaries using NIST-standardized algorithms.
                    </div>
                  </div>
                </div>

                <div className={styles.productCap}>
                  <div className={styles.productCapIcon} aria-hidden="true">
                    <i className="bi bi-layers"></i>
                  </div>
                  <div>
                    <div className={styles.productCapTitle}>Hybrid cryptography</div>
                    <div className={styles.productCapText}>
                      Combines established classical standards with cutting-edge PQC for dual-layer defense.
                    </div>
                  </div>
                </div>

                <div className={styles.productCap}>
                  <div className={styles.productCapIcon} aria-hidden="true">
                    <i className="bi bi-plug"></i>
                  </div>
                  <div>
                    <div className={styles.productCapTitle}>Seamless Integration</div>
                    <div className={styles.productCapText}>
                      Deployable as middleware or API without requiring a complete overhaul of your existing infrastructure.
                    </div>
                  </div>
                </div>

                <div className={styles.productCap}>
                  <div className={styles.productCapIcon} aria-hidden="true">
                    <i className="bi bi-link-45deg"></i>
                  </div>
                  <div>
                    <div className={styles.productCapTitle}>Downgrade protection</div>
                    <div className={styles.productCapText}>
                      Patented Wrap‑and‑Sign cryptographic binding to prevent protocol downgrade attacks.
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          <div className={styles.productDivider}></div>

          {/* 3. ARCHITECTURE & DEPLOYMENT */}
          <div className="row g-4 mb-5" id="architecture">
            <div className="col-lg-6">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.productCard}
              >
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-diagram-3 text-info me-3 fs-3" aria-hidden="true"></i>
                  <h3 className="fw-bold mb-0 text-navy">Architecture</h3>
                </div>
                <p className="text-muted fs-6" style={{ lineHeight: 1.7 }}>
                  Dual security layers: hybrid authenticated encryption + hybrid digital signatures to maintain confidentiality, integrity, and strong authentication across migration phases.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6" id="deployment">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.productCard}
              >
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-rocket-takeoff text-info me-3 fs-3" aria-hidden="true"></i>
                  <h3 className="fw-bold mb-0 text-navy">Deployment</h3>
                </div>
                <p className="text-muted fs-6" style={{ lineHeight: 1.7 }}>
                  Delivered as an API-based integration or middleware security layer, compatible with web apps, backend systems, and legacy communication protocols.
                </p>
              </motion.div>
            </div>
          </div>

          <div className={styles.productDivider}></div>

          {/* 4. USE CASES */}
          <div className={styles.productSection} id="use-cases">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className={styles.productBlock}
            >
              <h2 className={`${styles.productH2} mb-5`}>Use Cases</h2>
              <div className="row g-4 mt-2">
                
                <div className="col-md-6 col-lg-3">
                  <div className={styles.productMiniCard}>
                    <i className="bi bi-shield-shaded" aria-hidden="true"></i>
                    <h4 className={styles.productH3}>Government & Defense</h4>
                    <p className="text-muted fs-6 mb-0">Secure communications and strategic exchange for high-stakes operations.</p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className={styles.productMiniCard}>
                    <i className="bi bi-bank" aria-hidden="true"></i>
                    <h4 className={styles.productH3}>Banking & Finance</h4>
                    <p className="text-muted fs-6 mb-0">Transaction security and long-term data protection for global financial systems.</p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className={styles.productMiniCard}>
                    <i className="bi bi-broadcast" aria-hidden="true"></i>
                    <h4 className={styles.productH3}>Telecom & Infrastructure</h4>
                    <p className="text-muted fs-6 mb-0">Secure signaling and network protection for critical communication backbones.</p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className={styles.productMiniCard}>
                    <i className="bi bi-hdd-network" aria-hidden="true"></i>
                    <h4 className={styles.productH3}>Enterprise Systems</h4>
                    <p className="text-muted fs-6 mb-0">API security and secure messaging for modern cloud-native enterprises.</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          <div className={styles.productDivider}></div>

          {/* 5. STANDARDS ALIGNMENT & FINAL CTA */}
          <div className="row g-4" id="standards">
            
            <div className="col-lg-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${styles.productBlock} ${styles.productBlockTint}`}
              >
                <h2 className={styles.productH2}>Standards Alignment</h2>
                <div className={`${styles.productBulletList} mt-4`}>
                  <div className={styles.productBullet}>
                    <i className="bi bi-check2-circle" aria-hidden="true"></i>
                    <span>NIST Post-Quantum Cryptography (PQC)</span>
                  </div>
                  <div className={styles.productBullet}>
                    <i className="bi bi-check2-circle" aria-hidden="true"></i>
                    <span>FIPS-compliant cryptographic primitives</span>
                  </div>
                  <div className={styles.productBullet}>
                    <i className="bi bi-check2-circle" aria-hidden="true"></i>
                    <span>Enterprise security best practices</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.productFinalCta}
              >
                <div className={styles.productFinalCtaInner}>
                  <div className="cta-text text-start">
                    <h2 className="fw-bold mb-3">Ready to Secure Your Future?</h2>
                    <p className="fs-6">Discuss integration options and a phased post‑quantum transition plan today.</p>
                  </div>
                  <Link to="/contact" className="btn btn-light px-4 py-3 fw-bold rounded-5 shadow mt-3 mt-lg-0">
                    Contact Our Experts
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
