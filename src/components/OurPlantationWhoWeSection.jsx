import { useState } from "react";

const OurPlantationWhoWeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    { icon: "fas fa-leaf", label: "Eco-Friendly" },
    { icon: "fas fa-tint", label: "Water Conservation" },
    { icon: "fas fa-seedling", label: "Crop Rotation" },
    { icon: "fas fa-users", label: "Community First" },
  ];

  return (
    <section className="plantation-who-section" id="about">

      {/* ── Background decoration ── */}
      <div className="plantation-who-bg-glow" />

      <div className="container">
        <div className="row plantation-who-row">

          {/* ── Left: Content ── */}
          <div className="col-md-6 col-sm-12 plantation-who-content-col">

            {/* Eyebrow */}
            <div className="plantation-who-eyebrow">
              <span className="plantation-who-eyebrow-dot" />
              <span className="plantation-who-eyebrow-text">Agroventures Plantations</span>
            </div>

            {/* Heading */}
            <h2 className="plantation-who-title">
              Our
              <span className="plantation-who-title-accent"> Plantations</span>
            </h2>

            <div className="plantation-who-divider" />

            {/* Feature pills */}
            <div className="plantation-who-features">
              {features.map((f, i) => (
                <span className="plantation-who-feature-pill" key={i}>
                  <i className={`${f.icon} plantation-who-pill-icon`} />
                  {f.label}
                </span>
              ))}
            </div>

            {/* Body */}
            <div className="plantation-who-body">
              <p>
                At Agroventures Plantations (Pvt) Ltd, our lands represent more
                than just fields and orchards - they embody our unwavering
                commitment to <strong>sustainability</strong>, responsible
                farming practices, and community development. Nestled in the
                picturesque landscapes of Sri Lanka, our plantations serve as a
                sanctuary of abundant biodiversity.
              </p>

              {/* Expandable */}
              <div className={`plantation-who-expand ${isExpanded ? "plantation-who-expanded" : ""}`}>
                <p>
                  Our approach to farming is deeply rooted in environmental
                  stewardship. We employ advanced agricultural techniques that
                  minimize our ecological footprint - integrating crop rotation,
                  organic fertilizers, and water conservation methods to
                  maintain soil health and preserve natural resources.
                </p>
                <p>
                  We prioritize the well-being of surrounding communities through
                  active engagement in development projects, providing educational
                  opportunities, healthcare initiatives, and infrastructure
                  improvements that extend far beyond our fields.
                </p>
                <p>
                  Each crop is carefully nurtured from seed to harvest, ensuring
                  only the finest products reach our consumers - fresh,
                  nutritious, and sustainably grown. At Agroventures, we are not
                  just growing crops; we are cultivating a legacy of
                  sustainability, community support, and agricultural excellence.
                </p>
              </div>

              {/* Toggle button */}
              <button
                className="plantation-who-toggle-btn"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "Read Less" : "Read More"}</span>
                <span className={`plantation-who-toggle-icon ${isExpanded ? "plantation-who-icon-up" : ""}`}>
                  <i className="fa fa-chevron-down" />
                </span>
              </button>
            </div>

          </div>

          {/* ── Right: Image ── */}
          <div className="col-md-6 col-sm-12 plantation-who-img-col">
            <div className="plantation-who-img-frame">

              {/* Corner accents */}
              <div className="plantation-who-corner plantation-who-corner-tl" />
              <div className="plantation-who-corner plantation-who-corner-br" />

              {/* Image */}
              <div className="plantation-who-img-wrap">
                <img
                  src="/images/our-plantations.png"
                  alt="Our Plantations – Agroventures"
                  className="plantation-who-img"
                />
                <div className="plantation-who-img-tint" />
              </div>

              {/* Floating stat badge */}
              <div className="plantation-who-float-badge">
                <span className="plantation-who-badge-icon">🌿</span>
                <div>
                  <span className="plantation-who-badge-num">4M+</span>
                  <span className="plantation-who-badge-label">Vines Planned by 2030</span>
                </div>
              </div>

              {/* Second floating pill */}
              <div className="plantation-who-float-pill">
                <i className="fas fa-map-marker-alt plantation-who-pill-loc-icon" />
                <span>Sri Lanka</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurPlantationWhoWeSection;