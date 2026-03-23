import { useState } from "react";

const branches = [
  {
    id: "head-office",
    name: "Head Office",
    address: "253, Kaduwela Road, Thalangama, Koswatta.",
    contact: "+94 (11) 287 8766",
    email: "info@agroventuresplantations.lk",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8574202206237!2d79.92745087350724!3d6.907647218583161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257002cdff261%3A0x5c380231f9b1b6!2sThe%20Vanilla%20Shop!5e0!3m2!1sen!2slk!4v1772601741159!5m2!1sen!2slk",
    tag: "HQ",
  },
  {
    id: "corporate-office",
    name: "Corporate Office",
    address: "48 Sir Marcus Fernando Mawatha, Colombo 7",
    contact: "+94 (11) 220 1220",
    email: "info@agroventuresexports.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8428106903148!2d79.85783397350721!3d6.9093914185618095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f84c7e64b3%3A0x969f0df303642a7e!2sAgro%20Ventures%20Exports%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1767863615446!5m2!1sen!2slk",
    tag: "Corp",
  },
  {
    id: "kottawa",
    name: "Kottawa",
    address: "No. 364/11/A, High Level Road, Kottawa",
    contact: "+94 (11) 227 9198",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6!2d80.0277!3d6.8420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f5a1e1e4f9b%3A0x3ae24f5a1e1e4f9b!2sKottawa%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk",
  },
  {
    id: "colombo-premier",
    name: "Colombo Premier",
    address: "No. 525, Union Place, Colombo 03",
    contact: "+94 (11) 220 2256",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9!2d79.8600!3d6.9050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259a0b9e4e7e3%3A0x3ae259a0b9e4e7e3!2sUnion%20Place%2C%20Colombo%2003!5e0!3m2!1sen!2slk!4v1700000000001!5m2!1sen!2slk",
  },
  {
    id: "wattala",
    name: "Wattala",
    address: "No. 604/1/2, 2nd Floor, Negombo Road, Mabola, Wattala",
    contact: "+94 (11) 294 9421",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3!2d79.8900!3d6.9800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f9d75af0edd7%3A0x3ae2f9d75af0edd7!2sMabola%2C%20Wattala!5e0!3m2!1sen!2slk!4v1700000000002!5m2!1sen!2slk",
  },
  {
    id: "negombo",
    name: "Negombo",
    address: "No. 318 2/1, Colombo Road, Negombo",
    contact: "+94 (31) 212 1233",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d79.8380!3d7.2090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee85e31c5c89%3A0x3ae2ee85e31c5c89!2sColombo%20Road%2C%20Negombo!5e0!3m2!1sen!2slk!4v1700000000003!5m2!1sen!2slk",
  },
  {
    id: "kurunegala",
    name: "Kurunegala",
    address: "No. 357/1, Colombo Road, Wehera, Kurunegala",
    contact: "+94 (37) 220 0622",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1!2d80.3540!3d7.4870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33ce23b0b5e2f%3A0x3ae33ce23b0b5e2f!2sWehera%2C%20Kurunegala!5e0!3m2!1sen!2slk!4v1700000000004!5m2!1sen!2slk",
  },
  {
    id: "avissawella",
    name: "Avissawella",
    address: "35/02/01, Kudagama Road, Avissawella",
    contact: "+94 (36) 212 1083",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8!2d80.2130!3d6.9380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3b4e6e8dcf4a7%3A0x3ae3b4e6e8dcf4a7!2sAvissawella!5e0!3m2!1sen!2slk!4v1700000000005!5m2!1sen!2slk",
  },
  {
    id: "kalutara",
    name: "Kalutara",
    address: "No. 574/1/2, Wettumakada, Kalutara South",
    contact: "+94 (34) 212 1089",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d79.9630!3d6.5700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22497a1ed3a8d%3A0x3ae22497a1ed3a8d!2sKalutara%20South!5e0!3m2!1sen!2slk!4v1700000000006!5m2!1sen!2slk",
  },
  {
    id: "galle",
    name: "Galle",
    address: "No. 31, Colombo Road, Kaluwella, Galle",
    contact: "+94 (91) 212 1215",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3!2d80.2170!3d6.0530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173d75e7f8e37%3A0x3ae173d75e7f8e37!2sKaluwella%2C%20Galle!5e0!3m2!1sen!2slk!4v1700000000007!5m2!1sen!2slk",
  },
  {
    id: "ambalangoda",
    name: "Ambalangoda",
    address:
      "No. 11, Agro Ventures Plantations, Galle Road, Ambalangoda",
    contact: "+94 (91) 221 0269",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.2!2d80.0560!3d6.2360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1b22a54c3c5f9%3A0x3ae1b22a54c3c5f9!2sAmbalangoda!5e0!3m2!1sen!2slk!4v1700000000008!5m2!1sen!2slk",
  },
  {
    id: "matara",
    name: "Matara",
    address: "58, Sri Rathanapala Mawatha, Matara",
    contact: "+94 (41) 223 9407",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0!2d80.5360!3d5.9490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1388d5dd13c67%3A0x3ae1388d5dd13c67!2sMatara!5e0!3m2!1sen!2slk!4v1700000000009!5m2!1sen!2slk",
  },
  {
    id: "ambalantota",
    name: "Ambalantota",
    address:
      "No. 54/1, Wanigarathna Building, Tissa Road, Ambalantota",
    contact: "+94 (47) 222 3944",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.5!2d81.0170!3d6.1060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5a70c7c12c5e3%3A0x3ae5a70c7c12c5e3!2sAmbalantota!5e0!3m2!1sen!2slk!4v1700000000010!5m2!1sen!2slk",
  },
  {
    id: "tissamaharama",
    name: "Tissamaharama",
    address: "Premasiri Edirisinghe, Meda Mawatha, Tissamaharama",
    contact: "+94 (47) 223 7410",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0!2d81.2840!3d6.2840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5b4c7c4a7e4b3%3A0x3ae5b4c7c4a7e4b3!2sTissamaharama!5e0!3m2!1sen!2slk!4v1700000000011!5m2!1sen!2slk",
  },
  {
    id: "angunakolapelessa",
    name: "Angunakolapelessa",
    address: "In Front of Hospital, Hungama Road, Angunakolapelessa",
    contact: "+94 (47) 728 5385",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0!2d81.0010!3d6.0600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5a9c7c3a7e4b3%3A0x3ae5a9c7c3a7e4b3!2sAngunakolapelessa!5e0!3m2!1sen!2slk!4v1700000000012!5m2!1sen!2slk",
  },
  {
    id: "embilipitiya",
    name: "Embilipitiya",
    address:
      "1st Floor, Sampath Bank Building, Main Street, Embilipitiya",
    contact: "+94 (47) 223 0413",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0!2d80.8430!3d6.3360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e7c7c4a7e4b3%3A0x3ae3e7c7c4a7e4b3!2sEmbilipitiya!5e0!3m2!1sen!2slk!4v1700000000013!5m2!1sen!2slk",
  },
  {
    id: "mannar",
    name: "Mannar",
    address: "05, 1st Cross Street, Pettah, Mannar",
    contact: "+94 (23) 205 0101",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0!2d79.9040!3d8.9780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069f6c5a7e4b3a%3A0x3b069f6c5a7e4b3a!2sMannar!5e0!3m2!1sen!2slk!4v1700000000014!5m2!1sen!2slk",
  },
  {
    id: "vavuniya",
    name: "Vavuniya",
    address: "No. 113/1st Floor, Kandy Road, Vavuniya",
    contact: "+94 (24) 205 0097",
    email: "info@agroventuresplantations.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.0!2d80.4980!3d8.7510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069a6c5a7e4b3a%3A0x3b069a6c5a7e4b3a!2sVavuniya!5e0!3m2!1sen!2slk!4v1700000000015!5m2!1sen!2slk",
  },
];

