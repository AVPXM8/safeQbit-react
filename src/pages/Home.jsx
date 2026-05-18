import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

// Import slider components
import Collaborators from '../components/Collaborators';

// Import images
import newsImg from '../assets/images/news.png';
import teamImg from '../assets/images/team.png';
import ompalsirImg from '../assets/images/ompalsir.png';
import pradeepsirImg from '../assets/images/pradeepsir.png';
import slider1Img from '../assets/images/slider1.png';
import slider2Img from '../assets/images/slider2.png';
import slider3Img from '../assets/images/slider3.png';
import slider4Img from '../assets/images/slider4.png';
import slider5Img from '../assets/images/slider5.png';
import slider6Img from '../assets/images/slider6.png';
import mvpWinnersImg from '../assets/images/MVP_Stage_Winners.png';
import finalWinnerImg from '../assets/images/final_stage_winner .png';
import brandLogoWebp from '../assets/images/dark4x.webp';

const slides = [
  { img: newsImg, alt: 'SafeQbit Recent Updates & Collaborations' },
  { img: teamImg, alt: 'SafeQbit Core Working Team' },
  { img: ompalsirImg, alt: 'Dr. Om Pal - Director & CEO presentation' },
  { img: pradeepsirImg, alt: 'Pradeep Singh - Director & CTO presentation' },
  { img: slider1Img, alt: 'Post-Quantum security solution recognition' },
  { img: slider2Img, alt: 'Award presentation ceremony' },
  { img: slider3Img, alt: 'Cyber Security Grand Challenge 2.0 MVP Stage' },
  { img: slider4Img, alt: 'Recognition from DSCI & MeitY' },
  { img: slider5Img, alt: 'Startup India DPIIT Recognition' },
  { img: slider6Img, alt: 'PQCAuthentica Research Initiative' }
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto-play slideshow logic
  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <div>
      {/* ================= SLIDER & ACTIVITY ROW ================= */}
      <div className={`${styles.homepageContainer} container-fluid mt-3`}>
        <div className="row g-4 align-items-stretch w-100 m-0">
          
          {/* SLIDESHOW (LEFT) */}
          <div className="col-lg-8 col-md-12">
            <div 
              className={styles.sliderSection}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className={styles.slider}>
                <div 
                  className={styles.slides}
                  style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                >
                  {slides.map((slide, i) => (
                    <div 
                      key={i} 
                      className={`${styles.slide} ${i === slideIndex ? styles.activeSlide : ''}`}
                    >
                      <img src={slide.img} className="img-fluid" alt={slide.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY (RIGHT) */}
          <div className="col-lg-4 col-md-12">
            <div className={styles.newsSection}>
              <div className={styles.newsHeader}>
                <h3 className={styles.newsTitle}>Recent Activity</h3>
                <span className={styles.newsPill}>Updates</span>
              </div>

              <div className={styles.activityList}>
                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} aria-hidden="true">🏆</div>
                  <div className={styles.activityBody}>
                    <div className={styles.activityHeading}>
                      NQM Consortium Collaboration – PQCAuthentica
                    </div>
                    <div className={styles.activityText}>
                      Partnering with IIT Madras, C-DOT, and Samgnya Foundation to advance PQCAuthentica, our lightweight post-quantum authentication research initiative.
                    </div>
                  </div>
                </div>

                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} aria-hidden="true">🏆</div>
                  <div className={styles.activityBody}>
                    <div className={styles.activityHeading}>
                      Cyber Security Grand Challenge 2.0 — Data Security Category (Winners)
                    </div>
                    <div className={styles.activityText}>
                      Celebrating excellence and innovation in data security at the Final Product Stage.
                    </div>
                  </div>
                </div>

                <div className={styles.activityItem}>
                  <div className={styles.activityIcon} aria-hidden="true">🏅</div>
                  <div className={styles.activityBody}>
                    <div className={styles.activityHeading}>
                      Recognized by MeitY & DSCI for cybersecurity excellence
                    </div>
                    <div className={styles.activityText}>
                      Startup recognition for impactful innovation and secure-by-design outcomes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-lg-6">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.9, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="fs-5 text-white-50 mb-2"
              >
                If Excellence is your Preference,
              </motion.p>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={styles.heroHeading}
              >
                Choose our <br />
                <span style={{ color: '#4AAFFA' }}>Research-Powered</span> <br />
                Cybersecurity Services!
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={styles.heroDesc}
              >
                We build a knowledge-driven community focused on awareness, education, and the adoption of post-quantum cybersecurity technologies.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={styles.heroHighlights}
                aria-label="Key Highlights"
              >
                <span className={styles.heroHighlight}>Post‑Quantum Readiness</span>
                <span className={styles.heroHighlight}>Security Assessments</span>
                <span className={styles.heroHighlight}>Training & Workshops</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                  <Link to="/contact" className="btn btn-premium mt-3">
                    Connect Now <i className="bi bi-arrow-right-circle-fill ms-2"></i>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* HERO STATIC IMAGE (RIGHT) */}
            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="d-flex justify-content-center align-items-center"
              >
                <img 
                  src={brandLogoWebp} 
                  className="img-fluid" 
                  alt="SafeQbit Large Emblem" 
                  style={{ width: 'min(330px, 90%)', filter: 'drop-shadow(0 15px 45px rgba(0,0,0,0.3))' }}
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RECOGNITION SECTION ================= */}
      <section className="py-5 bg-white">
        <div className="container py-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.recognitionHeading}
          >
            Recognized Among The Best Cyber Security Service Providers.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className={`${styles.recognitionDesc} mt-3 mb-5`}
          >
            Safeqbit Startup Recognition by the Data Security Council of India (DSCI) and Ministry of Electronics & Information Technology (MeitY), GoI at CSGC2.0 as MVP Stage Winners and Final Product Stage Winners 🏆
          </motion.p>

          <div className="row mt-5 g-4 justify-content-center">
            {/* MVP STAGE */}
            <div className="col-lg-6 text-center mb-4">
              <h5 className="fw-bold mb-3 text-navy">🏅 MVP Stage Winners</h5>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.awardOuterWrapper}
              >
                <div className={styles.awardRevealContainer}>
                  <img src={mvpWinnersImg} className={styles.awardImg} alt="MVP Stage Winners" />
                </div>
              </motion.div>
            </div>

            {/* FINAL STAGE */}
            <div className="col-lg-6 text-center mb-4">
              <h5 className="fw-bold mb-3 text-navy">🏆 Final Product Stage Winners</h5>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.awardOuterWrapper}
              >
                <div className={styles.awardRevealContainer}>
                  <img src={finalWinnerImg} className={styles.awardImg} alt="Final Product Winners" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-5" style={{ background: '#f5f8ff' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h3 className="fw-bold display-6" style={{ color: '#021061' }}>Our Services</h3>
            <p className="text-muted fs-5 mt-2 max-width-600 mx-auto text-center">
              We are a team of innovative and proactive digital security experts delivering research-driven cybersecurity solutions.
            </p>
          </div>

          <div className="row g-4 justify-content-center mt-3">
            {[
              "Post-Quantum Cryptography Solutions",
              "Cybersecurity Consulting & Advisory",
              "Research And Development (R&D)",
              "Security Tools & Platforms",
              "Training And Workshops"
            ].map((service, index) => (
              <div key={index} className="col-lg col-md-4 col-sm-6 col-12">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={styles.serviceCard}
                >
                  <h5>{service}</h5>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COLLABORATORS TICKER ================= */}
      <Collaborators />

      {/* ================= WHY US (STATS) SECTION ================= */}
      <section className={styles.whySection}>
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5"
          >
            Why Us
          </motion.h2>

          <div className={styles.statsRow}>
            <div className={styles.statsItem}>
              <h3>DPIIT Registered Startup</h3>
              <p>Recognised by Department for Promotion of Industry and Internal Trade, Government of India</p>
            </div>

            <div className={styles.statsItem}>
              <h3>National Recognition by Government of India</h3>
              <p>Honoured for excellence in cybersecurity innovation</p>
            </div>

            <div className={styles.statsItem}>
              <h3>National Winner – Data Security Category</h3>
              <p>Awarded for leadership in secure digital transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS SECTION ================= */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <h3 className="text-center fw-bold mb-5" style={{ color: '#021061', fontSize: '28px' }}>
            Our Highlights
          </h3>

          <div className="row justify-content-center g-4 mt-3">
            <div className="col-lg-4 col-md-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.highlightCard}
              >
                <h4>Achievements</h4>
                <p>
                  Developed first Govt of India recognised Post-Quantum security solution to protect the digital infrastructure from Quantum threats.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-4 col-md-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.highlightCard}
              >
                <h4>Awards</h4>
                <p>
                  We have received numerous awards and accolades for leading digital cybersecurity security-by-design.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-4 col-md-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.highlightCard}
              >
                <h4>Countries</h4>
                <p>
                  We are making a global impact, driving the adoption of post-quantum cybersecurity frameworks internationally.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}
      <section className={styles.socialSection}>
        <div className="container text-center py-3">
          <h3 className={styles.socialTitle}>SOCIAL MEDIA</h3>
          <p className={styles.socialDesc}>
            Join us on LinkedIn and never miss a beat on what's going on in the world of quantum-safe cybersecurity.
          </p>
          <div className={styles.socialIcons}>
            <a 
              href="https://www.linkedin.com/company/safeqbit-technologies-private-limited/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className={styles.ctaSection}>
        <div className="container text-center py-3">
          <h2 className={styles.ctaTitle}>
            EXPLORE THE CYBER-SAFE WORLD WITH US!
          </h2>
          <p className={styles.ctaDesc}>
            Our approach to cyber security is unique. We have grown to strength solely based on being highly skilled, research-focused, and community-oriented.
          </p>
        </div>
      </section>

    </div>
  );
}
