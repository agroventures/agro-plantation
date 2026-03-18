const FooterGalleriesBox = () => {
  const galleryItems = [
    { src: "/images/gallery/01.png", alt: "gallery-1" },
    { src: "/images/gallery/02.png", alt: "gallery-2" },
    { src: "/images/gallery/03.png", alt: "gallery-3" },
    { src: "/images/gallery/04.png", alt: "gallery-4" },
    { src: "/images/gallery/05.png", alt: "gallery-5" },
    { src: "/images/gallery/06.png", alt: "gallery-6" },
    { src: "/images/gallery/07.png", alt: "gallery-7" },
    { src: "/images/gallery/af3.webp", alt: "gallery-8" },
  ];

  return (
    <div className="widget widget-text">
      <h5 className="widget-title">Gallery</h5>
      <ul className="footer-gallery" id="footer-gallery">
        {galleryItems.map((item, index) => (
          <li key={index}>
            <div className="footer-gallery-box">
              <div className="skin-overlay" />
              <img src={item.src} alt={item.alt} />
              <div className="zoom-wrap text-center">
                <ul className="footer-gallery-zoom">
                  <li>
                    <a className="alpha-lightbox" href={item.src}>
                      <i className="fa fa-search" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterGalleriesBox;