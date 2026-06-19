import React from 'react';

const Experience = () => {
  return (
    <section id="experience" style={{ background: 'rgba(17, 22, 39, 0.4)' }}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Career</span>
          <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
          <p className="section-sub">From software houses to hospitals — delivering impact through code.</p>
        </div>
        <div className="timeline">
          <div className="timeline-item reveal reveal-delay-1">
            <div className="timeline-date">Nov 2022 – Oct 2023</div>
            <div className="timeline-content">
              <h3>Web Application Developer</h3>
              <div className="company">Zwan Curative Hospital · Kabul</div>
              <p>
                Designed, developed, and maintained a full-functional website with a background database
                including an information system for Zwan Curative Hospital.
                <a href="https://www.zwanmedicalcomplex.com" target="_blank" rel="noopener noreferrer"> zwanmedicalcomplex.com</a>
              </p>
            </div>
          </div>
          <div className="timeline-item reveal reveal-delay-2">
            <div className="timeline-date">Oct 2021 – Oct 2022</div>
            <div className="timeline-content">
              <h3>Database Manager</h3>
              <div className="company">Westex Medical Services · Kabul</div>
              <p>
                Developed and maintained a full-functional database for Westex Medical Services,
                ensuring data integrity, security, and high availability.
              </p>
            </div>
          </div>
          <div className="timeline-item reveal reveal-delay-3">
            <div className="timeline-date">Feb 2019 – Jul 2021</div>
            <div className="timeline-content">
              <h3>Solutions Developer</h3>
              <div className="company">Extra Reliable Software House · Kabul</div>
              <p>
                Designed and developed software solutions and websites for various organizations,
                working across the full stack with PHP, Laravel, JavaScript, and MySQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;