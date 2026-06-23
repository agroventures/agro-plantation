import React from "react";

const AboutHeaderSection = () => {
  return (
    <section className="avp-hero">
      <video className="avp-hero__video" autoPlay muted loop playsInline aria-hidden="true">
        <source
          src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/av-plantations/Website/About%20Us/6-1_hzllfq.mp4"
          type="video/mp4"
        />
      </video>
      <div className="avp-hero__scrim" aria-hidden="true" />
      <div className="avp-hero__body">
        <p className="avp-hero__kicker">
          <span className="avp-hero__kicker-rule" aria-hidden="true" />
          Who we are
        </p>

        <h1 className="avp-hero__headline">
          <span className="avp-hero__hl-solid">Agroventures</span>
          <span className="avp-hero__hl-outline" aria-hidden="true">Plantations</span>
          <span className="sr-only">Plantations</span>
        </h1>

        <div className="avp-hero__actions">
          <a href="https://www.youtube.com/watch?v=DyPH-yGnL9w"
            className="hero-btn-primary"
            target="_blank"
            rel="noopener noreferrer">
            <span className="avp-hero__dot-ring" aria-hidden="true">
              <span className="avp-hero__dot" />
            </span>
            <span> Watch our journey</span>

          </a>
          <a href="#about" className="avp-hero__btn-link">
            Our story
          </a>
        </div>
      </div>

      <div className="avp-hero__sidetag" aria-label="Established 2005, Sri Lanka">
        <p>Est. 2005</p>
        <p>Sri Lanka</p>
        <span className="avp-hero__side-rule" aria-hidden="true" />
      </div>
    </section>
  );
};

export default AboutHeaderSection;