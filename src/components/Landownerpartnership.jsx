import React, { useState } from "react";

const MODEL_STEPS = [
  {
    num: "01",
    icon: "fa-map-marked-alt",
    title: "Select Agricultural Land",
    text: "Customers select an available agricultural property according to the applicable land-sale terms.",
  },
  {
    num: "02",
    icon: "fa-file-signature",
    title: "Purchase & Ownership",
    text: "The customer purchases the property and ownership documentation is transferred to the purchaser through the applicable legal process.",
  },
  {
    num: "03",
    icon: "fa-handshake",
    title: "Lease to Agroventures",
    text: "Where agreed, the landowner leases the property to Agroventures under a separate lease agreement.",
  },
  {
    num: "04",
    icon: "fa-seedling",
    title: "Professional Cultivation",
    text: "Agroventures manages agricultural cultivation and related farm operations in accordance with the agreed arrangement.",
  },
  {
    num: "05",
    icon: "fa-file-invoice-dollar",
    title: "Contractual Lease Rental",
    text: "Agroventures pays the landowner the agreed lease rental in accordance with the lease agreement.",
  },
  {
    num: "06",
    icon: "fa-sync-alt",
    title: "Future Land Transaction",
    text: "At the end of the agreed lease period, the parties may mutually consider a future sale/purchase of the property under a separate agreement and applicable valuation/legal requirements.",
  },
];

const PILLARS = [
  {
    icon: "fa-scroll",
    title: "Purchase",
    text: "The amount paid for the purchase of the agricultural property.",
  },
  {
    icon: "fa-stamp",
    title: "Ownership",
    text: "Legal ownership documentation transferred to the purchaser.",
  },
  {
    icon: "fa-file-contract",
    title: "Lease",
    text: "A separate lease agreement between the landowner and Agroventures.",
  },
  {
    icon: "fa-leaf",
    title: "Cultivation",
    text: "Professional agricultural cultivation and farm management by Agroventures.",
  },
  {
    icon: "fa-hand-holding-usd",
    title: "Lease Rental",
    text: "The contractual rental payable to the landowner under the lease agreement.",
  },
  {
    icon: "fa-balance-scale",
    title: "Future Options",
    text: "A possible future sale/purchase, subject to separate agreement and valuation.",
  },
];

