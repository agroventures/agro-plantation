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
      text: "I live in South Korea, and I was looking for a good place to invest my earnings and came across Agroventures Plantations. I was impressed by their commitment to sustainability and the quality of their produce. I decided to invest in their plantation, and it has been a rewarding experience. The team at Agroventures Plantations has great customer service and provides the returns on time and I am very happy with Agroventures Plantations. I would recommend them to anyone.",
      name: "Mr. Manjula Wimalasena",
    },
    {
      image: "/images/clients/udhaya.png",
      alt: "Mr.G N Udaya Kumara",
      text: "I am very happy to say that I am an investor in Agroventures Plantations. I have to praise them for the high value they give for our investments as well as their great and timely service. I can say that Agroventures is a company you can trust for your investments.",
      name: "Mr.G N Udaya Kumara",
    },
    {
      image: "/images/clients/withthamperuma.png",
      alt: "Mr.Withthamperuma Arachchige Yasendra",
      text: "I got my first profit payment right on time from Agroventures Plantations.Looking forward to the future to come. Thank you Agroventures!",
      name: "Mr.Withthamperuma Arachchige Yasendra",
    },
    {
      image: "/images/clients/illayarajah.png",
      alt: "Mr.Malyoganam Illayarajah",
      text: "I am receiving the monthly payments on time, and I'm happy to say that this is a great investment choice for anyone. All the best to Agro Ventures.",
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
