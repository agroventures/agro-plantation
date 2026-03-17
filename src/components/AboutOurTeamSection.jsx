const AboutOurTeamSection = () => {
    const gmMembers = [
    {
      img: "/images/team/placeholder-image.jpg",
      name: "Kushan Jayasinghe",
      role: "Senior Deputy General Manager - Southern Business Unit",
      initials: "KJ",
    },
    {
      img: "/images/team/placeholder-image.jpg",
      name: "Dilum Sirimanna",
      role: "Deputy General Manager - Western Zone",
      initials: "DS",
    },
    {
      img: "/images/team/placeholder-image.jpg",
      name: "Prabhath Gamage",
      role: "General Manager – Agro Ventures Property Development",
      initials: "PG",
    },
    {
      img: "/images/team/placeholder-image.jpg",
      name: "Nirmala Premarathna",
      role: "General Manager – Marketing",
      initials: "NP",
    },
  ];
 
  const teamMembers = [
    {
      img: "/images/team/placeholder-image.jpg",
      name: "Gayan Jayarathne",
      role: "Head of HR",
      initials: "GJ",
    },
    {
      img: "/images/team/placeholder-image.jpg",
      name: "Sriyani Senadeera",
      role: "Head of Finance",
      initials: "SS",
    },
    // {
    //   img: "/images/team/placeholder-image.jpg",
    //   name: "Kamala Silva",
    //   role: "Quality Assurance",
    //   initials: "KS",
    // },
    // {
    //   img: "/images/team/placeholder-image.jpg",
    //   name: "Roshan Jayawardena",
    //   role: "Export Coordinator",
    //   initials: "RJ",
    // },
  ];
 
  const socialLinks = [
    { icon: "fa-brands fa-facebook", href: "#" },
    { icon: "fa-brands fa-linkedin", href: "#" },
    { icon: "fa-brands fa-x-twitter", href: "#" },
  ];
  return (
    <>
      {/* ═══════════════════════════════════════
          SECTION 1 - General Managers
      ═══════════════════════════════════════ */}
      <section className="gm-section">
        <div className="container">
          {/* Heading */}
          <div className="row team-heading-wrap">
            <div className="col-md-7 col-sm-12">
              <span className="team-eyebrow">Leadership</span>
              <h2 className="team-main-title">
                General <span>Managers</span>
              </h2>
              <div className="team-title-divider" />
              <p className="team-subtitle">
                Guiding Agroventures Plantations with vision and experience -
                our General Managers lead each division with dedication and a
                passion for sustainable growth.
              </p>
            </div>
          </div>

          {/* GM Cards */}
          <div className="row">
            {gmMembers.map((gm, i) => (
              <div key={i} className="col-md-3 col-sm-6 gm-card-wrap">
                <div className="gm-card">
                  <div className="gm-card-img-wrap">
                    <img src={gm.img} alt={gm.name} />
                    <div className="gm-card-overlay">
                      <span className="gm-overlay-role">{gm.role}</span>
                      <ul className="gm-card-socials">
                        {socialLinks.map((s, j) => (
                          <li key={j}>
                            <a href={s.href} aria-label="social">
                              <i className={s.icon} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="gm-card-number">0{i + 1}</div>
                  </div>
                  <div className="gm-card-info">
                    <p className="gm-card-name">{gm.name}</p>
                    <p className="gm-card-role">{gm.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 - Our Team
      ═══════════════════════════════════════ */}
      <section className="staff-section">
        <div className="container">
          {/* Heading */}
          <div className="row team-heading-wrap">
            <div className="col-md-7 col-sm-12">
              <span className="team-eyebrow light">Our People</span>
              <h2 className="team-main-title light">
                Meet The <span>Team</span>
              </h2>
              <div className="team-title-divider light" />
              <p className="team-subtitle light">
                Behind every harvest is a team of committed, passionate
                individuals who bring skill and heart to everything they do.
                These are the people who make Agroventures thrive.
              </p>
            </div>
          </div>

          {/* Staff Cards */}
          <div className="row">
            {teamMembers.map((member, i) => (
              <div key={i} className="col-md-3 col-sm-6 staff-card-wrap">
                <div className="staff-card">
                  <div className="staff-card-img-wrap">
                    <img src={member.img} alt={member.name} />
                    <div className="staff-card-overlay">
                      <ul className="staff-card-socials">
                        {socialLinks.map((s, j) => (
                          <li key={j}>
                            <a href={s.href} aria-label="social">
                              <i className={s.icon} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="staff-count-badge">Team</span>
                  </div>
                  <div className="staff-card-info">
                    <p className="staff-card-name">{member.name}</p>
                    <p className="staff-card-role">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOurTeamSection;
