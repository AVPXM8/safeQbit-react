import React from 'react';
import logoImg from '../assets/images/dark4x.webp';

export default function BrandLogo({ className = '', size = 48 }) {
  return (
    <div className={`brand-logo-component ${className}`} style={{ width: size, height: size }}>
      <img 
        src={logoImg} 
        className="brand-logo-img w-100 h-100" 
        alt="SafeQbit Logo" 
        style={{ objectFit: 'contain' }}
      />
      <span className="tm-mark">TM</span>
    </div>
  );
}
