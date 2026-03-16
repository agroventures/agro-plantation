const AboutManagerSection = () => {
  return (
    <section className="hr-section">
      <div className="hr-accent-bar" />

      <div className="container-fluid hr-fluid-wrap">
        <div className="hr-row">

          {/* ── Content (LEFT on desktop, BOTTOM on mobile) ── */}
          <div className="col-md-7 col-sm-12 hr-content-col">
            <span className="hr-bg-watermark" aria-hidden="true">👥</span>

            <div className="hr-content-inner">
              <span className="hr-eyebrow">Director of HR's Message</span>

              <h2 className="hr-title">
                Cultivating People,
                <span className="hr-title-accent">Growing Together</span>
              </h2>

              <div className="hr-divider" />

              <div className="hr-tags">
                <span className="hr-tag"><span className="hr-tag-dot" />Talent Development</span>
                <span className="hr-tag"><span className="hr-tag-dot" />Employee Wellbeing</span>
                <span className="hr-tag"><span className="hr-tag-dot" />Community Growth</span>
              </div>

              <div className="hr-quote-wrap">
                <span className="hr-open-quote">&ldquo;</span>
                <div className="hr-body">
                  <p>
                    At Agroventures Plantations, our greatest asset is not the land
                    we cultivate — it is the people who tend to it. As Director of
                    Human Resources, my commitment is to ensure that every individual
                    who walks through our doors finds not just a job, but a purpose,
                    a community, and a pathway to grow.
                  </p>
                  <p>
                    We invest deeply in the development of our workforce, from our
                    plantation teams in the field to our management staff in the
                    office. Through continuous training, fair opportunities, and a
                    culture of respect, we are building an organization where people
                    thrive — because when our people flourish, so does every harvest
                    we bring to the world.
                  </p>
                </div>
              </div>

              <div className="hr-signature-block">
                <div className="hr-avatar">MH</div>
                <div>
                  <p className="hr-sig-name">Mrs. Manori Hettiarachi</p>
                  <p className="hr-sig-role">
                    Director of Human Resources, Agroventures Plantations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Image (RIGHT on desktop, TOP on mobile) ── */}
          <div className="col-md-5 col-sm-12 hr-image-col">
            <img
              src="/images/team/team-hr.webp"
              alt="Director of HR – Agroventures Plantations"
            />
            <div className="hr-image-overlay" />
            <div className="hr-image-frame" />
            <div className="hr-badge">
              <div className="hr-badge-icon">👥</div>
              <div>
                <div className="hr-badge-label">Director of HR</div>
                <div className="hr-badge-name">Mrs. Manori Hettiarachi</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutManagerSection;