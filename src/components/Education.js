import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Learning</span>
          <h2 className="section-title">Education &amp; <span className="highlight">Training</span></h2>
          <p className="section-sub">A journey of continuous growth and academic excellence.</p>
        </div>
        <div className="timeline">
          <div className="timeline-item reveal reveal-delay-1">
            <div className="timeline-date">2023 – 2026</div>
            <div className="timeline-content">
              <h3>M.Sc. Artificial Intelligence &amp; Soft Computing</h3>
              <div className="company">Yazd University · Yazd, Iran</div>
              <p>
                Research focus: Computer Vision (CNNs) for diabetic retinopathy recognition.
                Thesis aimed at advancing AI-driven medical diagnostics.
              </p>
            </div>
          </div>
          <div className="timeline-item reveal reveal-delay-2">
            <div className="timeline-date">2016 – 2019</div>
            <div className="timeline-content">
              <h3>B.Sc. Computer Science — Software Engineering</h3>
              <div className="company">Kabul University · Kabul, Afghanistan</div>
              <p>
                Graduated with a focus on software engineering, web development, and databases.
                Actively participated in ICPC programming contests and student unions.
              </p>
            </div>
          </div>
          <div className="timeline-item reveal reveal-delay-3">
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>Full-Stack Development Program</h3>
              <div className="company">Microverse · Remote</div>
              <p>
                Intensive remote program covering modern full-stack development with React, Ruby,
                Node.js, and collaborative pair programming.
                <a href="https://www.credential.net/44ec42e7-99cd-4290-b3cc-9068c947fb4a" target="_blank" rel="noopener noreferrer"> View Credential</a>
              </p>
            </div>
          </div>
          <div className="timeline-item reveal reveal-delay-4">
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>TOEFL iBT — Score 105</h3>
              <div className="company">ETS</div>
              <p>
                Advanced English proficiency (C1 level). Listening 28 · Reading 27 · Speaking 25 · Writing 25.
                <a href="#" target="_blank" rel="noopener noreferrer"> View Score Report</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;