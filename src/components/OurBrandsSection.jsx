import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const brands = [
  { id: 1, name: "Brand 1", logo: "/images/clients/1.png" },
  { id: 2, name: "Brand 2", logo: "/images/clients/2.png" },
  { id: 3, name: "Brand 3", logo: "/images/clients/3.png" },
  { id: 4, name: "Brand 4", logo: "/images/clients/4.png" },
  { id: 5, name: "Brand 5", logo: "/images/clients/5.png" },
  { id: 6, name: "Brand 6", logo: "/images/clients/6.png" },
  { id: 7, name: "Brand 7", logo: "/images/clients/7.png" },
  { id: 8, name: "Brand 8", logo: "/images/clients/8.png" },
  { id: 9, name: "Brand 9", logo: "/images/clients/9.png" },
  { id: 10, name: "Brand 10", logo: "/images/clients/10.png" },
  { id: 11, name: "Brand 11", logo: "/images/clients/11.png" },
  { id: 12, name: "Brand 12", logo: "/images/clients/12.png" },
  { id: 13, name: "Brand 13", logo: "/images/clients/13.png" },
  { id: 14, name: "Brand 14", logo: "/images/clients/14.png" },
];

const OurBrandsSection = () => {
  return (
    <section className="brands-section">
      {/* ── Top border accent ── */}
      <div className="brands-top-bar" />

      <div className="container">
        {/* ── Heading ── */}
        <div className="row">
          <div className="col-sm-12">
            <div className="virtues-heading">
              <span className="virtues-eyebrow">
                <span className="virtues-eyebrow-line" />
                Sri Lanka's agricultural future
                <span className="virtues-eyebrow-line" />
              </span>
              <h2 className="virtues-main-title">
                OUR
                <span className="virtues-title-accent"> BRANDING </span>
                PARTNERS
              </h2>

              <div className="virtues-title-divider" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Slider — full width, outside container ── */}
      <div className="brands-slider-outer">
        {/* Left fade edge */}
        <div className="brands-fade-left" />
        {/* Right fade edge */}
        <div className="brands-fade-right" />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          cssMode={false}
          className="brands-swiper"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id} className="brands-slide">
              <div className="brands-card">
                <div className="brands-card-inner">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brands-logo"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Bottom border accent ── */}
      <div className="brands-bottom-bar" />
    </section>
  );
};

export default OurBrandsSection;
