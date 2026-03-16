const PlantationGalleryItem = ({ src, alt, title, dataGroups }) => {
  return (
    <li
      className="portfolio-item gutter-space gallery-item"
      data-groups={JSON.stringify(dataGroups)}
    >
      <div className="portfolio gallery-card">

        {/* ── Image ── */}
        <img
          src={src}
          alt={alt}
          className="gallery-card-img"
          loading="lazy"
        />

        {/* ── Hover overlay ── */}
        <div className="gallery-card-overlay">

          {/* Top: estate title */}
          <div className="gallery-card-title-wrap">
            <span className="gallery-card-title-icon">🌿</span>
            <h4 className="gallery-card-title">{title}</h4>
          </div>

          {/* Bottom: actions */}
          <div className="gallery-card-actions">
            {/* Lightbox zoom */}
            <a
              className="gallery-card-btn gallery-card-btn-zoom alpha-lightbox"
              href={src}
              aria-label={`View ${title}`}
            >
              <i className="fa fa-search-plus" />
            </a>
          </div>

        </div>

        {/* ── Bottom label strip (always visible) ── */}
        <div className="gallery-card-strip">
          <span className="gallery-card-strip-title">{title}</span>
          <span className="gallery-card-strip-dot" />
          <span className="gallery-card-strip-label">Estate</span>
        </div>

      </div>
    </li>
  );
};

export default PlantationGalleryItem;