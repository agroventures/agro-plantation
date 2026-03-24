const HomeHeroSection = () => {
  return (
    <div className="hero-breakout">
      <section className="hero-section">
        <video
          className="hero-video"
          src="/images/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        />

        <div className="hero-overlay" />
        <div className="hero-stripe" />
        <div className="hero-grain" />

        <div className="container hero-container">
          <div className="row">
            <div className="col-md-10 col-sm-12">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                <span className="hero-eyebrow-text">
                  Sri Lanka's Premier Agro Plantations
                </span>
                <span className="hero-eyebrow-line" />
              </div>
              <div class="container">
                <h1 className="hero-title">
                  <span className="hero-title-line1">Growing</span>
                  <span className="hero-title-line2">Nature's</span>
                  <span className="hero-title-line3">Finest</span>
                </h1>
                <p className="hero-subtitle">
                  Sustainable agriculture rooted in tradition, driven by
                  innovation. From our plantations to the world.
                </p>

                {/* ── Award Badges — above info bar ── */}
                <div className="hero-awards-row">
                  <div className="hero-award-item">
                   
                      <img
                        src="/images/gwp.png"
                        alt="Best Agro Export 2023"
                        className="hero-award-img"
                      />
                      {/* <span className="hero-award-label">Great Place To Work - 2025</span> */}
                  
                    <div className="hero-award-connector" />
                  </div>
                  <div className="hero-award-item">
                    {/* <div className="hero-award-badge"> */}
                      <img
                        src="/images/certificate2.png"
                        alt="Excellence in Sustainability"
                        className="hero-award-img"
                      />
                      {/* <span className="hero-award-label">Best Workplaces in Manufacturing & Production - 2026</span> */}
                    {/* </div> */}
                    <div className="hero-award-connector" />
                  </div>
                </div>
              </div>

              <div className="hero-cta-wrap">
                <a href="/about-us" className="hero-btn-primary">
                  <span>Discover Our Story</span>
                  <i className="fa fa-arrow-right hero-btn-icon" />
                </a>
                <a href="/contact-us" className="hero-btn-secondary">
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-label">Scroll</span>
        </div>

        <div className="hero-info-bar">
          <div className="container">
            <div className="hero-info-inner">
              <div className="hero-info-item">
                <span className="hero-info-number">10+</span>
                <span className="hero-info-label">Years of Excellence</span>
              </div>
              <div className="hero-info-divider" />
              <div className="hero-info-item">
                <span className="hero-info-number">645+</span>
                <span className="hero-info-label">Team Members</span>
              </div>
              <div className="hero-info-divider" />
              <div className="hero-info-item">
                <span className="hero-info-number">10+</span>
                <span className="hero-info-label">Awards</span>
              </div>
              <div className="hero-info-divider" />
              <div className="hero-info-item">
                <span className="hero-info-number">12,440+</span>
                <span className="hero-info-label">Clients' Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeroSection;
