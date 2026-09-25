import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
      <section className="hero-section">
        <video
          className="hero-video"
          src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/av-plantations/Website/Home/home-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        />
        <div className="avp-hero__scrim" />
        <div className="container hero-container">
          <div className="row" style={{ position: "relative", zIndex: 2 }}>
            <div className="col-md-10 col-sm-12">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                <span className="hero-eyebrow-text">
                  Sri Lanka's Premier Agro Plantations
                </span>
                <span className="hero-eyebrow-line" />
              </div>
              {/* <div class="container"> */}
              <h1 className="hero-title">
                <span className="hero-title-line1">GROWING AGRICULTURE. </span>
                <span className="hero-title-line2">CREATING</span>
                <span className="hero-title-line3"> LAND OWNERSHIP VALUE.</span>
              </h1>
              <p className="hero-subtitle">
                Acquire agricultural land, retain legal ownership and, where
                applicable, lease your property to Agroventures for professional
                cultivation and agricultural management.
              </p>

              {/* ── Award Badges - above info bar ── */}
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
              {/* </div> */}

              <div className="hero-cta-wrap">
                <Link to="/about-us" className="hero-btn-primary">
                  <span>Explore Agricultural Land</span>
                  <i className="fa fa-arrow-right hero-btn-icon" />
                </Link>
                <a href="#landmodel-section" className="hero-btn-secondary">
                  <span>How the Model Works</span>
                </a>
                <Link to="/contact-us" className="hero-btn-secondary">
                  <span>Contact Agroventures</span>
                </Link>
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
                <span className="hero-info-number">Trusted</span>
                <span className="hero-info-label">Agricultural Partner</span>
              </div>

              <div className="hero-info-divider" />

              <div className="hero-info-item">
                <span className="hero-info-number">Sustainable</span>
                <span className="hero-info-label">Farming Practices</span>
              </div>

              <div className="hero-info-divider" />

              <div className="hero-info-item">
                <span className="hero-info-number">Professional</span>
                <span className="hero-info-label">Land Management</span>
              </div>

              <div className="hero-info-divider" />

              <div className="hero-info-item">
                <span className="hero-info-number">Dedicated</span>
                <span className="hero-info-label">Customer Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HomeHeroSection;
