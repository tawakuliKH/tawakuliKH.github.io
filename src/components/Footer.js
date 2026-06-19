import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ fontSize: '1.2rem' }}>Khadim<span>.</span></div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
              AI Researcher &amp; Full-Stack Developer
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
              <a href="mailto:tawakuli456@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <i className="fas fa-envelope"></i> tawakuli456@gmail.com
              </a>
              <span style={{ color: 'var(--text-muted)' }}>|</span>
              <a href="tel:+93765074686" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <i className="fas fa-phone"></i> (+93) 765 074 686
              </a>
            </div>
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/mortez-tawakuli-0904818170" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/tawakuliKH" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://wa.me/93765074686" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:tawakuli456@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-light)', marginTop: '32px', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p className="footer-copy">&copy; 2026 Khadim Tawakuli. Crafted with <i className="fas fa-heart" style={{ color: 'var(--accent-secondary)' }}></i></p>
          <p className="footer-copy">Kabul, Afghanistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;