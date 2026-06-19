import React from 'react';

const Recommendations = () => {
  return (
    <section id="recommendations">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Recommendations</h2>
          <p className="section-sub">What colleagues, managers, and mentors say about working with me.</p>
        </div>
        <div className="rec-grid">
          {/* Recommendation 3 - Dr. Jamal Zarepour (NEW) */}
          <div className="rec-card reveal reveal-delay-3">
            <div className="quote"><i className="fas fa-quote-left"></i></div>
            <p>Khadim was an exceptional student in the Master's program in Artificial Intelligence and Soft Computing at Yazd University. His research on diabetic retinopathy recognition using CNNs demonstrates his strong analytical skills and dedication to advancing medical diagnostics through AI. He is a diligent researcher with a bright future ahead.</p>
            <div className="rec-footer">
              <div className="rec-avatar">JZ</div>
              <div>
                <div className="rec-name">Dr. Jamal Zarepour</div>
                <div className="rec-title">Supervisor · Yazd University</div>
                <div style={{ marginTop: '4px' }}>
                  <a href="mailto:zarepourjamal@yazd.ac.ir" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <i className="fas fa-envelope" style={{ marginRight: '4px' }}></i> zarepourjamal@yazd.ac.ir
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation 4 - Dr. Elham Hereftah Abbasi (NEW) */}
          <div className="rec-card reveal reveal-delay-4">
            <div className="quote"><i className="fas fa-quote-left"></i></div>
            <p>I had the pleasure of advising Khadim during his Master's studies at Yazd University. He consistently demonstrated strong problem-solving abilities and a deep understanding of machine learning and computer vision concepts. His work on medical image analysis is thorough and impactful. I highly recommend him for any AI or software development role.</p>
            <div className="rec-footer">
              <div className="rec-avatar">EA</div>
              <div>
                <div className="rec-name">Dr. Elham Hereftah Abbasi</div>
                <div className="rec-title">Advisor · Yazd University</div>
                <div style={{ marginTop: '4px' }}>
                  <a href="mailto:e.abbasi@yazd.ac.ir" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <i className="fas fa-envelope" style={{ marginRight: '4px' }}></i> e.abbasi@yazd.ac.ir
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Recommendation 1 - Michelle Pelayo */}
          <div className="rec-card reveal reveal-delay-1">
            <div className="quote"><i className="fas fa-quote-left"></i></div>
            <p>Khadim is a dedicated and skilled developer. As HR Manager at Westex Medical Services, I witnessed his exceptional work ethic and ability to manage complex database systems. He is a reliable team player and always happy to go the extra mile.</p>
            <div className="rec-footer">
              <div className="rec-avatar">MP</div>
              <div>
                <div className="rec-name">Michelle Pelayo</div>
                <div className="rec-title">HR Manager · Westex Medical Services</div>
                <div style={{ marginTop: '4px' }}>
                  <a href="mailto:mitch.pelayo@gmail.com" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <i className="fas fa-envelope" style={{ marginRight: '4px' }}></i> mitch.pelayo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation 2 - Dr. Mohammad Ishaq Zwan */}
          <div className="rec-card reveal reveal-delay-2">
            <div className="quote"><i className="fas fa-quote-left"></i></div>
            <p>I worked closely with Khadim at Zwan Curative Hospital. He developed our entire website and management system with great professionalism and attention to detail. He is proactive, communicative, and delivers high-quality work on time.</p>
            <div className="rec-footer">
              <div className="rec-avatar">IZ</div>
              <div>
                <div className="rec-name">Dr. Mohammad Ishaq Zwan</div>
                <div className="rec-title">CEO · Zwan Curative Hospital</div>
                <div style={{ marginTop: '4px' }}>
                  <a href="mailto:info@zwanmedicalcomplex.com" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <i className="fas fa-envelope" style={{ marginRight: '4px' }}></i> info@zwanmedicalcomplex.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Recommendations;