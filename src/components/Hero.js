import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="section-label">Welcome</div>
            <h1>I'm <span className="highlight">Khadim Tawakuli</span></h1>
            <p className="hero-sub">AI Researcher &amp; Full-Stack Developer</p>
            <p className="hero-desc">
              Master's in Artificial Intelligence | Microverse Alum | TOEFL 105
              &bull; Building intelligent systems &amp; beautiful interfaces.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <i className="fas fa-paper-plane"></i> Get in Touch
              </a>
              <a href="#projects" className="btn-outline">
                <i className="fas fa-code"></i> View Work
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>12+</h3>
                <p>Projects</p>
              </div>
              <div className="stat">
                <h3>105</h3>
                <p>TOEFL iBT</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar-frame">
              {/* ✅ REPLACE with your own photo */}
              <img
                src="/my-photo.jpg"
                alt="Khadim Tawakuli"
              />
              <div className="avatar-ring"></div>
              <div className="avatar-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;