import React, { useState } from "react";

const AboutAgroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
 
  const stats = [
    { num: "$1B", label: "Revenue Goal by 2030" },
    { num: "100%", label: "Sustainable Farming" },
    { num: "4M+", label: "Vines by 2030" },
    { num: "30+", label: "Export Markets" },
  ];

  return (
    <section className="white-bg pb-50 pt-10" id="about">
       <section className="about-agro-section" id="about">
        <div className="container">
          <div className="row about-agro-row">

            {/* ── Left: Content ── */}
            <div className="col-md-6 col-sm-12 about-agro-content-col">

              {/* Eyebrow */}
              <div className="about-agro-eyebrow">
                <span className="about-agro-eyebrow-dot" />
                <span className="about-agro-eyebrow-text">Agroventures Plantations</span>
              </div>

              {/* Heading */}
              <h2 className="about-agro-title">
                Who <span className="about-agro-title-accent">We Are</span>
              </h2>

              <div className="about-agro-divider" />

              {/* Body */}
              <div className="about-agro-body">
                <p>
                  <strong>Agroventures Plantations (Pvt) Ltd</strong> is a pioneering
                  company dedicated to the cultivation of vanilla and other
                  export-oriented spices. Our vision is to generate{" "}
                  <strong>USD 1 billion for Sri Lanka by 2030</strong> through
                  sustainable and large-scale vanilla cultivation.
                </p>
                <p>
                  Our diverse range includes high-quality spices, vanilla, and
                  various other crops meticulously grown to meet the stringent
                  standards of international markets — while equally serving
                  Sri Lankan consumers.
                </p>

                {/* Expanded content */}
                <div className={`about-agro-expand-wrap ${isExpanded ? "about-agro-expanded" : ""}`}>
                  <p>
                    Our unwavering dedication to sustainability is at the core of
                    our operations. We employ advanced, responsible farming
                    practices that ensure minimal environmental impact while
                    maximizing yield and quality — integrating cutting-edge
                    technology with traditional farming knowledge.
                  </p>
                  <p>
                    As industry leaders, we pride ourselves on our ethical
                    approach to agriculture — creating value for customers,
                    communities and the entire ecosystem through fair labor
                    practices and investment in local economies.
                  </p>
                  <p>
                    Agroventures Plantations offers unparalleled investment
                    opportunities for those passionate about ethical and
                    environmentally conscious agriculture, providing significant
                    returns while promoting sustainability and ecological balance.
                  </p>
                </div>

                {/* Read more toggle */}
                <button
                  className="about-agro-toggle-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? "Read Less" : "Read More"}</span>
                  <span className={`about-agro-toggle-icon ${isExpanded ? "about-agro-icon-up" : ""}`}>
                    <i className="fa fa-chevron-down" />
                  </span>
                </button>
              </div>

              {/* Stats row */}
              <div className="about-agro-stats">
                {stats.map((s, i) => (
                  <div className="about-agro-stat" key={i}>
                    <span className="about-agro-stat-num">{s.num}</span>
                    <span className="about-agro-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* ── Right: Image ── */}
           <div className="col-md-6">
            <img
              className="img-responsive"
              src="/images/about-nature.jpg"
              alt="nature-img"
              />
              </div>

          </div>
        </div>
      </section>

      {/* Parallax Start */}
       <div className="about-agro-parallax parallax-bg-12 fixed-bg">
        <div className="about-agro-parallax-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">

              <span className="about-agro-parallax-eyebrow">Our Commitment</span>

              <h2 className="about-agro-parallax-title">
                "All Our Farms{" "}
                <span className="about-agro-parallax-accent">Carefully</span>{" "}
                Tendered By Our Experts"
              </h2>

              <div className="about-agro-parallax-divider">
                <span className="about-agro-parallax-line" />
                <span className="about-agro-parallax-leaf">🌱</span>
                <span className="about-agro-parallax-line" />
              </div>

              <p className="about-agro-parallax-sub">
                From soil to export — every step guided by expertise and passion.
              </p>

            </div>
          </div>
        </div>
      </div>
      {/* Parallax End */}
    </section>
  );
};

export default AboutAgroSection;
