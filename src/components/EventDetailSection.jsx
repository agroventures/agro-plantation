import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import EventsPostSection from "./EventsPostSection";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const EventDetailSection = () => {
  const location = useLocation();
  const eventData = location.state?.eventData;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const defaultData = {
    title: "Business Card Apps",
    date: "December 26, 2024",
    excerpt:
      "Curabitur quis faucibus odio, nec accumsan erat. Duis id ante convallis magna mattis pulvinar eu ut ipsum. Donec at leo id tortor mattis tempus...",
    images: ["/images/events/post-03.jpg"],
  };

  const currentEvent = eventData || defaultData;
  const hasMultiple = currentEvent.images.length > 1;

  return (
    <>
      <section className="event-detail-section">
        <div className="container">
          <div className="row">
            {/* ── Main Content ── */}
            <div className="col-md-8">
              {/* Image Block */}
              <div className="eds-media-block">
                {hasMultiple ? (
                  <>
                    <Swiper
                      modules={[Navigation, Pagination, Thumbs]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation={{
                        nextEl: ".eds-btn-next",
                        prevEl: ".eds-btn-prev",
                      }}
                      pagination={{ clickable: true, el: ".eds-pagination" }}
                      thumbs={{ swiper: thumbsSwiper }}
                      className="eds-main-swiper"
                    >
                      {currentEvent.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <div className="eds-slide-wrap">
                            <img
                              src={img}
                              alt={`${currentEvent.title} - ${index + 1}`}
                              className="eds-slide-img"
                            />
                            <div className="eds-slide-overlay" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom Nav */}
                    <div className="eds-nav">
                      <button className="eds-nav-btn eds-btn-prev">
                        <i className="fa fa-chevron-left" />
                      </button>
                      <div className="eds-pagination" />
                      <button className="eds-nav-btn eds-btn-next">
                        <i className="fa fa-chevron-right" />
                      </button>
                    </div>

                    {/* Thumbnails */}
                    <Swiper
                      modules={[Thumbs]}
                      onSwiper={setThumbsSwiper}
                      spaceBetween={8}
                      slidesPerView={4}
                      watchSlidesProgress
                      className="eds-thumb-swiper"
                    >
                      {currentEvent.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={img}
                            alt={`thumb-${index}`}
                            className="eds-thumb-img"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                ) : (
                  <div className="eds-single-img-wrap">
                    <img
                      src={currentEvent.images[0]}
                      alt={currentEvent.title}
                      className="eds-single-img"
                    />
                    <div className="eds-slide-overlay" />
                  </div>
                )}
              </div>

              {/* Post Info */}
              <div className="eds-post-info">
                <div className="eds-meta">
                  <span className="eds-date-badge">
                    <i className="fa fa-calendar" />
                    {currentEvent.date}
                  </span>
                </div>

                <h2 className="eds-title">
                  <i className="mdi mdi-leaf eds-leaf-icon" />
                  {currentEvent.title}
                </h2>

                <div
                  className="eds-body"
                  dangerouslySetInnerHTML={{ __html: currentEvent.brief }}
                />
              </div>

              {/* Share Bar */}
              {currentEvent.facebookLink && (
                <div className="eds-share-bar">
                  <div className="eds-share-left">
                    <span className="eds-share-label">Read more</span>
                    <div className="eds-share-icons">
                      <a
                        href={currentEvent.facebookLink}
                        target="_blank"
                        className="eds-share-btn eds-fb"
                      >
                        <i className="fa-brands fa-facebook" />
                      </a>
                      {/* <a href="#" className="eds-share-btn eds-tw">
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                    <a href="#" className="eds-share-btn eds-li">
                      <i className="fa-brands fa-linkedin" />
                    </a> */}
                    </div>
                  </div>
                  {/* <div className="eds-comments-count">
                  <i className="fa fa-comment" />
                  <span>0 Comments</span>
                </div> */}
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="col-md-4">
              <div className="eds-sidebar">
                {/* Search */}
                <div className="eds-sidebar-card">
                  <h5 className="eds-sidebar-title">
                    <i className="fa fa-search" /> Search
                  </h5>
                  <form className="eds-search-form" method="get">
                    <input
                      type="text"
                      name="name"
                      className="eds-search-input"
                      placeholder="Search events..."
                    />
                    <button type="submit" className="eds-search-btn">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>

                {/* Location Card */}
                <div className="eds-sidebar-card eds-location-card">
                  <h5 className="eds-sidebar-title">
                    <i className="fa fa-map-marker-alt" /> Postal Location
                  </h5>
                  <div className="eds-address">
                    <p>
                      <i className="fa fa-location-dot eds-addr-icon" />
                      No.253 Kaduwela Road, Thalangama Koswatta, Battaramulla
                    </p>
                    <p>
                      <i className="fa fa-phone eds-addr-icon" />
                      (+94) 11 287-8766
                    </p>
                    <p>
                      <i className="fa fa-envelope eds-addr-icon" />
                      <a href="mailto:info@agroventuresplantations.com">
                        info@agroventuresplantations.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="eds-sidebar-card eds-map-card">
                  <h5 className="eds-sidebar-title">
                    <i className="fa fa-map" /> Find Us
                  </h5>
                  <div className="eds-map-wrap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8564765048022!2d79.9301219!3d6.907759899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2577cb2db7e13%3A0xbf954ea383a6550e!2sAgro%20Ventures%20Plantations%20Operational%20Head%20Office!5e0!3m2!1sen!2slk!4v1767606962001!5m2!1sen!2slk"
                      width="100%"
                      height="220"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailSection;
