const OurTrustedPartnerSection = () => {
  return (
     <section className="trusted-partner-section">
 
      {/* KPMG text watermark */}
      <div className="tp-watermark" aria-hidden="true">
        KPMG
      </div>
 
      <div className="container tp-content">
        <div className="row">
          <div className="col-sm-12">
            <div className="virtues-heading">
              <span className="virtues-eyebrow">
                <span className="virtues-eyebrow-line" />
                Our
                <span className="virtues-eyebrow-line" />
              </span>
              <h2 className="virtues-main-title">
                Trusted
                <span className="virtues-title-accent"> Partner</span>
              </h2>
             <img src="/images/divider.png" alt="divider" />{" "}
            </div>
          </div>
        </div>
 
        <div className="row">
          <div className="col-sm-12">
            <div className="tp-card-wrap">
              <a
                href="https://kpmg.com/lk/en/home.html"
                target="_blank"
                rel="noopener noreferrer"
                className="tp-card"
              >
                <img
                  className="tp-logo"
                  src="https://assets.kpmg.com/is/image/kpmg/kpmg-logo-2"
                  alt="KPMG"
                />
                <div className="tp-divider" />
                <div className="tp-info">
                  <p className="tp-name">KPMG Sri Lanka</p>
                  <p className="tp-tagline">Audit · Tax · Advisory</p>
                  <span className="tp-badge">Official Partner</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
 
    </section>
  );
};

export default OurTrustedPartnerSection;