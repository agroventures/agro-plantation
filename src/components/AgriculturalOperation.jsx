import React from "react";

const CROPS = [
  { icon: "fa-spa", name: "Vanilla", note: "Flagship crop under cultivation" },
  { icon: "fa-mortar-pestle", name: "Cinnamon", note: "Traditional Sri Lankan export crop" },
  { icon: "fa-pepper-hot", name: "Pepper", note: "Spice crop cultivation" },
  { icon: "fa-apple-alt", name: "Fruits", note: "Seasonal fruit cultivation" },
  { icon: "fa-carrot", name: "Vegetables", note: "Mixed vegetable cultivation" },
  { icon: "fa-leaf", name: "Other Crops", note: "Additional crops under management" },
];

const VALUE_CHAIN = [
  {
    step: "01",
    icon: "fa-map-marked-alt",
    title: "Land",
    text: "Agricultural land under ownership, made available for professional cultivation.",
  },
  {
    step: "02",
    icon: "fa-seedling",
    title: "Cultivation",
    text: "Planting, agronomic planning and ongoing crop management carried out by our operations team.",
  },
  {
    step: "03",
    icon: "fa-tractor",
    title: "Harvest",
    text: "Harvesting carried out according to crop-specific timing and agronomic conditions.",
  },
  {
    step: "04",
    icon: "fa-industry",
    title: "Processing",
    text: "Post-harvest handling and processing to prepare produce for market and export.",
  },
  {
    step: "05",
    icon: "fa-ship",
    title: "Export",
    text: "Preparation and coordination of produce for the export and international market channels.",
  },
];

const PRACTICES = [
  {
    icon: "fa-clipboard-list",
    title: "Agronomic Planning",
    text: "Planning cultivation schedules around crop type, soil conditions and seasonal factors.",
  },
  {
    icon: "fa-eye",
    title: "Crop Monitoring",
    text: "Ongoing monitoring of crop health and growth throughout the cultivation cycle.",
  },
  {
    icon: "fa-recycle",
    title: "Sustainable Practices",
    text: "Agricultural practices selected with long-term soil and land condition in mind.",
  },
  {
    icon: "fa-check-double",
    title: "Harvest & Quality Control",
    text: "Quality checks applied at harvest and through post-harvest handling.",
  },
  {
    icon: "fa-boxes",
    title: "Post-Harvest Processing",
    text: "Cleaning, drying, curing or other crop-appropriate processing steps ahead of market.",
  },
  {
    icon: "fa-globe-asia",
    title: "Export Readiness",
    text: "Coordinating documentation and logistics to move produce toward export markets.",
  },
];

