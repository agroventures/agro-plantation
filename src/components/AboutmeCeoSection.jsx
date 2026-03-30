const AboutmeCEOMessage = () => {
  return (
    <section className="ceo-section">
        <div className="container" style={{ padding: 0 }}>
          <div className="ceo-flex-row">
 
            {/* ── Image column - LEFT on desktop, TOP on mobile ── */}
            <div className="col-md-5 ceo-image-col">
              <img
                src="/images/team/team-ceo.jpg"
                alt="CEO – Mr. Heshan Nanayakkara"
              />
              <div className="ceo-image-tint" />
              <div className="ceo-image-frame" />
              <div className="ceo-badge">
                {/* <div className="ceo-badge-icon">🌿</div> */}
                <div>
                  <div className="ceo-badge-label">Chief Executive Officer</div>
                  <div className="ceo-badge-name">Mr. Heshan Nanayakkara</div>
                </div>
              </div>
            </div>
 
            {/* ── Content column - RIGHT on desktop, BELOW image on mobile ── */}
            <div className="col-md-7 ceo-content-col">
              <span className="ceo-eyebrow">CEO's Message</span>
 
              <h2 className="ceo-title">
                Leading With Purpose,
                <span>Harvesting Impact</span>
              </h2>
 
              <div className="ceo-divider" />
 
              <span className="ceo-quote-mark">&ldquo;</span>
 
              <div className="ceo-body">
                <p>
                  At Agroventures Plantations, leadership isn't just a title -
                  it's a responsibility we bear to every farmer, every community,
                  and every acre of land we cultivate. Since taking on this role,
                  my focus has been on bridging modern agricultural innovation
                  with Sri Lanka's rich farming heritage.
                </p>
                <p>
                  We are building an organization that doesn't just grow crops but
                  grows opportunity. Through technology-driven cultivation,
                  ethical supply chains, and a relentless pursuit of quality, we
                  are writing a new chapter for Sri Lankan agriculture on the
                  global stage. Every harvest is a testament to the dedication of
                  our people and the richness of this land.
                </p>
              </div>
 
              <div className="ceo-stats-row">
                <div className="ceo-stat">
                  <div className="ceo-stat-number">645+</div>
                  <div className="ceo-stat-label">Team Members</div>
                </div>
                <div className="ceo-stat">
                  <div className="ceo-stat-number">10+</div>
                  <div className="ceo-stat-label">Years Experience</div>
                </div>
                <div className="ceo-stat">
                  <div className="ceo-stat-number">12,440+</div>
                  <div className="ceo-stat-label">Clients' Satisfactions</div>
                </div>
              </div>
            </div>
 
          </div>
        </div>
      </section>
  );
};

export default AboutmeCEOMessage;
