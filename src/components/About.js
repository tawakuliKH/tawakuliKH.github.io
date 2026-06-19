import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Building the <span className="highlight">future</span>, one line at a time</h2>
          <p className="section-sub">
            I'm a computer scientist with a passion for AI, medical diagnostics, and full-stack engineering.
          </p>
        </div>
        <div className="glass-card reveal reveal-delay-1" style={{ padding: '40px 36px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '800px' }}>
            I graduated from Kabul University in 2019 with a B.Sc. in Software Engineering, then earned my Master's
            in <strong>Artificial Intelligence &amp; Soft Computing</strong> from Yazd University, Iran (2026).
            My research focuses on <strong>Computer Vision (CNNs) for diabetic retinopathy detection</strong> —
            leveraging AI to advance medical diagnostics.
            <br /><br />
            I've worked as a Database Manager, Web Developer, and Solutions Developer across Afghanistan,
            and completed an intensive Full-Stack program at <strong>Microverse</strong>. I'm fluent in Persian,
            Pashto (C2), and English (C1 — TOEFL 105).
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '28px', paddingTop: '24px', borderTop: '1px solid var(--border-light)' }}>
            <div><i className="fas fa-map-pin" style={{ color: 'var(--accent)', width: '24px' }}></i> Kabul, Afghanistan</div>
            <div><i className="fas fa-calendar-alt" style={{ color: 'var(--accent)', width: '24px' }}></i> Born 25 Jan 1998</div>
            <div><i className="fas fa-graduation-cap" style={{ color: 'var(--accent)', width: '24px' }}></i> M.Sc. AI &amp; Soft Computing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;