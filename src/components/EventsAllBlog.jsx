import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import { eventsData } from "../datas/events";

const EventsAllBlogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (event) => {
    navigate("/event-detail", { state: { eventData: event } });
  };
  return (
    <section className="pt-100 pb-10">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div>
                {" "}
                {/* renamed class */}
                {/* Fixed Height Image Container */}
                <div className="post-img position-relative overflow-hidden">
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="post-info p-4">
                  <h3 className="mb-2">{event.title}</h3>
                  <h6 className="text-muted mb-3">{event.date}</h6>
                  <p className="mb-3">{event.excerpt}</p>
                  <a
                    className="readmore dark-color"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleReadMore(event);
                    }}
                  >
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsAllBlogs;
