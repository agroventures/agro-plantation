import { Link } from "react-router-dom";

const OverseaSection = () => {
  // const markets = [
  //   { icon: "🌏", region: "Asia Pacific", count: "12+" },
  //   { icon: "🌍", region: "Europe", count: "8+" },
  //   { icon: "🌎", region: "Americas", count: "6+" },
  //   { icon: "🌐", region: "Middle East", count: "4+" },
  // ];

  return (
    
    
      <section className="white-bg oversea-section">

        {/* ── Left: Full-bleed image ── */}
        <div className="oversea-image-col">
          <div className="oversea-image-bg about-us-bg" />
          {/* <div className="oversea-image-overlay" /> */}

          {/* Floating markets grid over image */}
          {/* <div className="oversea-markets-grid">
            {markets.map((m, i) => (
              <div className="oversea-market-card" key={i}>
                <span className="oversea-market-icon">{m.icon}</span>
                <span className="oversea-market-count">{m.count}</span>
                <span className="oversea-market-label">{m.region}</span>
              </div>
            ))}
          </div> */}

          {/* Image corner frame */}
          <div className="oversea-img-frame-tl" />
          <div className="oversea-img-frame-br" />
        </div>

        {/* ── Right: Content ── */}
        <div className="oversea-content-col">

          {/* Accent bar */}
          <div className="oversea-accent-bar" />

          {/* Background watermark */}
          <span className="oversea-bg-watermark" aria-hidden="true">GLOBAL</span>

          <div className="oversea-content-inner">

            {/* Eyebrow */}
            <div className="oversea-eyebrow">
              <span className="oversea-eyebrow-dot" />
              <span className="oversea-eyebrow-text">Our Overseas</span>
              <span className="oversea-eyebrow-line" />
            </div>

            {/* Heading */}
            <h2 className="oversea-title">
              Overseas
              <span className="oversea-title-accent"> Operations</span>
            </h2>

           <img src="/images/divider.png" alt="divider" />{" "}
            {/* Quote callout */}
            <div className="oversea-callout" >
              <i className="fas fa-globe oversea-callout-icon" />
              <p className="oversea-callout-text">
                Seamless integration &amp; optimal performance across all international markets.
              </p>
            </div>

            {/* Body paragraphs */}
            <div className="oversea-body">
              <p>
                Our overseas operations at AgroVentures Plantations are managed
                with the utmost care and precision, ensuring a seamless
                integration and optimal performance across all international
                markets. We implement comprehensive strategies tailored to each
                region, utilizing advanced technologies to maintain consistency
                and efficiency.
              </p>
              <p>
                Our dedicated teams work diligently to coordinate efforts,
                address challenges promptly, and uphold the highest standards of
                excellence in every area we operate in - delivering exceptional
                results and fostering strong relationships with our global partners.
              </p>
            </div>

            {/* Feature list */}
            <ul className="oversea-features">
              <li className="oversea-feature-item">
                <span className="oversea-feature-check">
                  <i className="fas fa-check" />
                </span>
                Region-specific cultivation strategies
              </li>
              <li className="oversea-feature-item">
                <span className="oversea-feature-check">
                  <i className="fas fa-check" />
                </span>
                Advanced technology-driven operations
              </li>
              <li className="oversea-feature-item">
                <span className="oversea-feature-check">
                  <i className="fas fa-check" />
                </span>
                Continuous improvement &amp; global standards
              </li>
            </ul>

            {/* CTA */}
            <div className="oversea-cta">
              <Link to="/contact-us" className="oversea-btn-primary">
                <span>Let's Talk</span>
                <i className="fa fa-rocket oversea-btn-icon" />
              </Link>
              <div className="oversea-cta-note">
                <i className="fas fa-shield-alt oversea-note-icon" />
                <span>Trusted by global partners</span>
              </div>
            </div>

          </div>
        </div>

      </section>
     
 
  );
};

export default OverseaSection;