const BranchTabsSection = () => {
  const [active, setActive] = useState(0);
  const branch = branches[active];

  return (
    <section className="branch-section">
      <div className="container">
        {/* ── Heading ── */}
        <div className="row">
          <div className="col-sm-12">
            <div className="branch-heading">
              <div className="branch-eyebrow">
                <span className="branch-eyebrow-dot" />
                <span className="branch-eyebrow-text">Branch Network</span>
              </div>
              <h2 className="branch-title">
                Our
                <span className="branch-title-accent"> Branches</span>
              </h2>
              <div className="branch-divider" />
              <p className="branch-subtitle">
                {branches.length} locations across  - find the branch
                nearest to you.
              </p>
            </div>
          </div>
        </div>

        {/* ── Tab pills ── */}
        <div className="branch-tabs-wrap">
          <div className="branch-tabs-scroll">
            {branches.map((b, i) => (
              <button
                key={b.id}
                className={`branch-tab-btn ${active === i ? "branch-tab-active" : ""}`}
                onClick={() => setActive(i)}
              >
                {b.tag && <span className="branch-tab-tag">{b.tag}</span>}
                {b.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── Active branch content ── */}
        <div className="branch-content">
          <div className="row branch-content-row">
            {/* ── Left: Info ── */}
            <div className="col-md-5 col-sm-12 branch-info-col">
              <div className="branch-info-card">
                {/* Card header */}
                <div className="branch-info-header">
                  <div className="branch-info-icon-wrap">
                    <i className="fas fa-map-marker-alt branch-info-icon" />
                  </div>
                  <div>
                    <h3 className="branch-info-name">{branch.name}</h3>
                    {branch.tag && (
                      <span className="branch-info-tag">{branch.tag}</span>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="branch-info-sep" />

                {/* Address */}
                <div className="branch-info-row">
                  <div className="branch-info-row-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div>
                    <span className="branch-info-row-label">Address</span>
                    <span className="branch-info-row-value">
                      {branch.address}
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="branch-info-row">
                  <div className="branch-info-row-icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div>
                    <span className="branch-info-row-label">Contact</span>
                    <a
                      href={`tel:${branch.contact.replace(/\s/g, "")}`}
                      className="branch-info-row-link"
                    >
                      {branch.contact}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="branch-info-row">
                  <div className="branch-info-row-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div>
                    <span className="branch-info-row-label">Email</span>
                    <a
                      href={`mailto:${branch.email}`}
                      className="branch-info-row-link"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>

                {/* Branch count footer */}
                <div className="branch-info-footer">
                  <span className="branch-info-counter">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(branches.length).padStart(2, "0")}
                  </span>
                  <span className="branch-info-footer-label">Branch</span>

                  {/* Prev / Next */}
                  <div className="branch-nav-btns">
                    <button
                      className="branch-nav-btn"
                      onClick={() =>
                        setActive(
                          (active - 1 + branches.length) % branches.length,
                        )
                      }
                      aria-label="Previous branch"
                    >
                      <i className="fa fa-chevron-left" />
                    </button>
                    <button
                      className="branch-nav-btn"
                      onClick={() => setActive((active + 1) % branches.length)}
                      aria-label="Next branch"
                    >
                      <i className="fa fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Map ── */}
            <div className="col-md-7 col-sm-12 branch-map-col">
              <div className="branch-map-wrap">
                <div className="branch-map-header">
                  <i className="fas fa-map branch-map-header-icon" />
                  <span>Location Map - {branch.name}</span>
                </div>
                <div className="branch-map-frame">
                  <iframe
                    key={branch.id}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={branch.map}
                    loading="lazy"
                    allowFullScreen
                    title={`Map of ${branch.name}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchTabsSection;
