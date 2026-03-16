import { Link } from "react-router-dom";

const OurMainSection = () => {
  return (
    <>
      {/* Our Main produce start */}
      <section className="produce-section" id="about">

        {/* ── Background decorative elements ── */}
        <div className="produce-bg-circle" />
        <div className="produce-bg-line" />

        <div className="container">

          {/* ── Section heading ── */}
          <div className="row">
            <div className="col-sm-12">
              <div className="produce-heading">
                <span className="produce-eyebrow">
                  <span className="produce-eyebrow-dot" />
                  Our Main Produce
                  <span className="produce-eyebrow-dot" />
                </span>
                <h2 className="produce-main-title">
                  Vanilla
                  <span className="produce-title-accent"> Planifolia</span>
                </h2>
                <div className="produce-title-divider">
                  <span className="produce-divider-leaf">🌿</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Main content ── */}
          <div className="row produce-content-row">

            {/* ── Left: Text content ── */}
            <div className="col-md-5 produce-text-col">

              {/* Latin name badge */}
              <div className="produce-latin-badge">
                <span className="produce-latin-icon">🌸</span>
                <div>
                  <span className="produce-latin-label">Botanical Name</span>
                  <span className="produce-latin-name">Vanilla Planifolia</span>
                </div>
              </div>

              {/* Feature tags */}
              <div className="produce-tags">
                <span className="produce-tag">
                  <span className="produce-tag-dot" />Tropical Orchid
                </span>
                <span className="produce-tag">
                  <span className="produce-tag-dot" />Premium Export
                </span>
                <span className="produce-tag">
                  <span className="produce-tag-dot" />Sri Lanka Origin
                </span>
              </div>

              {/* Quote callout */}
              <div className="produce-callout">
                <span className="produce-callout-quote">"</span>
                <p className="produce-callout-text">
                  Valued at more than silver itself — the world's most sought-after spice.
                </p>
              </div>

              {/* Body text */}
              <div className="produce-body">
                <p>
                  Vanilla planifolia is a species of vanilla orchid that thrives
                  in tropical nations. One of the most widely demanded spices in
                  the world, it is harvested for the prized vanilla bean used in
                  flavouring across industries globally.
                </p>
                <p>
                  At Agroventures Plantations we have established Vanilla
                  Plantations in the most optimal regions across Sri Lanka,
                  ensuring the finest quality beans for export. Our goal is to
                  make Sri Lanka the number one Vanilla Exporter while delivering
                  the best returns for our customers.
                </p>
              </div>

              {/* Stats row */}
              <div className="produce-stats">
                <div className="produce-stat">
                  <span className="produce-stat-num">#1</span>
                  <span className="produce-stat-label">Export Goal</span>
                </div>
                <div className="produce-stat-divider" />
                <div className="produce-stat">
                  <span className="produce-stat-num">A+</span>
                  <span className="produce-stat-label">Bean Quality</span>
                </div>
                <div className="produce-stat-divider" />
                <div className="produce-stat">
                  <span className="produce-stat-num">100%</span>
                  <span className="produce-stat-label">Natural</span>
                </div>
              </div>

              {/* CTA */}
              <div className="produce-cta">
                <Link to="/about-us" className="produce-btn-primary">
                  <span>Learn More</span>
                  <i className="fa fa-arrow-right produce-btn-icon" />
                </Link>
                <Link to="/contact-us" className="produce-btn-secondary">
                  Partner With Us
                </Link>
              </div>

            </div>

            {/* ── Right: Image layout ── */}
            <div className="col-md-7 produce-img-col">

              {/* Decorative frame */}
              <div className="produce-img-frame">

                {/* Main large image */}
                <div className="produce-img-main-wrap">
                  <img
                    className="produce-img-main"
                    src="/images/paralax/paralax1.webp"
                    alt="Vanilla plantation"
                  />
                  <div className="produce-img-tint" />

                  {/* Floating origin badge */}
                  <div className="produce-origin-badge">
                    <span className="produce-origin-icon">📍</span>
                    <div>
                      <span className="produce-origin-label">Origin</span>
                      <span className="produce-origin-value">Sri Lanka</span>
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="produce-corner produce-corner-tl" />
                <div className="produce-corner produce-corner-br" />

                {/* Floating info card */}
                <div className="produce-float-card">
                  <div className="produce-float-card-icon">🌱</div>
                  <div className="produce-float-card-text">
                    <span className="produce-float-card-title">Sustainably Grown</span>
                    <span className="produce-float-card-sub">Zero chemical farming</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Our main produce End */}
    </>
  );
};

export default OurMainSection;