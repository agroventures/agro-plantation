import React from "react";

const PlantationGalleryItem = ({ src, alt, title, dataGroups }) => {
  return (
    <li
      className="portfolio-item gutter-space"
      data-groups={JSON.stringify(dataGroups)}
    >
      <div className="portfolio">
        <div className="dark-overlay" />
        <img src={src} alt={alt} />
        <div className="portfolio-wrap">
          <div className="portfolio-description">
            <h3 className="portfolio-title">{title}</h3>
          </div>
          {/* /.project-info */}
          <ul className="portfolio-details">
            <li>
              <a className="alpha-lightbox" href={src}>
                <i className="fa fa-search" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default PlantationGalleryItem;
