const OurPrincipalSection = () => {
  const leftVirtues = [
    {
      icon: "fas fa-seedling",
      title: "Scale",
      desc: "Each acre of land is planted with 2,000 vanilla vines, maximising density for premium yield.",
      number: "01",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Yield",
      desc: "By 2030, we plan to cultivate 4,000,000 vines, expecting a minimum yield of 4 kg per vine — resulting in 16,000,000 kg of raw vanilla beans.",
      number: "02",
    },
  ];

  const rightVirtues = [
    {
      icon: "fas fa-hourglass-half",
      title: "Timeline",
      desc: "Vanilla vines begin yielding harvests after 2.5 years, delivering consistent long-term returns.",
      number: "03",
    },
    {
      icon: "fas fa-cogs",
      title: "Processing",
      desc: "These beans are processed to produce approximately 4,000,000 kg of premium finished vanilla product.",
      number: "04",
    },
  ];

  return (
    <>
      {/* Our Principal Virtues Start */}
      <section className="virtues-section" id="feature">

        {/* ── Background decoration ── */}
        <div className="virtues-bg-glow" />
        <div className="virtues-bg-dots" />

        <div className="container">

          {/* ── Section heading ── */}
          <div className="row">
            <div className="col-sm-12">
              <div className="virtues-heading">
                <span className="virtues-eyebrow">
                  <span className="virtues-eyebrow-line" />
                  Our Principal Virtues
                  <span className="virtues-eyebrow-line" />
                </span>
                <h2 className="virtues-main-title">
                  Built On
                  <span className="virtues-title-accent"> Precision </span>
                  &amp; Purpose
                </h2>
                <div className="virtues-title-divider" />
              </div>
            </div>
          </div>

          {/* ── Three column layout ── */}
          <div className="row virtues-content-row">

            {/* ── Left virtues ── */}
            <div className="col-md-4 col-sm-12 virtues-col-left">
              {leftVirtues.map((v, i) => (
                <div className="virtue-card virtue-card-left" key={i}>
                  <div className="virtue-card-inner">
                    {/* Number */}
                    <span className="virtue-number">{v.number}</span>
                    {/* Icon */}
                    <div className="virtue-icon-wrap">
                      <i className={`${v.icon} virtue-icon`} />
                    </div>
                    {/* Text */}
                    <div className="virtue-text">
                      <h5 className="virtue-title">{v.title}</h5>
                      <p className="virtue-desc">{v.desc}</p>
                    </div>
                    {/* Bottom accent */}
                    <div className="virtue-card-bar" />
                  </div>
                </div>
              ))}
            </div>

            {/* ── Center image ── */}
            <div className="col-md-4 col-sm-12 virtues-col-center">
              <div className="virtues-center-wrap">

                {/* Decorative ring */}
                <div className="virtues-ring virtues-ring-outer" />
                <div className="virtues-ring virtues-ring-inner" />

                {/* Image */}
                <div className="virtues-img-wrap">
                  <img
                    className="virtues-img"
                    src="/images/slides/flower2.JPG"
                    alt="Vanilla flower"
                  />
                </div>

                {/* Center badge */}
                <div className="virtues-center-badge">
                  <span className="virtues-badge-icon">🌸</span>
                  <span className="virtues-badge-text">Vanilla Planifolia</span>
                </div>

                {/* Stat pill top */}
                <div className="virtues-stat-pill virtues-stat-top">
                  <span className="virtues-stat-num">4M+</span>
                  <span className="virtues-stat-lbl">Vines by 2030</span>
                </div>

                {/* Stat pill bottom */}
                <div className="virtues-stat-pill virtues-stat-bottom">
                  <span className="virtues-stat-num">16M kg</span>
                  <span className="virtues-stat-lbl">Raw beans target</span>
                </div>

              </div>
            </div>

            {/* ── Right virtues ── */}
            <div className="col-md-4 col-sm-12 virtues-col-right">
              {rightVirtues.map((v, i) => (
                <div className="virtue-card virtue-card-right" key={i}>
                  <div className="virtue-card-inner">
                    {/* Number */}
                    <span className="virtue-number">{v.number}</span>
                    {/* Icon */}
                    <div className="virtue-icon-wrap">
                      <i className={`${v.icon} virtue-icon`} />
                    </div>
                    {/* Text */}
                    <div className="virtue-text">
                      <h5 className="virtue-title">{v.title}</h5>
                      <p className="virtue-desc">{v.desc}</p>
                    </div>
                    {/* Bottom accent */}
                    <div className="virtue-card-bar" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* Our Principal Virtues End */}
    </>
  );
};

export default OurPrincipalSection;