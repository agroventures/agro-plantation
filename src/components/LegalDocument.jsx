import React, { useState } from "react";

const DOCUMENTS = [
  {
    icon: "fa-file-contract",
    title: "Land Sale Agreement",
    text:
      "The governing agreement for the purchase of an agricultural property, including price, terms and conditions of sale.",
    href: "/documents/land-sale-agreement.pdf",
  },
  {
    icon: "fa-stamp",
    title: "Deed / Transfer Documentation",
    text:
      "Ownership documentation confirming legal transfer of the property to the purchaser through the applicable conveyancing and registration process.",
    href: "/documents/deed-transfer-documentation.pdf",
  },
  {
    icon: "fa-handshake",
    title: "Lease Agreement",
    text:
      "Where applicable, the separate agreement under which the landowner leases the property to Agroventures for cultivation and management.",
    href: "/documents/lease-agreement.pdf",
  },
  {
    icon: "fa-calculator",
    title: "Lease Rental Calculation",
    text:
      "The formula and basis used to calculate the contractual lease rental payable to the landowner under the lease agreement.",
    href: "/documents/lease-rental-calculation.pdf",
  },
  {
    icon: "fa-sync-alt",
    title: "Future Sale / Purchase Arrangement",
    text:
      "Terms governing any future sale or purchase of the property at the end of the agreed lease period, subject to valuation and legal requirements.",
    href: "/documents/future-sale-purchase-arrangement.pdf",
  },
  {
    icon: "fa-user-edit",
    title: "Customer Application Form",
    text:
      "The form used to apply for an available agricultural property, prior to completion of the sale and conveyancing process.",
    href: "/documents/customer-application-form.pdf",
  },
];

const KEY_TERMS = [
  {
    term: "Land Purchase",
    def: "The amount paid for the purchase of the agricultural property.",
  },
  {
    term: "Ownership",
    def: "The legal ownership transferred to the purchaser through the applicable land registration process.",
  },
  {
    term: "Lease",
    def: "Any separate lease agreement between the landowner and Agroventures.",
  },
  {
    term: "Lease Rental",
    def: "The contractual rental payable to the landowner under the lease agreement.",
  },
  {
    term: "Agricultural Operations",
    def: "The cultivation and farm-management activities Agroventures carries out on the property.",
  },
  {
    term: "Future Transaction",
    def: "Any future sale/purchase of the property, described according to the actual legal arrangement in place.",
  },
];

function DocCard({ doc }) {
  return (
    <div className="ld-doc-card">
      <div className="ld-doc-icon">
        <i className={`fas ${doc.icon}`} />
      </div>
      <div className="ld-doc-body">
        <h3 className="ld-doc-title">{doc.title}</h3>
        <p className="ld-doc-text">{doc.text}</p>
      </div>
      <a href={doc.href} className="ld-doc-link" target="_blank" rel="noreferrer">
        <span>View Document</span>
        <i className="fas fa-arrow-right" />
      </a>
    </div>
  );
}

