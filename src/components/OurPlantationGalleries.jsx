import { useState } from "react";
import PlantationGalleryItem from "./PlantationGalleryItem";

const galleryImages = [
  { src: "/images/plantation/p1.webp",  alt: "Udasgiriya Estate",       title: "Udasgiriya Estate",       contacts: [{ name: "Kumarasinghe",    phone: "076 855 4859" }],                                                  groups: ["all", "udasgiriya"] },
  { src: "/images/plantation/p2.webp",  alt: "Kawatayamuna Estate",      title: "Kawatayamuna Estate",      contacts: [{ name: "Thisara Rovindra", phone: "076 306 6624" }, { name: "Anupama",     phone: "071 094 8653" }], groups: ["all", "kawatayamuna"] },
  { src: "/images/plantation/p3.webp",  alt: "Dombawela Estate",         title: "Dombawela Estate",         contacts: [{ name: "Pasindu",          phone: "077 136 7831" }],                                                  groups: ["all", "dombawela"] },
  { src: "/images/plantation/p4.webp",  alt: "Pathingaskotuwa Estate",   title: "Pathingaskotuwa Estate",   contacts: [{ name: "Thilakasiri",      phone: "076 389 1783" }],                                                  groups: ["all", "pathingaskotuwa"] },
  { src: "/images/plantation/p5.webp",  alt: "Selagama Estate",          title: "Selagama Estate",          contacts: [{ name: "Sanjeewa",         phone: "070 424 4224" }],                                                  groups: ["all", "selagama"] },
  { src: "/images/plantation/p6.webp",  alt: "Rusigama Estate",          title: "Rusigama Estate",          contacts: [{ name: "Chaminda",         phone: "074 117 4383" }, { name: "Avishka",     phone: "077 451 4074" }], groups: ["all", "rusigama"] },
  { src: "/images/plantation/p7.webp",  alt: "Medalanda Estate",         title: "Medalanda Estate",         contacts: [{ name: "Chathura",         phone: "076 153 8453" }],                                                  groups: ["all", "medalanda"] },
  { src: "/images/plantation/p8.webp",  alt: "Kanupelella Estate",       title: "Kanupelella Estate",       contacts: [{ name: "Tharindu",         phone: "076 033 3028" }, { name: "Shehan",      phone: "075 793 1284" }], groups: ["all", "kanupelella"] },
  { src: "/images/plantation/p9.webp",  alt: "Nawaland Estate",          title: "Nawaland Estate",          contacts: [{ name: "Shahuka",          phone: "076 847 5668" }, { name: "Layanal",     phone: "076 636 4565" }], groups: ["all", "nawaland"] },
  { src: "/images/plantation/p10.webp", alt: "Udugama Estate",           title: "Udugama Estate",           contacts: [{ name: "Laksha",           phone: "078 827 0735" }, { name: "Chamara",     phone: "075 944 4725" }], groups: ["all", "udugama"] },
  { src: "/images/plantation/p11.webp", alt: "Kosgolla Estate",          title: "Kosgolla Estate",          contacts: [{ name: "Aroshanan",        phone: "071 766 0847" }, { name: "Sunil",       phone: "077 979 8834" }], groups: ["all", "kosgolla"] },
  { src: "/images/plantation/p12.webp", alt: "Grasmere Estate",          title: "Grasmere Estate",          contacts: [{ name: "Nalin",            phone: "071 915 8622" }, { name: "Matheesha",   phone: "074 207 0625" }], groups: ["all", "grasmere"] },
  { src: "/images/plantation/p13.webp", alt: "Welangahawatta Estate",    title: "Welangahawatta Estate",    contacts: [{ name: "Kelum",            phone: "075 368 8800" }],                                                  groups: ["all", "welangahawatta"] },
  { src: "/images/plantation/p14.webp", alt: "Kothmale Estate",          title: "Kothmale Estate",          contacts: [{ name: "Wikramarachchi",   phone: "077 843 0012" }],                                                  groups: ["all", "kothmale"] },
  { src: "/images/plantation/p15.webp", alt: "Udasgiriya Estate",        title: "Udasgiriya Estate",        contacts: [{ name: "Kumarasinghe",     phone: "076 855 4859" }],                                                  groups: ["all", "udasgiriya"] },
  { src: "/images/plantation/p16.webp", alt: "Kawatayamuna Estate",      title: "Kawatayamuna Estate",      contacts: [{ name: "Thisara Rovindra", phone: "076 306 6624" }, { name: "Anupama",     phone: "071 094 8653" }], groups: ["all", "kawatayamuna"] },
  { src: "/images/plantation/p17.webp", alt: "Dombawela Estate",         title: "Dombawela Estate",         contacts: [{ name: "Pasindu",          phone: "077 136 7831" }],                                                  groups: ["all", "dombawela"] },
  { src: "/images/plantation/p18.webp", alt: "Pathingaskotuwa Estate",   title: "Pathingaskotuwa Estate",   contacts: [{ name: "Thilakasiri",      phone: "076 389 1783" }],                                                  groups: ["all", "pathingaskotuwa"] },
  { src: "/images/plantation/p19.webp", alt: "Selagama Estate",          title: "Selagama Estate",          contacts: [{ name: "Sanjeewa",         phone: "070 424 4224" }],                                                  groups: ["all", "selagama"] },
  { src: "/images/plantation/p20.webp", alt: "Rusigama Estate",          title: "Rusigama Estate",          contacts: [{ name: "Chaminda",         phone: "074 117 4383" }, { name: "Avishka",     phone: "077 451 4074" }], groups: ["all", "rusigama"] },
  { src: "/images/plantation/p21.webp", alt: "Medalanda Estate",         title: "Medalanda Estate",         contacts: [{ name: "Chathura",         phone: "076 153 8453" }],                                                  groups: ["all", "medalanda"] },
];

