import React from 'react';

const Awards = () => {
  return (
    <section id="awards" style={{ background: 'rgba(17, 22, 39, 0.4)' }}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Honors &amp; <span className="highlight">Awards</span></h2>
          <p className="section-sub">Moments of achievement and impact.</p>
        </div>
        <div className="awards-grid">
          <div className="award-card reveal reveal-delay-1">
            <div className="award-icon"><i className="fas fa-trophy"></i></div>
            <div className="award-content">
              <h4>ICPC Programming Contest — 1st Place</h4>
              <div className="org">ICPC · National Round 2019</div>
              <div className="desc">Led my team to first place in the national round of the prestigious International Collegiate Programming Contest.</div>
            </div>
          </div>
          <div className="award-card reveal reveal-delay-2">
            <div className="award-icon"><i className="fas fa-microphone"></i></div>
            <div className="award-content">
              <h4>Google Cloud Training Award</h4>
              <div className="org">Google · 2019</div>
              <div className="desc">Awarded a Google Nest Mini for outstanding performance in Google Cloud training held at Kabul University.</div>
            </div>
          </div>
          <div className="award-card reveal reveal-delay-3">
            <div className="award-icon"><i className="fas fa-users"></i></div>
            <div className="award-content">
              <h4>iClub Event Coordinator</h4>
              <div className="org">Poly-technic University · 2019</div>
              <div className="desc">Served as Kabul University Coordinator for iClub, an event introducing new technologies to CS students.</div>
            </div>
          </div>
          <div className="award-card reveal reveal-delay-4">
            <div className="award-icon"><i className="fas fa-user-graduate"></i></div>
            <div className="award-content">
              <h4>Student's Union — Information Manager</h4>
              <div className="org">Kabul University · 2017–2019</div>
              <div className="desc">Managed information and communications for the Student's Union, representing and supporting fellow students.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;