import React from 'react';

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'rgba(17, 22, 39, 0.4)' }}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills &amp; <span className="highlight">Technologies</span></h2>
          <p className="section-sub">Tools and technologies I work with daily.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '16px', color: 'var(--text-secondary)' }}>
              <i className="fas fa-code" style={{ color: 'var(--accent)', marginRight: '10px' }}></i>Technical
            </h4>
            <div className="skills-grid">
              <div className="skill-tag"><i className="fab fa-react"></i>React</div>
              <div className="skill-tag"><i className="fab fa-js"></i>JavaScript</div>
              <div className="skill-tag"><i className="fab fa-node"></i>Node.js</div>
              <div className="skill-tag"><i className="fab fa-python"></i>Python</div>
              <div className="skill-tag"><i className="fas fa-database"></i>MySQL</div>
              <div className="skill-tag"><i className="fab fa-laravel"></i>Laravel</div>
              <div className="skill-tag"><i className="fas fa-cloud"></i>CCNA</div>
              <div className="skill-tag"><i className="fab fa-php"></i>PHP</div>
              <div className="skill-tag"><i className="fab fa-html5"></i>HTML/CSS</div>
              <div className="skill-tag"><i className="fas fa-paint-brush"></i>Photoshop</div>
              <div className="skill-tag"><i className="fas fa-mobile-alt"></i>Android (Basic)</div>
              <div className="skill-tag"><i className="fas fa-code-branch"></i>Agile / Git</div>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '16px', color: 'var(--text-secondary)' }}>
              <i className="fas fa-brain" style={{ color: 'var(--accent)', marginRight: '10px' }}></i>AI &amp; Programming
            </h4>
            <div className="skills-grid">
              <div className="skill-tag"><i className="fas fa-robot"></i>Machine Learning</div>
              <div className="skill-tag"><i className="fas fa-network-wired"></i>Neural Networks</div>
              <div className="skill-tag"><i className="fas fa-chart-line"></i>Data Analysis</div>
              <div className="skill-tag"><i className="fas fa-image"></i>Image Processing</div>
              <div className="skill-tag"><i className="fas fa-eye"></i>Computer Vision</div>
              <div className="skill-tag"><i className="fas fa-code"></i>Python / NumPy</div>
              <div className="skill-tag"><i className="fas fa-gem"></i>Ruby / Rails</div>
              <div className="skill-tag"><i className="fas fa-terminal"></i>Bash / Linux</div>
              <div className="skill-tag"><i className="fas fa-java"></i>Java</div>
              <div className="skill-tag"><i className="fas fa-cogs"></i>Problem Solving</div>
              <div className="skill-tag"><i className="fas fa-users"></i>Pair Programming</div>
              <div className="skill-tag"><i className="fas fa-clock"></i>Time Management</div>
            </div>
          </div>
        </div>
        {/* Languages */}
        <div style={{ marginTop: '40px', padding: '28px 32px', background: 'var(--bg-card)', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-light)', backdropFilter: 'blur(12px)' }}>
          <h4 style={{ fontWeight: '600', marginBottom: '12px', color: 'var(--text-secondary)' }}>
            <i className="fas fa-language" style={{ color: 'var(--accent)', marginRight: '10px' }}></i>Languages
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <div><strong>Persian</strong> <span style={{ color: 'var(--text-muted)' }}>(Native)</span></div>
            <div><strong>Pashto</strong> <span style={{ color: 'var(--text-muted)' }}>(C2 — Proficient)</span></div>
            <div><strong>English</strong> <span style={{ color: 'var(--text-muted)' }}>(C1 — TOEFL 105)</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;