export default function LegalDocuments() {
  const [activeTerm, setActiveTerm] = useState(0);

  return (
    <main className="ld-page">
      {/* ============ PAGE HEADER ============ */}
      <section className="ld-header avp-hero">
        <div className="avp-hero__scrim" />
        <div className="avp-hero__body">
          <div className="avp-hero__kicker">
            <span className="avp-hero__kicker-rule" />
            Legal &amp; Contractual Documentation
          </div>
          <h1 className="avp-hero__headline">
            <span className="avp-hero__hl-solid">Legal</span>
            <span className="avp-hero__hl-outline">Documents</span>
          </h1>
          <p className="ld-header-sub">
            The agreements and documentation that govern land ownership,
            leasing and any future property transaction with Agroventures.
          </p>
        </div>
      </section>


      {/* ============ DOCUMENT LIBRARY ============ */}
      <section className="ld-docs-section">
        <div className="container">
          <div className="ld-heading">
            <div className="ld-eyebrow">
              <span className="ld-eyebrow-dot" />
              Document Library
            </div>
            <h2 className="ld-title">
              Agreements &amp; <span>Documentation</span>
            </h2>
            <div className="ld-divider" />
            <p className="ld-subtitle">
              Each stage of the land ownership and cultivation model is
              governed by its own document - reviewed and approved before
              use.
            </p>
          </div>

          <div className="ld-doc-grid">
            {DOCUMENTS.map((doc) => (
              <DocCard doc={doc} key={doc.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ KEY TERMS REFERENCE ============ */}
      <section className="ld-terms-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ld-heading ld-heading-left">
                <div className="ld-eyebrow">
                  <span className="ld-eyebrow-dot" />
                  Reference
                </div>
                <h2 className="ld-title">
                  Key Terms <span>Explained</span>
                </h2>
                <div className="ld-divider" />
                <p className="ld-subtitle">
                  Plain-language definitions of the terms used across our
                  agreements and documentation.
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="ld-terms-list">
                {KEY_TERMS.map((t, i) => (
                  <button
                    key={t.term}
                    className={`ld-term-row ${
                      activeTerm === i ? "ld-term-row-active" : ""
                    }`}
                    onClick={() => setActiveTerm(i)}
                  >
                    <span className="ld-term-name">{t.term}</span>
                    <span className="ld-term-def">{t.def}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DOCUMENT REVIEW ORDER ============ */}
      <section className="ld-order-section">
        <div className="container">
          <div className="ld-heading">
            <div className="ld-eyebrow ld-eyebrow-light">
              <span className="ld-eyebrow-dot" />
              Consistency Across Documents
            </div>
            <h2 className="ld-title ld-title-light">
              Documents Reviewed <span>Together</span>
            </h2>
            <div className="ld-divider" />
            <p className="ld-subtitle ld-subtitle-light">
              These records are reviewed as a set before any property is
              marketed, to keep our website, brochures and agreements
              aligned.
            </p>
          </div>

          <ol className="ld-order-list">
            <li>Land Sale Agreement</li>
            <li>Deed / Transfer Documentation</li>
            <li>Lease Agreement</li>
            <li>Lease Rental Calculation</li>
            <li>Future Sale / Purchase Arrangement</li>
            <li>Customer Application Form</li>
            <li>Website</li>
            <li>Advertisement</li>
            <li>Sales Communication</li>
          </ol>
        </div>
      </section>

      {/* ============ INFORMATION NOTICE ============ */}
      <section className="ld-notice-section">
        <div className="container">
          <div className="ld-notice-box">
            <i className="fas fa-info-circle ld-notice-icon" />
            <div>
              <h4>Important Information</h4>
              <p>
                Agricultural land purchases, lease arrangements and
                agricultural operations are subject to the specific
                agreements applicable to each property. Ownership, lease
                rental, cultivation arrangements and any future sale or
                purchase are governed by their respective contractual
                documents and applicable law. Agricultural performance and
                crop yields may vary due to weather, market conditions,
                agronomic factors and other circumstances. Prospective
                purchasers should review the applicable property and
                contractual documentation before proceeding.
              </p>
            </div>
          </div>

          <div className="ld-version-tag">
            <i className="fas fa-check-circle" />
            Website Content Version: September 2026 - Approved
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="ld-cta-section">
        <div className="container">
          <div className="ld-cta-box">
            <div className="ld-cta-text">
              <h3>Have a question about a specific document?</h3>
              <p>
                Our team can walk you through any agreement before you sign.
              </p>
            </div>
            <div className="ld-cta-actions">
              <a href="/contact" className="ld-btn-primary">
                <span>Contact Agroventures</span>
                <i className="fas fa-arrow-right" />
              </a>
              <a href="/landowner-partnership" className="ld-btn-outline">
                <span>Landowner Partnership</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}