const WhyChooseSection = () => {
  const reasons = [
    {
      icon: "fas fa-user-tie",
      title: "Expert Management",
      desc: "Our experienced team handles every aspect of cultivation, from soil preparation to export, ensuring high-quality vanilla production.",
      number: "01",
      highlight: "Full lifecycle management",
    },
    {
      icon: "fas fa-recycle",
      title: "Sustainable Practices",
      desc: "We use organic farming methods, ensuring our practices are environmentally friendly and sustainable for generations.",
      number: "02",
      highlight: "100% organic methods",
    },
    {
      icon: "fas fa-chart-line",
      title: "Significant Returns",
      desc: "Both plans offer attractive returns, with guaranteed buy-back options after 5 years of cultivation.",
      number: "03",
      highlight: "Guaranteed buy-back at 5 years",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Legal Security",
      desc: "Land ownership is legally secured through the Land Registry Office of Matale, providing you with full legal security and bond.",
      number: "04",
      highlight: "Matale Land Registry secured",
    },
  ];

  return (
    <>
      {/* Why Choose Us Start */}
      <section className="whychoose-section">

        {/* ── Background elements ── */}
        <div className="whychoose-bg-overlay" />
        <div className="whychoose-bg-grid" />

        <div className="container">

          {/* ── Section heading ── */}
          <div className="row">
            <div className="col-sm-12">
              <div className="whychoose-heading">
                <span className="whychoose-eyebrow">
                  <span className="whychoose-eyebrow-line" />
                  Why Choose Us
                  <span className="whychoose-eyebrow-line" />
                </span>
                <h2 className="whychoose-main-title">
                  The Agroventures
                  <span className="whychoose-title-accent"> Advantage</span>
                </h2>
                <p className="whychoose-subtitle">
                  Four pillars that set us apart — and keep our investors coming back.
                </p>
              </div>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className="row whychoose-cards-row">
            {reasons.map((r, i) => (
              <div className="col-md-3 col-sm-6 col-xs-12 whychoose-card-wrap" key={i}>
                <div className="whychoose-card">

                  {/* Card top accent line */}
                  <div className="whychoose-card-top-bar" />

                  {/* Number watermark */}
                  <span className="whychoose-card-number">{r.number}</span>

                  {/* Icon */}
                  <div className="whychoose-icon-wrap">
                    <div className="whychoose-icon-ring" />
                    <i className={`${r.icon} whychoose-icon`} />
                  </div>

                  {/* Title */}
                  <h5 className="whychoose-card-title">{r.title}</h5>

                  {/* Highlight pill */}
                  <span className="whychoose-highlight-pill">
                    <span className="whychoose-highlight-dot" />
                    {r.highlight}
                  </span>

                  {/* Divider */}
                  <div className="whychoose-card-divider" />

                  {/* Description */}
                  <p className="whychoose-card-desc">{r.desc}</p>

                  {/* Hover bottom border */}
                  <div className="whychoose-card-bottom-bar" />

                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom trust strip ── */}
          <div className="row">
            <div className="col-sm-12">
              <div className="whychoose-trust-strip">
                <div className="whychoose-trust-item">
                  <i className="fas fa-award whychoose-trust-icon" />
                  <span>Award-Winning Practices</span>
                </div>
                <div className="whychoose-trust-sep" />
                <div className="whychoose-trust-item">
                  <i className="fas fa-users whychoose-trust-icon" />
                  <span>500+ Investor Partners</span>
                </div>
                <div className="whychoose-trust-sep" />
                <div className="whychoose-trust-item">
                  <i className="fas fa-leaf whychoose-trust-icon" />
                  <span>Certified Organic Farming</span>
                </div>
                <div className="whychoose-trust-sep" />
                <div className="whychoose-trust-item">
                  <i className="fas fa-globe whychoose-trust-icon" />
                  <span>30+ Export Markets</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Why Choose Us End */}
    </>
  );
};

export default WhyChooseSection;