const filterTabs = [
  { group: "all",             label: "All Estates" },
  { group: "udasgiriya",      label: "Udasgiriya" },
  { group: "kawatayamuna",    label: "Kawatayamuna" },
  { group: "dombawela",       label: "Dombawela" },
  { group: "pathingaskotuwa", label: "Pathingaskotuwa" },
  { group: "selagama",        label: "Selagama" },
  { group: "rusigama",        label: "Rusigama" },
  { group: "medalanda",       label: "Medalanda" },
  { group: "kanupelella",     label: "Kanupelella" },
  { group: "nawaland",        label: "Nawaland" },
  { group: "udugama",         label: "Udugama" },
  { group: "kosgolla",        label: "Kosgolla" },
  { group: "grasmere",        label: "Grasmere" },
  { group: "welangahawatta",  label: "Welangahawatta" },
  { group: "kothmale",        label: "Kothmale" },
];

const getContactsForGroup = (group) => {
  if (group === "all") return [];
  const seen = new Set();
  const contacts = [];
  galleryImages
    .filter((img) => img.groups.includes(group))
    .forEach((img) => {
      img.contacts.forEach((c) => {
        if (!seen.has(c.phone)) {
          seen.add(c.phone);
          contacts.push(c);
        }
      });
    });
  return contacts;
};

const OurPlantationGalleries = () => {
  const [activeGroup, setActiveGroup] = useState("all");

  const activeContacts = getContactsForGroup(activeGroup);
  const activeLabel = filterTabs.find((t) => t.group === activeGroup)?.label || "";
  const filteredImages =
    activeGroup === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.groups.includes(activeGroup));

  return (
    <section className="gallery-section">

      <div className="container">

        {/* ── Heading ── */}
        <div className="gallery-heading">
          <div className="gallery-eyebrow">
            <span className="gallery-eyebrow-dot" />
            <span className="gallery-eyebrow-text">Agroventures Plantations</span>
          </div>
          <h2 className="gallery-title">
            Our Plantation
            <span className="gallery-title-accent"> Galleries</span>
          </h2>
          <div className="gallery-divider" />
          <p className="gallery-subtitle">
            Explore our estates across Sri Lanka — {galleryImages.length} images across {filterTabs.length - 1} estates.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div className="gallery-filter-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab.group}
              className={`gallery-filter-btn ${activeGroup === tab.group ? "gallery-filter-active" : ""}`}
              onClick={() => setActiveGroup(tab.group)}
            >
              {tab.group === "all" && (
                <i className="fas fa-th gallery-filter-icon" />
              )}
              {tab.label}
              {activeGroup === tab.group && tab.group !== "all" && (
                <span className="gallery-filter-count">
                  {filteredImages.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Contact banner ── */}
        {activeGroup !== "all" && activeContacts.length > 0 && (
          <div className="gallery-contact-banner">

            {/* Estate name */}
            <div className="gallery-contact-estate">
              <div className="gallery-contact-estate-icon">
                <i className="mdi mdi-leaf" />
              </div>
              <span className="gallery-contact-estate-name">{activeLabel}</span>
              <span className="gallery-contact-estate-tag">Estate</span>
            </div>

            <div className="gallery-contact-sep" />

            {/* Contact cards */}
            <div className="gallery-contact-cards">
              {activeContacts.map((contact, i) => (
                <div className="gallery-contact-card" key={i}>
                  <div className="gallery-contact-avatar">
                    {contact.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="gallery-contact-info">
                    <span className="gallery-contact-name">{contact.name}</span>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="gallery-contact-phone"
                    >
                      <i className="fas fa-phone gallery-contact-phone-icon" />
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ── Gallery grid ── */}
        <div className="gallery-grid-wrap">
          <ul id="portfolio-grid" className="gallery-grid three-column hover-two">
            {filteredImages.map((image, index) => (
              <PlantationGalleryItem
                key={`${image.src}-${index}`}
                src={image.src}
                alt={image.alt}
                title={image.title}
                dataGroups={image.groups}
              />
            ))}
          </ul>
        </div>

        {/* ── Empty state ── */}
        {filteredImages.length === 0 && (
          <div className="gallery-empty">
            <i className="fas fa-image gallery-empty-icon" />
            <p>No images found for this estate.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default OurPlantationGalleries;