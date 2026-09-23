const OurPrincipalSection = () => {
  const leftVirtues = [
    {
      icon: "fas fa-seedling",
      title: "Scale",
      desc: "Each acre of land supports high-density vanilla planting, maximising space for premium yield.",
      number: "Density",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Yield",
      desc: "Our long-term plan is to cultivate millions of vines, with each vine contributing to a substantial supply of premium raw vanilla beans.",
      number: "Yield",
    },
  ];

  const rightVirtues = [
    {
      icon: "fas fa-hourglass-half",
      title: "Timeline",
      desc: "Vanilla vines typically begin producing harvests after a few growing seasons, subject to cultivation conditions, weather, agronomic performance and other relevant factors.",
      number: "Timing",
    },
    {
      icon: "fas fa-cogs",
      title: "Processing",
      desc: "These beans are processed to produce several million kilograms of premium finished vanilla product.",
      number: "Quality",
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
                <img src="/images/divider.png" alt="divider" />{" "}
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
                  {/* <span className="virtues-badge-icon">🌸</span> */}
                  <span className="virtues-badge-text">Vanilla Planifolia</span>
                </div>

                {/* Stat pill top */}
                <div className="virtues-stat-pill virtues-stat-top">
                  <span className="virtues-stat-num">Millions</span>
                  <span className="virtues-stat-lbl">Of vines planned for the years ahead</span>
                </div>

                {/* Stat pill bottom */}
                <div className="virtues-stat-pill virtues-stat-bottom">
                  <span className="virtues-stat-num">Ambitious</span>
                  <span className="virtues-stat-lbl">Raw bean production target</span>
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
