import React from "react";
import PlantationGalleryItem from "./PlantationGalleryItem"; // Adjust path if needed

const OurPlantationGalleries = () => {
  const galleryImages = [
    {
      src: "/images/plantation/p1.webp",
      alt: "Palapathwala Estate",
      title: "Palapathwala",
      groups: ["all", "palapathwala"],
    },
    {
      src: "/images/plantation/p2.webp",
      alt: "Matale Estate",
      title: "Matale Estate",
      groups: ["all", "matale"],
    },
    {
      src: "/images/plantation/p3.webp",
      alt: "Laggala Estate",
      title: "Laggala Estate",
      groups: ["all", "laggala"],
    },
    {
      src: "/images/plantation/p4.webp",
      alt: "Salagama Plantation",
      title: "Salagama",
      groups: ["all", "salagama"],
    },
    {
      src: "/images/plantation/p5.webp",
      alt: "Gampola Estate",
      title: "Gampola Estate",
      groups: ["all", "gampola"],
    },
 {
      src: "/images/plantation/p6.webp",
      alt: "Gampola Estate",
      title: "Gampola Estate",
      groups: ["all", "gampola"],
    },
    {
      src: "/images/plantation/p7.webp",
      alt: "Puttalam Estate",
      title: "Puttalam Estate",
      groups: ["all", "puttalam"],
    },
    {
      src: "/images/plantation/p8.webp",
      alt: "Dolosbage Plantation",
      title: "Dolosbage",
      groups: ["all", "dolosbage"],
    },
    {
      src: "/images/plantation/p9.webp",
      alt: "Palapathwala - Vanilla Field",
      title: "Palapathwala Vanilla",
      groups: ["all", "palapathwala"],
    },
    {
      src: "/images/plantation/p10.webp",
      alt: "Matale Estate - Cultivation",
      title: "Matale Cultivation",
      groups: ["all", "matale"],
    },
    {
      src: "/images/plantation/p11.webp",
      alt: "Laggala Estate - Farm",
      title: "Laggala Farm",
      groups: ["all", "laggala"],
    },
    {
      src: "/images/plantation/p12.webp",
      alt: "Salagama - Crop Production",
      title: "Salagama Production",
      groups: ["all", "salagama"],
    },
    {
      src: "/images/plantation/p13.webp",
      alt: "Gampola Estate - Landscape",
      title: "Gampola Landscape",
      groups: ["all", "gampola"],
    },
    {
      src: "/images/plantation/p14.webp",
      alt: "Gawatamuna - Field View",
      title: "Gawatamuna Field",
      groups: ["all", "gawatamuna"],
    },
    {
      src: "/images/plantation/p15.webp",
      alt: "Puttalam Estate - Aerial",
      title: "Puttalam Aerial",
      groups: ["all", "puttalam"],
    },
    {
      src: "/images/plantation/p16.webp",
      alt: "Dolosbage - Plantation View",
      title: "Dolosbage View",
      groups: ["all", "dolosbage"],
    },
    {
      src: "/images/plantation/p17.webp",
      alt: "Palapathwala - Harvest Time",
      title: "Palapathwala Harvest",
      groups: ["all", "palapathwala"],
    },
    {
      src: "/images/plantation/p18.webp",
      alt: "Matale Estate - Infrastructure",
      title: "Matale Infrastructure",
      groups: ["all", "matale"],
    },
    {
      src: "/images/plantation/p19.webp",
      alt: "Laggala Estate - Storage",
      title: "Laggala Storage",
      groups: ["all", "laggala"],
    },
    {
      src: "/images/plantation/p20.webp",
      alt: "Salagama - Quality Control",
      title: "Salagama Quality",
      groups: ["all", "salagama"],
    },
    {
      src: "/images/plantation/p21.webp",
      alt: "Gampola Estate - Processing",
      title: "Gampola Processing",
      groups: ["all", "gampola"],
    },
  ];

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
            <li className="active" data-group="all">
              All
            </li>
            <li data-group="palapathwala">Palapathwala</li>
            <li data-group="matale">Matale Estate</li>
            <li data-group="laggala">Laggala Estate</li>
            <li data-group="salagama">Salagama</li>
            <li data-group="gampola">Gampola Estate</li>
            <li data-group="gawatamuna">Gawatamuna</li>
            <li data-group="puttalam">Puttalam Estate</li>
            <li data-group="dolosbage">Dolosbage</li>
          </ul>

          {/* Reusable Grid */}
          <ul id="portfolio-grid" className="three-column hover-two">
            {galleryImages.map((image, index) => (
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
