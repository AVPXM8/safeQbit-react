import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile navbar on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/product' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar navbar-expand-lg custom-navbar"
    >
      <div className="container-fluid px-3 px-lg-4">
        {/* BRAND */}
        <Link className="navbar-brand d-flex align-items-center brand-logo-component" to="/">
          <BrandLogo size={52} />
          <div className="brand-text-wrapper">
            <span className="brand-text">SafeQbit</span>
            <span className="brand-subtext">Technologies Private Ltd</span>
          </div>
        </Link>

        {/* TOGGLER */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="d-flex flex-column gap-1"
          >
            <span className="navbar-toggler-icon"></span>
          </motion.div>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav gap-lg-2 mt-3 mt-lg-0 align-items-lg-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
              return (
                <li key={link.path} className="nav-item position-relative">
                  <Link 
                    className={`nav-link nav-link-custom ${isActive ? 'text-white' : ''}`} 
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="position-absolute bottom-0 start-0 end-0"
                      style={{
                        height: '3px',
                        background: 'var(--accent-color)',
                        borderRadius: '3px',
                        bottom: '2px'
                      }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
