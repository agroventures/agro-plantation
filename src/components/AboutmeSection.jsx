const AboutMeSection = () => {
  return (
    <section className="white-bg pb-0 pt-0">
      <div className="container">
        {/* <section className="director-section white-bg pb-0 pt-0 "> */}
        <div className="director-accent-bar" />
        <div className="row" style={{ margin: 0 }}>
          {/* ── Image ── */}
          <div className="col-md-5 col-sm-12 director-image-col">
            <img
              src="/images/director1.png"
              alt="Director – Mr. Nilanga Karunarathne"
            />
            <div className="director-image-overlay" />
            <div className="director-badge">
              <div className="director-badge-icon">🌱</div>
              <div>
                <div className="director-badge-label">Director</div>
                <div className="director-badge-name">
                  Mr. Nilanga Karunarathne
                </div>
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="col-md-7 col-sm-12 director-content-col">
            <span className="director-bg-watermark" aria-hidden="true">
              🍃
            </span>

            <div className="director-content-inner">
              <span className="director-eyebrow">Director's Message</span>

              <h2 className="director-title">
                Growing Sri Lanka's
                <span className="director-title-accent">
                  Agricultural Future
                </span>
              </h2>

              <div className="director-divider" />

              <div className="director-quote-wrap">
                <span className="director-open-quote">&ldquo;</span>
                <div className="director-body">
                  <p>
                    As the Founder of Agroventures Plantations, I am filled with
                    immense pride and gratitude for the journey we have
                    undertaken together. From the very inception of this
                    company, our vision was clear - to revolutionize Sri Lanka's
                    agricultural landscape by fostering sustainability,
                    empowering communities, and delivering exceptional produce
                    to the world.
                  </p>
                  <p>
                    Today, I stand humbled by the strides we have made and the
                    impact we have created. Our commitment to sustainable
                    practices has not only yielded premium crops but has also
                    preserved the precious environment that sustains us. We have
                    demonstrated that responsible agriculture can be a powerful
                    force for positive change, benefitting both farmers and
                    consumers alike.
                  </p>
                </div>
              </div>

              <div className="director-signature-block">
                <div className="director-avatar">NK</div>
                <div>
                  <p className="director-sig-name">Mr. Nilanga Karunarathne</p>
                  <p className="director-sig-role">
                    Founder &amp; Director, Agroventures Plantations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
