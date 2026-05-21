import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div class="row">
            {/* BRAND COLUMN */}
            <div className="col-lg-4 col-md-6 footer-column">
              <div className="footer-logo">
                <div className="footer-logo-wrapper">
                  <BrandLogo size={42} />
                  <span className="footer-brand-text ms-2">SafeQbit</span>
                </div>
              </div>
              <p className="footer-desc mt-2">
                Research Powered Cybersecurity Services and Training. Eliminate security threats through our innovative and
                extensive security assessments.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="col-lg-2 col-md-6 footer-column mt-4 mt-lg-0">
              <h6 className="footer-heading">Quick Links</h6>
              <ul className="ps-0">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="col-lg-3 col-md-6 footer-column mt-4 mt-lg-0">
              <h6 className="footer-heading">Services</h6>
              <ul className="ps-0">
                <li><a href="#services">Post-Quantum Cryptography</a></li>
                <li><a href="#services">Consulting & Advisory</a></li>
                <li><a href="#services">Research & Development</a></li>
                <li><a href="#services">Security Tools</a></li>
                <li><a href="#services">Training & Workshops</a></li>
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div className="col-lg-3 col-md-6 footer-column mt-4 mt-lg-0">
              <h6 class="footer-heading">Contact Info</h6>
              <div className="footer-contact-item">
                <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                <div>
                  <strong>Headquarters:</strong><br />
                  F No 6053, Mahagun Mywoods,<br />
                  Sect- 16C, Gr Noida (W),<br />
                  G. B. Nagar – 201318, UP, India
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                <div>
                  <strong>Delhi Office:</strong><br />
                  SafeQbit Technologies Private Limited,<br />
                  Udhmodya Foundation, 5th Floor,<br />
                  Maharishi Kanad Bhawan, North Campus,<br />
                  University of Delhi - 110007
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                <div>
                  <a href="mailto:contact@safeqbit.in" style={{ color: 'inherit', textDecoration: 'none' }}>
                    contact@safeqbit.in
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                <div>
                  <a href="tel:+918929874957" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +91 89298 74957
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* FOOTER BOTTOM BAR */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="mb-0">
              &copy; {currentYear} SafeQbit. All Rights Reserved.
            </p>
            <div className="footer-social-links">
              <a 
                href="https://www.linkedin.com/company/safeqbit-technologies-private-limited/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin" aria-hidden="true"></i> <span>Join us on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
