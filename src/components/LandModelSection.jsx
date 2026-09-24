const steps = [
  {
    number: "01",
    icon: "fas fa-map-marked-alt",
    title: "Select Agricultural Land",
    desc: "Customers select an available agricultural property according to the applicable land-sale terms.",
  },
  {
    number: "02",
    icon: "fas fa-file-signature",
    title: "Purchase & Ownership",
    desc: "The customer purchases the property and ownership documentation is transferred to the purchaser through the applicable legal process.",
  },
  {
    number: "03",
    icon: "fas fa-handshake",
    title: "Lease to Agroventures",
    desc: "Where agreed, the landowner leases the property to Agroventures under a separate lease agreement.",
  },
  {
    number: "04",
    icon: "fas fa-seedling",
    title: "Professional Cultivation",
    desc: "Agroventures manages agricultural cultivation and related farm operations in accordance with the agreed arrangement.",
  },
  {
    number: "05",
    icon: "fas fa-coins",
    title: "Contractual Lease Rental",
    desc: "Agroventures pays the landowner the agreed lease rental in accordance with the lease agreement.",
  },
  {
    number: "06",
    icon: "fas fa-chart-line",
    title: "Future Land Transaction",
    desc: "At the end of the agreed lease period, the parties may mutually consider a future sale/purchase of the property under a separate agreement and applicable valuation/legal requirements.",
  },
];

const LandModelSection = () => {
  return (
    <section id="landmodel-section" className="landmodel-section">
      <div className="landmodel-bg-overlay" />
      <div className="landmodel-bg-grid" />

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="landmodel-heading">
              <span className="landmodel-eyebrow">
                <span className="landmodel-eyebrow-line" />
                Our Model
                <span className="landmodel-eyebrow-line" />
              </span>
              <h2 className="landmodel-main-title">
                How the Agroventures
                <span className="landmodel-title-accent"> Land Model Works</span>
              </h2>
              <p className="landmodel-subtitle">
                A transparent, structured process from land selection to long-term partnership.
              </p>
            </div>
          </div>
        </div>

        <div className="row landmodel-steps-row">
          {steps.map((step, i) => (
            <div className="col-md-4 col-sm-6 col-xs-12 landmodel-step-wrap" key={i}>
              <div className="landmodel-step-card">
                <div className="landmodel-step-top-bar" />
                <span className="landmodel-step-number">{step.number}</span>
                <div className="landmodel-step-icon-wrap">
                  <div className="landmodel-step-icon-ring" />
                  <i className={`${step.icon} landmodel-step-icon`} />
                </div>
                <h5 className="landmodel-step-title">{step.title}</h5>
                <div className="landmodel-step-divider" />
                <p className="landmodel-step-desc">{step.desc}</p>
                <div className="landmodel-step-bottom-bar" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandModelSection;
