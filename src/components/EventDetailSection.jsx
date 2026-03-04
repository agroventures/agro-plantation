import React from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import EventsPostSection from "./EventsPostSection";

import "swiper/css";

import "swiper/css/navigation";
import EventsGalleriesSection from "./EventsGalleriesSection";

const EventDetailSection = () => {
  const location = useLocation();
  const eventData = location.state?.eventData;

  // Default data if no event data is passed
  const defaultData = {
    title: "Business Card Apps",
    date: "December 26, 2024",
    excerpt:
      "Curabitur quis faucibus odio, nec accumsan erat. Duis id ante convallis magna mattis pulvinar eu ut ipsum. Donec at leo id tortor mattis tempus...",
    images: ["/images/events/post-03.jpg"],
  };

  const currentEvent = eventData || defaultData;
  return (
    <>
      {/* Blogs Start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="post">
                <div>
                  {currentEvent.images.length > 1 ? (
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation={true}
                      className="event-detail-slider"
                    >
                      {currentEvent.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <img
                            className="img-responsive w-100"
                            src={img}
                            alt={`${currentEvent.title} - ${index + 1}`}
                            style={{ height: "500px", objectFit: "cover" }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <img
                      className="img-responsive"
                      src={currentEvent.images[0]}
                      alt={currentEvent.title}
                    />
                  )}
                </div>
                <div className="post-info">
                  <h3 className="dark-green-color">
                    <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
                    {currentEvent.title}
                  </h3>
                  <h6>{currentEvent.date}</h6>
                  <div
                    dangerouslySetInnerHTML={{ __html: currentEvent.brief }}
                  />
                </div>
              </div>
              <div className="blog-standard">
                <div className="post-tags">
                  <a href="#">Design</a>
                  <a href="#">Branding</a>
                  <a href="#">Stationery</a>
                  <a href="#">Development</a>
                  <a href="#">Concept</a>
                </div>
              </div>

              <div className="post-controls">
                <div className="post-share">
                  <ul>
                    <li>Share:</li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="comments-info">
                  <a href="#">
                    <i className="fa fa-comment" /> 0
                  </a>
                </div>
              </div>

              {/* Post comment sections*/}
              <EventsPostSection />
            </div>
            {/* Left Side End*/}
            <div className="col-md-4 col-md-offset-1 right-col-rv">
              <div className="widget sidebar_widget">
                <form className="search-form" method="get">
                  <input
                    type="text"
                    name="name"
                    className="form-control search-field"
                    id="search"
                    placeholder="Type what it's your mind..."
                  />
                  <button
                    type="submit"
                    className="fa fa-search search-submit"
                  />
                </form>
              </div>

              {/*Location */}
              <h3>Postal Location</h3>
              <address>
                No.253 Kaduwela Road Thalangama Koswatta Battaramulla
                <br />
                <abbr title="Phone">PN:</abbr> (+94) 11 287-8766
                <br />
                <a href="mailto:#">info@agroventuresplantations.com</a>
              </address>

              {/* Google Map */}
              <div className="mt-30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8564765048022!2d79.9301219!3d6.907759899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2577cb2db7e13%3A0xbf954ea383a6550e!2sAgro%20Ventures%20Plantations%20Operational%20Head%20Office!5e0!3m2!1sen!2slk!4v1767606962001!5m2!1sen!2slk"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default EventDetailSection;
