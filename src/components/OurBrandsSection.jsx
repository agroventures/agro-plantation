import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const OurBrandsSection = () => {
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
  ];

  return (
    <section className="pt-0 pb-0">
      <div className="container">
        {/* Optional heading (uncomment if you want it back) */}
        {/* <div className="col-sm-8 section-heading text-center mb-40">
          <h2>Our</h2>
          <h3 className="mt-10 oswald-font font-100">Group of Companies</h3>
        </div> */}

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          className="client-slider"
        >
          {/* Replace with your actual logo paths */}
          {brands.map((brand) => (
            <SwiperSlide key={brand.id} className="client-item">
              <img src={brand.logo} alt={brand.name} className="client-logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurBrandsSection;
