import React from "react";
import { Link } from "react-router-dom";

const BranchHeaderSection = () => {
  return (
    <section className="avp-hero">
      <video className="avp-hero__video" autoPlay muted loop playsInline aria-hidden="true">
        <source
          src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/av-plantations/Website/Branch%20Network/9-1_tifudo.mp4"
          type="video/mp4"
        />
      </video>
      <div className="avp-hero__scrim" aria-hidden="true" />

     
      <div className="avp-hero__body">
        <p className="avp-hero__kicker">
          <span className="avp-hero__kicker-rule" aria-hidden="true" />
          Our extensive
        </p>

        <h1 className="avp-hero__headline">
          <span className="avp-hero__hl-solid">Branch</span>
          <span className="avp-hero__hl-outline" aria-hidden="true">Network</span>
          <span className="sr-only">Network</span>
        </h1>

       

          <div className="hero-cta-wrap">
                <a href="/about-us" className="hero-btn-primary">
                  <span>About Us</span>
                  <i className="fa fa-arrow-right hero-btn-icon" />
                </a>
                <a href="/contact-us" className="hero-btn-secondary">
                  <span> Our Plantations</span>
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

export default BranchHeaderSection;