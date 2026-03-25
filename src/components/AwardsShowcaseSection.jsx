import { useState, useEffect } from "react";

const AwardsShowcaseSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const awards = [
    {
      id: 1,
      image: "/images/gwp.png",
      certificateImage: "/images/gwp-certificate.webp",
      badge: "/images/gwp-badge.png",
      title: "Great Place to Work",
      year: "2025",
      category: "Workplace Excellence",
      organization: "Great Place to Work® Institute",
      description:
        "We are proud to be certified as a Great Place to Work®, recognizing our commitment to creating an outstanding employee experience. This certification reflects our dedication to building trust, pride, and camaraderie among our team members.",
      highlights: [
        "95% employee satisfaction rate",
        "Inclusive workplace culture",
        "Employee growth & development programs",
        "Work-life balance initiatives",
      ],
      color: "#004d4d",
    },
    {
      id: 2,
      image: "/images/certificate2.png",
      certificateImage: "/images/best-workplace.png",
      badge: "/images/best-workplace-badge.png",
      title: "Best Workplaces in Manufacturing & Production",
      year: "2026",
      category: "Industry Recognition",
      organization: "Great Place to Work® Sri Lanka",
      description:
        "Recognized among the Best Workplaces in Manufacturing & Production sector in Sri Lanka. This award acknowledges our innovative practices, safety standards, and commitment to employee welfare in the agricultural manufacturing industry.",
      highlights: [
        "Top-tier safety standards",
        "Innovation in production processes",
        "Sustainable manufacturing practices",
        "Employee empowerment programs",
      ],
      color: "#004d4d",
    },
    {
      id: 3,
      image: "/images/certificate.png",
      certificateImage: "/images/iso-certificate.jpeg",
      badge: "/images/iso-badge.png",
      title: "ISO 22000 Certification",
      year: "Certified",
      category: "Food Safety Management",
      organization: "International Organization for Standardization",
      description:
        "Our ISO 22000 certification demonstrates our unwavering commitment to food safety management systems. This internationally recognized standard ensures that our products meet the highest quality and safety requirements throughout the entire supply chain.",
      highlights: [
        "International food safety standards",
        "Hazard analysis & critical control points",
        "Continuous improvement protocols",
        "Traceability & quality assurance",
      ],
      color: "#004d4d",
    },
  ];

  // const awardsGallery = [
  //   {
  //     id: 1,
  //     image: "/images/no-image.jpg",
  //     certificateImage: "/images/no-image.jpg",
  //     title: "Asian Heroes Platinum Award",
  //     year: "2023",
  //     description:
  //       "A prestigious recognition honoring outstanding leadership, innovation, and impactful contributions across Asia.",
  //     color: "#004d4d",
  //   },
  //   {
  //     id: 2,
  //     image: "/images/no-image.jpg",
  //     certificateImage: "/images/no-image.jpg",
  //     title: "CEO Sri Lanka Award - Innovative Entrepreneur of the year",
  //     year: "2022",
  //     description:
  //       "Awarded for exceptional entrepreneurial vision, creativity, and the ability to drive business growth through innovative strategies in Sri Lanka.",
  //     color: "#004d4d",
  //   },
  // ];

  const openCertificate = (certificateImg) => {
    setSelectedImage(certificateImg);
  };

  const closeCertificate = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <section className="awards-showcase" id="awards-showcase">
      <div className="container">
        {/* Section Header */}
        <div className="awards-section-header">
          <span className="awards-section-tag">Our Pride</span>
          <h2 className="awards-section-title">
            Milestones of <span>Excellence</span>
          </h2>
          <p className="awards-section-subtitle">
            Each recognition reflects our team's dedication to quality, safety,
            and creating a positive impact in the agricultural industry.
          </p>
        </div>

        {/* Awards List */}
        <div className="awards-list">
          {awards.map((award, index) => (
            <div
              className={`award-card ${index % 2 !== 0 ? "award-card-reverse" : ""}`}
              key={award.id}
            >
              <div className="award-card-image">
                <div className="award-image-wrapper">
                  <div
                    className="award-image-bg"
                    style={{
                      background: `linear-gradient(135deg, ${award.color}15, ${award.color}30)`,
                    }}
                  />
                  <img src={award.image} alt={award.title} />
                  <div
                    className="award-year-badge"
                    style={{ background: award.color }}
                  >
                    {award.year}
                  </div>
                </div>
                <div
                  className="award-image-deco award-image-deco-1"
                  style={{ borderColor: award.color }}
                />
                <div
                  className="award-image-deco award-image-deco-2"
                  style={{ borderColor: award.color }}
                />
              </div>

              <div className="award-card-content">
                <div className="award-category" style={{ color: award.color }}>
                  <i className="fa fa-certificate" />
                  <span>{award.category}</span>
                </div>
                <h3 className="award-title">{award.title}</h3>
                <div className="award-org">
                  <i className="fa fa-building-o" />
                  <span>Awarded by: {award.organization}</span>
                </div>
                <p className="award-description">{award.description}</p>
                <div className="award-highlights">
                  <h4 className="award-highlights-title">
                    <i className="fa fa-star" style={{ color: award.color }} />
                    Key Highlights
                  </h4>
                  <ul className="award-highlights-list">
                    {award.highlights.map((highlight, i) => (
                      <li key={i}>
                        <span
                          className="highlight-icon"
                          style={{ background: award.color }}
                        >
                          <i className="fa fa-check" />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="award-actions">
                  {/* <a href="#" className="award-btn-learn" style={{ background: award.color }}>
                    <span>Learn More</span>
                    <i className="fa fa-arrow-right" />
                  </a> */}
                  <button
                    className="award-btn-certificate"
                    onClick={() => openCertificate(award.certificateImage)}
                  >
                    <i className="fa fa-file-pdf-o" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Gallery Section */}
        {/* <div className="awards-gallery-section">
          <div className="awards-gallery-header">
            <span className="awards-gallery-tag">
              <i className="fa fa-th-large" />
              Awards Gallery
            </span>
            <h3 className="awards-gallery-title">
              Our <span>Achievements</span> at a Glance
            </h3>
            <p className="awards-gallery-subtitle">
              Browse through our collection of awards and certifications. Click on any award to view the full certificate.
            </p>
          </div>

          <div className="awards-gallery-grid">
            {awardsGallery.map((item) => (
              <div className="gallery-award-card" key={item.id}>
                <div className="gallery-award-image-wrap">
                  <div
                    className="gallery-award-overlay"
                    style={{ background: `linear-gradient(135deg, ${item.color}dd, ${item.color}99)` }}
                  >
                    <button
                      className="gallery-view-btn"
                      onClick={() => openCertificate(item.certificateImage)}
                    >
                      <i className="fa fa-search-plus" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-award-year" style={{ background: item.color }}>
                    {item.year}
                  </div>
                </div>
                <div className="gallery-award-info">
                  <h4 className="gallery-award-name">{item.title}</h4>
                  <p className="gallery-award-desc">{item.description}</p>
                  <button
                    className="gallery-cert-link"
                    onClick={() => openCertificate(item.certificateImage)}
                    style={{ color: item.color }}
                  >
                    <i className="fa fa-external-link" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}

{/* ═══════════════════════════════════════════
   Certificate Popup - Centered
═══════════════════════════════════════════ */}
        {selectedImage && (
          <div className="cert-popup-overlay" onClick={closeCertificate}>
            <div className="cert-popup" onClick={(e) => e.stopPropagation()}>
              <button className="cert-popup-close" onClick={closeCertificate}>
                <i className="fa fa-times" />
              </button>
              <div className="cert-popup-image-area">
                <img src={selectedImage} alt="Certificate" />
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="awards-stats">
          <div className="awards-stats-inner">
            <div className="award-stat-item">
              <div className="award-stat-icon">
                <i className="fa fa-trophy" />
              </div>
              <div className="award-stat-content">
                <span className="award-stat-number">10+</span>
                <span className="award-stat-label">Awards Won</span>
              </div>
            </div>
            <div className="award-stat-divider" />
            <div className="award-stat-item">
              <div className="award-stat-icon">
                <i className="fa fa-certificate" />
              </div>
              <div className="award-stat-content">
                <span className="award-stat-number">645+</span>
                <span className="award-stat-label">Team Members</span>
              </div>
            </div>
            <div className="award-stat-divider" />
            <div className="award-stat-item">
              <div className="award-stat-icon">
                <i className="fa fa-users" />
              </div>
              <div className="award-stat-content">
                <span className="award-stat-number">10+</span>
                <span className="award-stat-label">Employee Satisfaction</span>
              </div>
            </div>
            <div className="award-stat-divider" />
            <div className="award-stat-item">
              <div className="award-stat-icon">
                <i className="fa fa-globe" />
              </div>
              <div className="award-stat-content">
                <span className="award-stat-number">12,440+</span>
                <span className="award-stat-label">Clients' Satisfactions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        {/* <div className="awards-timeline">
          <h3 className="awards-timeline-title">Our Journey of Excellence</h3>
          <div className="awards-timeline-track">
            <div className="timeline-item">
              <div className="timeline-year">2014</div>
              <div className="timeline-dot" />
              <div className="timeline-content">Company Founded</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-dot" />
              <div className="timeline-content">First Industry Award</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-dot" />
              <div className="timeline-content">ISO 22000 Certified</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-dot active" />
              <div className="timeline-content">Great Place to Work</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-dot active" />
              <div className="timeline-content">Best Workplaces Award</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AwardsShowcaseSection;
