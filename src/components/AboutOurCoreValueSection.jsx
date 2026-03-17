import { useState } from "react";

const coreValues = [
  {
    id: "sustainable",
    icon: "mdi mdi-recycle",
    label: "Sustainable",
    title: "Sustainability First",
    desc: "We are committed to preserving the environment and conserving natural resources through responsible, sustainable agricultural practices that protect the land for future generations.",
    highlight: "Zero-waste farming",
    color: "#06a8a8",
  },
  {
    id: "standards",
    icon: "mdi mdi-medal",
    label: "Standards",
    title: "Uncompromising Standards",
    desc: "We maintain the highest standards of excellence in the cultivation and production of all our agricultural products — from soil preparation to final export.",
    highlight: "International grade quality",
    color: "#004d4d",
  },
  {
    id: "trustworthy",
    icon: "mdi mdi-handshake",
    label: "Trustworthy",
    title: "Built on Trust",
    desc: "Honesty and transparency govern every action we take, guiding us in building long-lasting, trustworthy relationships with our customers, investors and stakeholders.",
    highlight: "Transparent operations",
    color: "#3a9e7e",
  },
  {
    id: "growth",
    icon: "mdi mdi-account-group",
    label: "Growth",
    title: "Community Growth",
    desc: "We strive to uplift local communities by providing meaningful livelihood opportunities, investing in people, and supporting sustainable development across the regions we operate in.",
    highlight: "12,440+ Clients' Satisfactions",
    color: "#06a8a8",
  },
];

const AboutOurCoreValueSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="corevalues-section">

      {/* ── Background decoration ── */}
      <div className="corevalues-bg-arc" />

      <div className="container">

        {/* ── Heading ── */}
        <div className="row">
          <div className="col-sm-12">
            <div className="corevalues-heading">
              <span className="corevalues-eyebrow">
                <span className="corevalues-eyebrow-line" />
                Our Core Values
                <span className="corevalues-eyebrow-line" />
              </span>
              <h2 className="corevalues-title">
                What We
                <span className="corevalues-title-accent"> Stand For</span>
              </h2>
              <p className="corevalues-subtitle">
                Four principles that guide everything we grow, build and believe in.
              </p>
            </div>
          </div>
        </div>

        {/* ── Tab layout ── */}
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-12">
            <div className="corevalues-tabs-wrap">

              {/* ── Tab buttons ── */}
              <div className="corevalues-tab-nav">
                {coreValues.map((v, i) => (
                  <button
                    key={v.id}
                    className={`corevalues-tab-btn ${active === i ? "corevalues-tab-active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="corevalues-tab-icon-wrap">
                      <i className={`${v.icon} corevalues-tab-icon`} />
                    </span>
                    <span className="corevalues-tab-label">{v.label}</span>
                  </button>
                ))}
              </div>

              {/* ── Active indicator bar ── */}
              <div className="corevalues-indicator-bar">
                <div
                  className="corevalues-indicator-fill"
                  style={{ left: `${active * 25}%`, width: "25%" }}
                />
              </div>

              {/* ── Tab content ── */}
              <div className="corevalues-tab-content">
                {coreValues.map((v, i) => (
                  <div
                    key={v.id}
                    className={`corevalues-tab-pane ${active === i ? "corevalues-pane-active" : ""}`}
                  >
                    <div className="corevalues-pane-inner">

                      {/* Left: icon block */}
                      <div className="corevalues-pane-icon-col">
                        <div className="corevalues-pane-icon-wrap">
                          <i className={`${v.icon} corevalues-pane-icon`} />
                          <div className="corevalues-pane-icon-ring" />
                        </div>
                      </div>

                      {/* Right: text */}
                      <div className="corevalues-pane-text-col">
                        <div className="corevalues-pane-num">{String(i + 1).padStart(2, "0")}</div>
                        <h3 className="corevalues-pane-title">{v.title}</h3>
                        <div className="corevalues-pane-divider" />
                        <p className="corevalues-pane-desc">{v.desc}</p>
                        <span className="corevalues-pane-highlight">
                          <span className="corevalues-pane-highlight-dot" />
                          {v.highlight}
                        </span>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* ── Step dots ── */}
              <div className="corevalues-dots">
                {coreValues.map((_, i) => (
                  <button
                    key={i}
                    className={`corevalues-dot ${active === i ? "corevalues-dot-active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`Go to ${coreValues[i].label}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOurCoreValueSection;