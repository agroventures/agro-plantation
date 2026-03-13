import React, { useState } from "react";
import PlantationGalleryItem from "./PlantationGalleryItem";

const galleryImages = [
  {
    src: "/images/plantation/p1.webp",
    alt: "Udasgiriya Estate",
    title: "Udasgiriya Estate",
    contacts: [{ name: "Kumarasinghe", phone: "076 855 4859" }],
    groups: ["all", "udasgiriya"],
  },
  {
    src: "/images/plantation/p2.webp",
    alt: "Kawatayamuna Estate",
    title: "Kawatayamuna Estate",
    contacts: [
      { name: "Thisara Rovindra", phone: "076 306 6624" },
      { name: "Anupama", phone: "071 094 8653" },
    ],
    groups: ["all", "kawatayamuna"],
  },
  {
    src: "/images/plantation/p3.webp",
    alt: "Dombawela Estate",
    title: "Dombawela Estate",
    contacts: [{ name: "Pasindu", phone: "077 136 7831" }],
    groups: ["all", "dombawela"],
  },
  {
    src: "/images/plantation/p4.webp",
    alt: "Pathingaskotuwa Estate",
    title: "Pathingaskotuwa Estate",
    contacts: [{ name: "Thilakasiri", phone: "076 389 1783" }],
    groups: ["all", "pathingaskotuwa"],
  },
  {
    src: "/images/plantation/p5.webp",
    alt: "Selagama Estate",
    title: "Selagama Estate",
    contacts: [{ name: "Sanjeewa", phone: "070 424 4224" }],
    groups: ["all", "selagama"],
  },
  {
    src: "/images/plantation/p6.webp",
    alt: "Rusigama Estate",
    title: "Rusigama Estate",
    contacts: [
      { name: "Chaminda", phone: "074 117 4383" },
      { name: "Avishka", phone: "077 451 4074" },
    ],
    groups: ["all", "rusigama"],
  },
  {
    src: "/images/plantation/p7.webp",
    alt: "Medalanda Estate",
    title: "Medalanda Estate",
    contacts: [{ name: "Chathura", phone: "076 153 8453" }],
    groups: ["all", "medalanda"],
  },
  {
    src: "/images/plantation/p8.webp",
    alt: "Kanupelella Estate",
    title: "Kanupelella Estate",
    contacts: [
      { name: "Tharindu", phone: "076 033 3028" },
      { name: "Shehan", phone: "075 793 1284" },
    ],
    groups: ["all", "kanupelella"],
  },
  {
    src: "/images/plantation/p9.webp",
    alt: "Nawaland Estate",
    title: "Nawaland Estate",
    contacts: [
      { name: "Shahuka", phone: "076 847 5668" },
      { name: "Layanal", phone: "076 636 4565" },
    ],
    groups: ["all", "nawaland"],
  },
  {
    src: "/images/plantation/p10.webp",
    alt: "Udugama Estate",
    title: "Udugama Estate",
    contacts: [
      { name: "Laksha", phone: "078 827 0735" },
      { name: "Chamara", phone: "075 944 4725" },
    ],
    groups: ["all", "udugama"],
  },
  {
    src: "/images/plantation/p11.webp",
    alt: "Kosgolla Estate",
    title: "Kosgolla Estate",
    contacts: [
      { name: "Aroshanan", phone: "071 766 0847" },
      { name: "Sunil", phone: "077 979 8834" },
    ],
    groups: ["all", "kosgolla"],
  },
  {
    src: "/images/plantation/p12.webp",
    alt: "Grasmere Estate",
    title: "Grasmere Estate",
    contacts: [
      { name: "Nalin", phone: "071 915 8622" },
      { name: "Matheesha", phone: "074 207 0625" },
    ],
    groups: ["all", "grasmere"],
  },
  {
    src: "/images/plantation/p13.webp",
    alt: "Welangahawatta Estate",
    title: "Welangahawatta Estate",
    contacts: [{ name: "Kelum", phone: "075 368 8800" }],
    groups: ["all", "welangahawatta"],
  },
  {
    src: "/images/plantation/p14.webp",
    alt: "Kothmale Estate",
    title: "Kothmale Estate",
    contacts: [{ name: "Wikramarachchi", phone: "077 843 0012" }],
    groups: ["all", "kothmale"],
  },
  {
    src: "/images/plantation/p15.webp",
    alt: "Udasgiriya Estate",
    title: "Udasgiriya Estate",
    contacts: [{ name: "Kumarasinghe", phone: "076 855 4859" }],
    groups: ["all", "udasgiriya"],
  },
  {
    src: "/images/plantation/p16.webp",
    alt: "Kawatayamuna Estate",
    title: "Kawatayamuna Estate",
    contacts: [
      { name: "Thisara Rovindra", phone: "076 306 6624" },
      { name: "Anupama", phone: "071 094 8653" },
    ],
    groups: ["all", "kawatayamuna"],
  },
  {
    src: "/images/plantation/p17.webp",
    alt: "Dombawela Estate",
    title: "Dombawela Estate",
    contacts: [{ name: "Pasindu", phone: "077 136 7831" }],
    groups: ["all", "dombawela"],
  },
  {
    src: "/images/plantation/p18.webp",
    alt: "Pathingaskotuwa Estate",
    title: "Pathingaskotuwa Estate",
    contacts: [{ name: "Thilakasiri", phone: "076 389 1783" }],
    groups: ["all", "pathingaskotuwa"],
  },
  {
    src: "/images/plantation/p19.webp",
    alt: "Selagama Estate",
    title: "Selagama Estate",
    contacts: [{ name: "Sanjeewa", phone: "070 424 4224" }],
    groups: ["all", "selagama"],
  },
  {
    src: "/images/plantation/p20.webp",
    alt: "Rusigama Estate",
    title: "Rusigama Estate",
    contacts: [
      { name: "Chaminda", phone: "074 117 4383" },
      { name: "Avishka", phone: "077 451 4074" },
    ],
    groups: ["all", "rusigama"],
  },
  {
    src: "/images/plantation/p21.webp",
    alt: "Medalanda Estate",
    title: "Medalanda Estate",
    contacts: [{ name: "Chathura", phone: "076 153 8453" }],
    groups: ["all", "medalanda"],
  },
];

const filterTabs = [
  { group: "all", label: "All" },
  { group: "udasgiriya", label: "Udasgiriya" },
  { group: "kawatayamuna", label: "Kawatayamuna Estate" },
  { group: "dombawela", label: "Dombawela Estate" },
  { group: "pathingaskotuwa", label: "Pathingaskotuwa" },
  { group: "selagama", label: "Selagama Estate" },
  { group: "rusigama", label: "Rusigama" },
  { group: "medalanda", label: "Medalanda Estate" },
  { group: "kanupelella", label: "Kanupelella" },
  { group: "nawaland", label: "Nawaland" },
  { group: "udugama", label: "Udugama" },
  { group: "kosgolla", label: "Kosgolla" },
  { group: "grasmere", label: "Grasmere Estate" },
  { group: "welangahawatta", label: "Welangahawatta" },
  { group: "kothmale", label: "Kothmale" },
];

// Collect unique contacts per group (deduplicated by phone)
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
    <section className="pt-50 pb-50 white-bg">
      <div className="container">
        <div className="text-center mb-50">
          <h4 className="text-uppercase">Agro Ventures</h4>
          <h1 className="dark-green-color">
            <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
            Our plantations galleries
          </h1>
        </div>

        <div className="portfolio-container text-center">
          {/* Filter Buttons */}
          <ul
            id="portfolio-filter"
            className="list-inline mb-40 filter-transparent"
          >
            {filterTabs.map((tab) => (
              <li
                key={tab.group}
                data-group={tab.group}
                className={activeGroup === tab.group ? "active" : ""}
                onClick={() => setActiveGroup(tab.group)}
                style={{ cursor: "pointer" }}
              >
                {tab.label}
              </li>
            ))}
          </ul>

          {/* Contact Info Banner — shown only when a specific estate is selected */}
          {activeGroup !== "all" && activeContacts.length > 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px 30px",
                background: "#f0f7f1",
                border: "1px solid #c3dfc8",
                borderRadius: "10px",
                padding: "14px 22px",
                marginBottom: "30px",
                textAlign: "left",
              }}
            >
              {/* Estate name */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <i
                  className="mdi mdi-leaf"
                  style={{ color: "#2e7d32", fontSize: 18 }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    color: "#1b5e20",
                    fontSize: 15,
                    whiteSpace: "nowrap",
                  }}
                >
                  {activeLabel}
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: 1,
                  height: 30,
                  background: "#b2d8b6",
                  flexShrink: 0,
                }}
              />

              {/* Contact cards */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
                {activeContacts.map((contact, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    {/* Avatar circle */}
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#2e7d32",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {contact.name.charAt(0).toUpperCase()}
                    </div>
                    <div style={{ lineHeight: 1.3 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#2e3a2f" }}>
                        {contact.name}
                      </div>
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                        style={{
                          fontSize: 13,
                          color: "#2e7d32",
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        <i
                          className="mdi mdi-phone"
                          style={{ marginRight: 3, fontSize: 12 }}
                        />
                        {contact.phone}
                      </a>
                    </div>

                    {/* Separator between contacts */}
                    {i < activeContacts.length - 1 && (
                      <div
                        style={{
                          width: 1,
                          height: 28,
                          background: "#c8e6c9",
                          marginLeft: 14,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          <ul id="portfolio-grid" className="three-column hover-two">
            {filteredImages.map((image, index) => (
              <PlantationGalleryItem
                key={index}
                src={image.src}
                alt={image.alt}
                title={image.title}
                dataGroups={image.groups}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurPlantationGalleries;