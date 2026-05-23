import React, { useRef, useState, useEffect } from 'react';
import cdacImg from '../assets/images/cdaclogo.jpeg';
import powergridImg from '../assets/images/PowerGrid.png';
import iqsecImg from '../assets/images/iqsec.png';
import bharat5gImg from '../assets/images/Bharat5g.png';
import bisagImg from '../assets/images/BISAG.png';
import duccImg from '../assets/images/ducc.png';
import tcilImg from '../assets/images/tcil.png';
import iitmImg from '../assets/images/iitm.png';
import vdtImg from '../assets/images/vdt.png';
import prakharImg from '../assets/images/prakhar.png';
import uboraImg from '../assets/images/Ubora.png';
import sigroupImg from '../assets/images/SiGroup.png';
import diplImg from '../assets/images/DipL.png';

const collaborators = [
  { img: cdacImg, name: 'C-DAC' },
  { img: powergridImg, name: 'PowerGrid India' },
  { img: iqsecImg, name: 'iQSec Labs Private Limited' },
  { img: bharat5gImg, name: 'Bharat 5G Labs (DoT, GoI)' },
  { img: bisagImg, name: 'BISAG-N India' },
  { img: duccImg, name: 'Delhi University Computer Centre' },
  { img: tcilImg, name: 'TCIL – Govt. of India Enterprise' },
  { img: iitmImg, name: 'Samgnya Tech Foundation' },
  { img: vdtImg, name: 'VDT PIS Pvt. Ltd.' },
  { img: prakharImg, name: 'Prakhar Software Solutions Ltd.' },
  { img: uboraImg, name: 'Ubora Systems and Solutions' },
  { img: sigroupImg, name: 'Supreme International Group (SIG) sarl' },
  { img: diplImg, name: 'Deccan Infotech (P) Ltd' }
];

export default function Collaborators() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  const ITEM_WIDTH = 184; // 160 width + 24 gap (matching CSS)

  const handleNext = () => {
    setIsPaused(true);
    const track = trackRef.current;
    if (!track) return;

    let currentOffset = offset + ITEM_WIDTH;
    const halfWidth = collaborators.length * ITEM_WIDTH;
    if (currentOffset >= halfWidth) {
      currentOffset = 0;
    }
    setOffset(currentOffset);
  };

  const handlePrev = () => {
    setIsPaused(true);
    const track = trackRef.current;
    if (!track) return;

    let currentOffset = offset - ITEM_WIDTH;
    if (currentOffset < 0) {
      currentOffset = (collaborators.length - 1) * ITEM_WIDTH;
    }
    setOffset(currentOffset);
  };

  // Automatically resume animation after 3 seconds of inactivity
  useEffect(() => {
    if (!isPaused) return;

    const timer = setTimeout(() => {
      setIsPaused(false);
      setOffset(0); // reset position to let pure CSS take over again
    }, 3000);

    return () => clearTimeout(timer);
  }, [isPaused, offset]);

  // CSS module / raw styling injects for standard infinite scroll
  return (
    <section className="trusted-section py-5 my-3 reveal-up">
      <div className="container text-center">
        <h3 className="fw-bold mb-4" style={{ color: '#021061', fontSize: '28px' }}>
          Our Collaborators
        </h3>

        <div className="collab-slider-wrapper position-relative px-5 d-flex align-items-center">
          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            className="collab-arrow collab-arrow-left position-absolute"
            style={{ left: 0, zIndex: 10, background: 'rgba(2, 16, 97, 0.08)', border: 'none', borderRadius: '50%', width: 40, height: 40 }}
            aria-label="Previous Collaborator"
          >
            <i className="bi bi-chevron-left" style={{ color: '#021061', fontSize: '18px' }}></i>
          </button>

          {/* INFINITE TRACK WRAPPER */}
          <div className="logo-slider overflow-hidden w-100 py-3">
            <div
              ref={trackRef}
              className="logo-track d-flex gap-4"
              style={{
                animation: isPaused ? 'none' : 'scrollTicker 35s linear infinite',
                transform: isPaused ? `translateX(-${offset}px)` : 'none',
                width: `${collaborators.length * 2 * ITEM_WIDTH}px`
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Render items twice for a perfect looping ticker */}
              {[...collaborators, ...collaborators].map((collab, index) => (
                <div
                  key={index}
                  className="logo-item text-center d-flex flex-column align-items-center justify-content-center"
                  style={{ width: 160, flexShrink: 0 }}
                >
                  <div
                    className="logo-img-box d-flex align-items-center justify-content-center bg-white p-3 rounded-4 shadow-sm"
                    style={{ width: 120, height: 90, border: '1px solid rgba(2, 16, 97, 0.06)' }}
                  >
                    <img
                      src={collab.img}
                      className="brand-logo img-fluid"
                      alt={collab.name}
                      style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <span
                    className="logo-subtitle mt-2 d-block text-muted text-truncate"
                    style={{ fontSize: '12px', fontWeight: '600', maxWidth: '100%' }}
                  >
                    {collab.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            className="collab-arrow collab-arrow-right position-absolute"
            style={{ right: 0, zIndex: 10, background: 'rgba(2, 16, 97, 0.08)', border: 'none', borderRadius: '50%', width: 40, height: 40 }}
            aria-label="Next Collaborator"
          >
            <i className="bi bi-chevron-right" style={{ color: '#021061', fontSize: '18px' }}></i>
          </button>
        </div>
      </div>

      {/* Embedded style block to ensure smooth animation */}
      <style>{`
        @keyframes scrollTicker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${collaborators.length * ITEM_WIDTH}px);
          }
        }
        .collab-arrow:hover {
          background: rgba(2, 16, 97, 0.15) !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
