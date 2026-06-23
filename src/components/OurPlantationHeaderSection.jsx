import React from "react";
import { Link } from "react-router-dom";

const OurPlantationHeaderSection = () => {
  return (
    <section className="avp-hero">
      <video className="avp-hero__video" autoPlay muted loop playsInline aria-hidden="true">
        <source
          src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/av-plantations/Website/Our%20Plantations/8-1_n2nifd.mp4"
          type="video/mp4"
        />
      </video>
      <div className="avp-hero__scrim" aria-hidden="true" />


      <div className="avp-hero__body">
        <p className="avp-hero__kicker">
          <span className="avp-hero__kicker-rule" aria-hidden="true" />
          Timeless beauty &amp; heritage
        </p>

        <h1 className="avp-hero__headline">
          <span className="avp-hero__hl-solid">Discover Our</span>
          <span className="avp-hero__hl-outline" aria-hidden="true">Plantations</span>
          <span className="sr-only">Plantations</span>
        </h1>

          <div className="hero-cta-wrap">
                <a href="/events" className="hero-btn-secondary">
                  <span>See Our Work</span>
                  <i className="fa fa-arrow-right hero-btn-icon" />
                </a>
                <a href="/contact-us" className="hero-btn-primary">
                  <span>Contact Us</span>
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

export default OurPlantationHeaderSection;