export default function AgriculturalOperations() {
  return (
    <main className="ao-page">
      {/* ============ HERO ============ */}
      <section className="about-hero avp-hero">
        <div className="avp-hero__scrim" />
        <div className="avp-hero__body">
          <div className="avp-hero__kicker">
            <span className="avp-hero__kicker-rule" />
            Cultivation, Farm Management &amp; Processing
          </div>
          <h1 className="avp-hero__headline">
            <span className="avp-hero__hl-solid">Agricultural</span>
            <span className="avp-hero__hl-outline">Operations</span>
          </h1>
          <p className="ao-hero-sub">
            From planted land to processed export - how Agroventures
            manages cultivation and farm operations on land under lease.
          </p>
          <div className="hero-cta-wrap">
          <a href="/land-ownership" className="hero-btn-secondary">
            <span>Land Ownership</span>
            <i className="fa fa-arrow-right hero-btn-icon" />
          </a>
          <a href="/events" className="hero-btn-primary">
            <span>Our Events</span>
          </a>
        </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="ao-intro-section">
        <div className="container">
          <div className="ao-intro-box">
            <i className="fas fa-info-circle ao-intro-icon" />
            <p>
              Where a property is leased to Agroventures under a lease
              agreement, our agricultural operations team manages
              cultivation and related farm activities on behalf of the
              landowner - in accordance with the agreed arrangement.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CROP PORTFOLIO ============ */}
      <section className="ao-crops-section">
        <div className="container">
          <div className="ao-heading">
            <div className="ao-eyebrow">
              <span className="ao-eyebrow-dot" />
              Crops Under Cultivation
            </div>
            <h2 className="ao-title">
              What We <span>Cultivate</span>
            </h2>
            <div className="ao-divider" />
            <p className="ao-subtitle">
              Agricultural operations span a range of crops, each managed
              according to its own agronomic requirements.
            </p>
          </div>

          <div className="ao-crop-grid">
            {CROPS.map((c) => (
              <div className="ao-crop-card" key={c.name}>
                <div className="ao-crop-icon">
                  <i className={`fas ${c.icon}`} />
                </div>
                <h3 className="ao-crop-name">{c.name}</h3>
                <p className="ao-crop-note">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUE CHAIN ============ */}
      <section id="ao-value-chain" className="ao-chain-section">
        <div className="container">
          <div className="ao-heading ao-heading-light">
            <div className="ao-eyebrow ao-eyebrow-light">
              <span className="ao-eyebrow-dot" />
              The Operations Process
            </div>
            <h2 className="ao-title ao-title-light">
              Land To <span>Export</span>
            </h2>
            <div className="ao-divider" />
          </div>

          <div className="ao-chain-track">
            {VALUE_CHAIN.map((v, i) => (
              <React.Fragment key={v.step}>
                <div className="ao-chain-card">
                  <span className="ao-chain-step">{v.step}</span>
                  <div className="ao-chain-icon">
                    <i className={`fas ${v.icon}`} />
                  </div>
                  <h4 className="ao-chain-title">{v.title}</h4>
                  <p className="ao-chain-text">{v.text}</p>
                </div>
                {i < VALUE_CHAIN.length - 1 && (
                  <span className="ao-chain-arrow">
                    <i className="fas fa-long-arrow-alt-right" />
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRACTICES ============ */}
      <section className="ao-practices-section">
        <div className="container">
          <div className="ao-heading">
            <div className="ao-eyebrow">
              <span className="ao-eyebrow-dot" />
              Farm Management
            </div>
            <h2 className="ao-title">
              How Operations Are <span>Managed</span>
            </h2>
            <div className="ao-divider" />
            <p className="ao-subtitle">
              A structured approach to cultivation, monitoring and
              post-harvest handling on every property under management.
            </p>
          </div>

          <div className="row">
            {PRACTICES.map((p) => (
              <div className="col-lg-4 col-md-6 ao-practice-col" key={p.title}>
                <div className="ao-practice-card">
                  <div className="ao-practice-icon-wrap">
                    <i className={`fas ${p.icon}`} />
                  </div>
                  <h3 className="ao-practice-title">{p.title}</h3>
                  <p className="ao-practice-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* ============ INFORMATION NOTICE ============ */}
      <section className="ao-notice-section">
        <div className="container">
          <div className="ao-notice-box">
            <i className="fas fa-exclamation-circle ao-notice-icon" />
            <p>
              Agricultural performance and crop yields may vary due to
              weather, market conditions, agronomic factors and other
              circumstances. Agricultural operations are carried out in
              accordance with the lease agreement applicable to each
              property.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="ao-cta-section">
        <div className="container">
          <div className="ao-cta-box">
            <div className="ao-cta-text">
              <h3>Curious how your land would be managed?</h3>
              <p>
                Talk to our agricultural operations team about the
                cultivation and management approach for your property.
              </p>
            </div>
            <div className="ao-cta-actions">
              <a href="/contact" className="ao-btn-primary">
                <span>Contact Agroventures</span>
                <i className="fas fa-arrow-right" />
              </a>
              <a href="/legal-document" className="ao-btn-outline">
                <span>Legal / Documents</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}