const FAQS = [
  {
    q: "Who owns the land?",
    a: "The purchaser becomes the landowner following completion of the applicable sale, conveyancing and registration process.",
  },
  {
    q: "Does Agroventures own my land?",
    a: "Where the property is sold to the customer and ownership is transferred, the customer is the landowner. Agroventures may lease the property under a separate agreement.",
  },
  {
    q: "Why does Agroventures lease the land?",
    a: "The lease arrangement enables Agroventures to manage cultivation and agricultural operations on the property under agreed contractual terms.",
  },
  {
    q: "What is the monthly payment?",
    a: "Where applicable, the landowner receives the lease rental specified in the applicable lease agreement.",
  },
  {
    q: "Is the lease rental a financial return?",
    a: "The lease rental is a contractual payment arising from the lease arrangement between the landowner and Agroventures.",
  },
  {
    q: "Will Agroventures purchase the land after the lease period?",
    a: "At the end of the agreed lease period, the parties may mutually consider a future sale and purchase, subject to a separate agreement, applicable valuation and legal requirements.",
  },
  {
    q: "Is a future purchase guaranteed?",
    a: "Any future sale/purchase will be subject to the applicable agreement and legal requirements. Please refer to the specific contractual documents applicable to the property.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="lp-faq-item">
      <button
        className={`lp-faq-question ${isOpen ? "lp-faq-open" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`} />
      </button>
      <div className={`lp-faq-answer ${isOpen ? "lp-faq-answer-open" : ""}`}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function LandownerPartnership() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="lp-page">
      {/* ============ HERO ============ */}
      <section className="lp-hero avp-hero">
        <video
          className="avp-hero__video"
          src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/av-plantations/Website/Branch%20Network/9-1_tifudo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="avp-hero__scrim" />

        <div className="avp-hero__body">
          <div className="avp-hero__kicker">
            <span className="avp-hero__kicker-rule" />
            Agricultural Land Ownership &amp; Cultivation Model
          </div>

          <h1 className="avp-hero__headline">
            <span className="avp-hero__hl-solid">Own Agricultural Land.</span>
            <span className="avp-hero__hl-outline">
              Partner With Agroventures.
            </span>
          </h1>

          <p className="lp-hero-sub">
            A structured agricultural land ownership and professional
            cultivation model.
          </p>
        </div>
      </section>

      {/* ============ MODEL STORY STRIP ============ */}
      <section className="lp-story-section">
        <div className="container">
          <div className="lp-story-track">
            {["Land", "Cultivation", "Harvest", "Processing", "Export"].map(
              (step, i, arr) => (
                <React.Fragment key={step}>
                  <div className="lp-story-node">
                    <span className="lp-story-num">{`0${i + 1}`}</span>
                    <span className="lp-story-label">{step}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="lp-story-arrow">
                      <i className="fas fa-long-arrow-alt-right" />
                    </span>
                  )}
                </React.Fragment>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ============ THE SIX PILLARS ============ */}
      <section className="lp-pillars-section">
        <div className="container">
          <div className="lp-heading">
            <div className="lp-eyebrow">
              <span className="lp-eyebrow-dot" />
              The Landowner Partnership Model
            </div>
            <h2 className="lp-title">
              How Ownership <span>Meets Cultivation</span>
            </h2>
            <div className="lp-divider" />
            <p className="lp-subtitle">
              Six clear elements, each governed by its own agreement - never
              bundled into a single undefined arrangement.
            </p>
          </div>

          <div className="row">
            {PILLARS.map((p, i) => (
              <div className="col-lg-4 col-md-6 lp-pillar-col" key={p.title}>
                <div className="lp-pillar-card">
                  <span className="lp-pillar-number">{`0${i + 1}`}</span>
                  <div className="lp-pillar-icon-wrap">
                    <i className={`fas ${p.icon}`} />
                  </div>
                  <h3 className="lp-pillar-title">{p.title}</h3>
                  <p className="lp-pillar-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="lp-faq-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="lp-heading lp-heading-left">
                <div className="lp-eyebrow">
                  <span className="lp-eyebrow-dot" />
                  Frequently Asked
                </div>
                <h2 className="lp-title">
                  Landowner <span>Partnership FAQs</span>
                </h2>
                <div className="lp-divider" />
                <p className="lp-subtitle">
                  Straight answers about ownership, the lease arrangement and
                  any future land transaction.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="lp-faq-list">
                {FAQS.map((item, i) => (
                  <FaqItem
                    key={item.q}
                    item={item}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INFORMATION NOTICE ============ */}
      <section className="lp-notice-section">
        <div className="container">
          <div className="lp-notice-box">
            <i className="fas fa-info-circle lp-notice-icon" />
            <p>
              Agricultural land purchases, lease arrangements and agricultural
              operations are subject to the specific agreements applicable to
              each property. Ownership, lease rental, cultivation arrangements
              and any future sale or purchase are governed by their respective
              contractual documents and applicable law. Agricultural performance
              and crop yields may vary due to weather, market conditions,
              agronomic factors and other circumstances. Prospective purchasers
              should review the applicable property and contractual
              documentation before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="lp-cta-section">
        <div className="container">
          <div className="lp-cta-box">
            <div className="lp-cta-text">
              <h3>Ready to explore agricultural land ownership?</h3>
              <p>
                Speak with our team about available properties and the landowner
                partnership model.
              </p>
            </div>
            <div className="lp-cta-actions">
              <a href="/agricultural-land" className="lp-btn-primary">
                <span>Explore Agricultural Land</span>
                <i className="fas fa-arrow-right" />
              </a>
              <a href="/contact" className="lp-btn-outline">
                <span>Contact Agroventures</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
