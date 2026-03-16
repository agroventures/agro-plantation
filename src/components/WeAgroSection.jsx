import { Link } from "react-router-dom";

const WeAgroSection = () => {
  return (
    <>
      {/* Who We Are Start */}
      <section className="weagro-section" id="about">

        {/* ── Background decorative elements ── */}
        <div className="weagro-bg-top-bar" />
        <div className="weagro-bg-pattern" />

        <div className="container">
          <div className="row weagro-flex-row">

            {/* ── Left: Big identity block ── */}
            <div className="col-md-5 col-sm-12 weagro-left-col">
              <div className="weagro-identity-block">

                {/* Large decorative text */}
                <span className="weagro-bg-text" aria-hidden="true">AGRO</span>

                {/* Logo / brand mark area */}
                <div className="weagro-brand-mark">
                  <div className="weagro-brand-icon">🌿</div>
                  <div className="weagro-brand-ring" />
                </div>

                {/* Big heading */}
                <div className="weagro-title-wrap">
                  <span className="weagro-we">We Are</span>
                  <h2 className="weagro-company-name">
                    Agro<span>Ventures</span>
                  </h2>
                  <span className="weagro-tagline">Plantations (Pvt) Ltd</span>
                </div>

                {/* Vertical divider line */}
                <div className="weagro-v-line" />

                {/* Est. badge */}
                <div className="weagro-est-badge">
                  <span className="weagro-est-label">Est.</span>
                  <span className="weagro-est-year">2018</span>
                  <span className="weagro-est-country">Sri Lanka</span>
                </div>

              </div>
            </div>

            {/* ── Right: Content ── */}
            <div className="col-md-7 col-sm-12 weagro-right-col">

              {/* Eyebrow */}
              <div className="weagro-eyebrow">
                <span className="weagro-eyebrow-line" />
                <span className="weagro-eyebrow-text">Who We Are</span>
                <span className="weagro-eyebrow-line" />
              </div>

              {/* Headline */}
              <h3 className="weagro-headline">
                Sri Lanka's Premier
                <span className="weagro-headline-accent"> Agricultural </span>
                Export Company
              </h3>

              {/* Divider */}
              <div className="weagro-divider" />

              {/* Body text */}
              <p className="weagro-body-lead">
                <strong>Agroventures Plantations (Pvt) Ltd</strong> is a company
                focused on Sri Lankan agriculture exports, as well as the local
                market, of <strong>spices, fruits and vegetables</strong> along
                with other crops grown in this island nation.
              </p>
              <p className="weagro-body">
                We cultivate on behalf of our customers who fund plantations,
                handling everything from soil to harvest — so our customers
                receive a generous return on their investment. All our
                cultivations are locally produced and environmentally safe,
                following sustainable practices at every step.
              </p>

              {/* Feature pillars */}
              <div className="weagro-pillars">
                <div className="weagro-pillar">
                  <div className="weagro-pillar-icon">🌱</div>
                  <div>
                    <span className="weagro-pillar-title">Sustainable</span>
                    <span className="weagro-pillar-sub">Eco-safe cultivation</span>
                  </div>
                </div>
                <div className="weagro-pillar">
                  <div className="weagro-pillar-icon">🤝</div>
                  <div>
                    <span className="weagro-pillar-title">Investor-Driven</span>
                    <span className="weagro-pillar-sub">Managed on your behalf</span>
                  </div>
                </div>
                <div className="weagro-pillar">
                  <div className="weagro-pillar-icon">🌍</div>
                  <div>
                    <span className="weagro-pillar-title">Export-Ready</span>
                    <span className="weagro-pillar-sub">Global market reach</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="weagro-cta">
                <Link to="/about-us" className="weagro-btn-primary">
                  <span>Read More</span>
                  <i className="fa fa-arrow-right weagro-btn-icon" />
                </Link>
                <div className="weagro-trust-badge">
                  <span className="weagro-trust-num">12+</span>
                  <span className="weagro-trust-label">Years Trusted</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Who We Are End */}
    </>
  );
};

export default WeAgroSection;