import { Link } from "react-router-dom";

const AwardsHeaderSection = () => {
  return (
    <div className="awards-hero-wrap">
      <section className="awards-hero">
        
        {/* Background Video */}
        <video
          className="awards-hero-video"
          src="https://res.cloudinary.com/avplantations/video/upload/v1774346476/gg-1_lnwfyx.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlays */}
        <div className="awards-hero-overlay" />
        <div className="awards-hero-gradient" />
        <div className="awards-hero-grain" />

        {/* Corner Frames */}
        <div className="awards-hero-frame awards-hero-frame-tl" />
        <div className="awards-hero-frame awards-hero-frame-br" />

        {/* Floating Decoration */}
        <div className="awards-hero-deco">
          <span className="awards-hero-deco-icon">🏆</span>
        </div>

        {/* Main Content */}
        <div className="container">
          <div className="awards-hero-content">
            {/* Eyebrow Tag */}
            <div className="awards-hero-tag">
              <span className="awards-hero-tag-icon">
                <i className="fa fa-trophy" />
              </span>
              <span className="awards-hero-tag-text">Excellence Recognized</span>
            </div>

            {/* Title */}
            <h1 className="awards-hero-title">
              <span className="awards-title-small">Our Achievements</span>
              <span className="awards-title-main">Awards &</span>
              <span className="awards-title-accent">Recognitions</span>
            </h1>

            {/* Divider */}
            <div className="awards-hero-divider">
              <span className="awards-divider-line" />
              <span className="awards-divider-icon">★</span>
              <span className="awards-divider-line" />
            </div>

            {/* Subtitle */}
            <p className="awards-hero-subtitle">
              Our commitment to excellence, quality, and employee well-being has been 
              recognized by leading industry bodies and certification authorities worldwide.
            </p>

            {/* Award Badges Preview */}
            <div className="awards-hero-badges">
              <div className="awards-hero-badge">
                <img src="/images/gwp.png" alt="Great Place to Work 2025" />
              </div>
              <div className="awards-hero-badge">
                <img src="/images/certificate2.png" alt="Best Workplaces 2026" />
              </div>
              <div className="awards-hero-badge">
                <img src="/images/certificate.png" alt="ISO 22000 Certified" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="awards-hero-actions">
              <a href="#awards-showcase" className="awards-btn-primary">
                <span>View All Awards</span>
                <i className="fa fa-arrow-down" />
              </a>
              <Link to="/about-us" className="awards-btn-outline">
                <span>About Us</span>
                <i className="fa fa-arrow-right" />
              </Link>
            </div>

          </div>
        </div>

        {/* Vertical Text */}
        <div className="awards-hero-vertical-text">
          <span>Certified Excellence — Since 2014</span>
        </div>

      </section>
    </div>
  );
};

export default AwardsHeaderSection;