import { useParams, Link, Navigate } from "react-router-dom";
import { cropsData } from "../datas/cropsData";

const CropDetail = () => {
  const { slug } = useParams();
  const crop = cropsData.find((c) => c.slug === slug);

  if (!crop) return <Navigate to="/" replace />;

  return (
    <>
      {/* ── Hero ── */}
      <section className="crop-hero" style={{ "--crop-color": crop.color }}>
        <div
          className="crop-hero-bg"
          style={{ backgroundImage: `url(${crop.heroImage})` }}
        />
        <div className="crop-hero-overlay" />
        <div className="crop-hero-content container">
          {/* Breadcrumb */}
          <div className="crop-breadcrumb">
            <Link to="/" className="crop-breadcrumb-link">
              Home
            </Link>
            <i className="fa fa-chevron-right crop-breadcrumb-sep" />
            <span className="crop-breadcrumb-link">Crops</span>
            <i className="fa fa-chevron-right crop-breadcrumb-sep" />
            <span className="crop-breadcrumb-current">{crop.name}</span>
          </div>

          <div className="crop-hero-tag">
            <i className={`fa ${crop.icon}`} />
            <span>Agroventures Cultivation</span>
          </div>
          <h1 className="crop-hero-title">{crop.name}</h1>
          <p className="crop-hero-tagline">{crop.tagline}</p>
        </div>

        {/* Other crops quick nav */}
        <div className="crop-quick-nav">
          {cropsData.map((c) => (
            <Link
              key={c.slug}
              to={`/crops/${c.slug}`}
              className={`crop-quick-nav-item${c.slug === slug ? " active" : ""}`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="crop-overview">
        <div className="container">
          <div className="crop-overview-grid">
            <div className="crop-overview-text">
              <span
                className="crop-section-tag"
                style={{ color: crop.color, borderColor: crop.color }}
              >
                Overview
              </span>
              <h2 className="crop-section-title">
                About {crop.name} Cultivation
              </h2>
              <p className="crop-overview-desc">{crop.description}</p>
              <Link to="/contact-us" className="crop-btn-primary">
                <span>Enquire Now</span>
                <i className="fa fa-arrow-right" />
              </Link>
            </div>

            <div className="crop-highlights-grid">
              {crop.highlights.map((h, i) => (
                <div className="crop-highlight-card" key={i}>
                  <div
                    className="crop-highlight-icon"
                    style={{ background: crop.color }}
                  >
                    <i className={`fa ${h.icon}`} />
                  </div>
                  <div>
                    <div className="crop-highlight-label">{h.label}</div>
                    <div className="crop-highlight-value">{h.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="crop-process">
        <div className="container">
          <div className="crop-section-header">
            <span
              className="crop-section-tag"
              style={{ color: crop.color, borderColor: crop.color }}
            >
              Our Process
            </span>
            <h2 className="crop-section-title">From Field to Market</h2>
          </div>
          <div className="crop-process-grid">
            {crop.process.map((p, i) => (
              <div className="crop-process-card" key={i}>
                <div
                  className="crop-process-step"
                  style={{ color: crop.color }}
                >
                  {p.step}
                </div>
                <h4 className="crop-process-title">{p.title}</h4>
                <p className="crop-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="crop-cta" style={{ background: crop.color }}>
        <div className="container crop-cta-inner">
          <div>
            <h3 className="crop-cta-title">
              Interested in {crop.name} Cultivation?
            </h3>
            <p className="crop-cta-sub">
              Contact our team to learn about land ownership and cultivation
              plans.
            </p>
          </div>
          <div className="crop-cta-actions">
            <Link to="/contact-us" className="crop-cta-btn-white">
              Contact Us
            </Link>
            <Link to="/available-properties" className="crop-cta-btn-outline">
            Available Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CropDetail;
