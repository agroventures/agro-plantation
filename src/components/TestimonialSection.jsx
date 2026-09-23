import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialSection = () => {

const testimonials = [
  {
    image: "/images/clients/manjula.png",
    alt: "Manjula Wimalasena",
    text: "I live in South Korea, and I was looking for a reliable opportunity to own agricultural land in Sri Lanka. I came across Agroventures Plantations and was impressed by their commitment to sustainable agriculture and professional land management. The team has been supportive throughout the process, and I am happy with the service they provide.",
    name: "Mr. Manjula Wimalasena",
  },

  {
    image: "/images/clients/udhaya.png",
    alt: "Mr. G N Udaya Kumara",
    text: "I am very happy with my experience with Agroventures Plantations. I appreciate the professional service and the care they give to agricultural land and cultivation. Their team has been helpful and responsive throughout the process.",
    name: "Mr. G N Udaya Kumara",
  },

  {
    image: "/images/clients/withthamperuma.png",
    alt: "Mr. Withthamperuma Arachchige Yasendra",
    text: "My experience with Agroventures Plantations has been very positive. I appreciate their approach to sustainable agriculture and responsible land management. I look forward to seeing the continued development of the plantation.",
    name: "Mr. Withthamperuma Arachchige Yasendra",
  },

  {
    image: "/images/clients/illayarajah.png",
    alt: "Mr. Malyoganam Illayarajah",
    text: "I am happy with my experience with Agroventures Plantations. The team provides good customer service and keeps me informed about the progress of the agricultural activities. I wish Agroventures continued success in the future.",
    name: "Mr. Malyoganam Illayarajah",
  },
];


  return (
    <section
      className="parallax-bg-9 fixed-bg pt-50 pb-50"
      data-stellar-background-ratio="0.2"
    >
      <div className="parallax-overlay" />
      <div className="container">
        <div className="row">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            // navigation={true}
            className="testimonial"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="testimonial-img"
                  />
                  <h4>
                    {testimonial.text}
                  </h4>
                  <h5 className="inter-font upper-case">
                    {testimonial.name}
                  </h5>
                </div>
              </SwiperSlide>
            ))}


          
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
