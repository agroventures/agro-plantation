import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image:
      "https://res.cloudinary.com/avplantations/image/upload/v1773740205/850_3091_vehj6t.webp",
    eyebrow: "Sri Lanka Agriculture",
    titleLight: "Working Towards",
    titleBold: "A Brighter Future",
    subtitle:
      "The profound revolution shaping Sri Lanka's agricultural investment sector.",
    btnPrimary: { label: "Read More", to: "/about-us" },
    btnSecondary: { label: "Get Started", to: "/contact-us" },
    position: "center center",
  },
  {
    image:
      "https://res.cloudinary.com/avplantations/image/upload/v1773737188/1_mlk1vw.webp",
    eyebrow: "Premium Vanilla",
    titleLight: "Premium Quality",
    titleBold: "Vanilla Cultivation",
    subtitle: "From seed to export — excellence in every bean we grow.",
    btnPrimary: { label: "Contact Us", to: "/contact-us" },
    btnSecondary: { label: "Our Plantation", to: "/our-plantations" },
    position: "center center",
  },
  {
    image:
      "https://res.cloudinary.com/avplantations/image/upload/v1773742174/crown_2_nzqzf9.jpg",
    eyebrow: "Investment Opportunity",
    titleLight: "Invest in",
    titleBold: "Sri Lanka's Future",
    subtitle:
      "Sustainable agriculture with guaranteed returns and full legal security.",
    btnPrimary: { label: "Join Us Today", to: "/contact-us" },
    btnSecondary: { label: "Learn More", to: "/about-us" },
    position: "center center",
  },
];

const HeroSection = () => {
  return (
    <div className="hero-slider-wrap">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".hero-swiper-pagination" }}
        navigation={{
          nextEl: ".hero-nav-next",
          prevEl: ".hero-nav-prev",
        }}
        effect="fade"
        speed={1200}
        className="hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* ── Background image ── */}
            <div
              className="hero-slide-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position,
              }}
            />

            {/* ── Layered overlays ── */}
            <div className="hero-slide-overlay" />
            <div className="hero-slide-gradient" />

            {/* ── Content ── */}
            <div className="hero-slide-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
                    {/* Eyebrow */}
                    <div className="hero-slide-eyebrow">
                      <span className="hero-slide-eyebrow-line" />
                      <span className="hero-slide-eyebrow-text">
                        {slide.eyebrow}
                      </span>
                      <span className="hero-slide-eyebrow-line" />
                    </div>

                    {/* Titles */}
                    <h2 className="hero-slide-title-light">
                      {slide.titleLight}
                    </h2>
                    <h1 className="hero-slide-title-bold">{slide.titleBold}</h1>

                    {/* Divider */}
                    <div className="hero-slide-divider">
                      {/* <span className="hero-slide-divider-line" />
                      <span className="hero-slide-divider-leaf">🌿</span>
                      <span className="hero-slide-divider-line" /> */}
                      <img src="/images/divider.png" alt="divider" />{" "}
                    </div>

                    {/* Subtitle */}
                    <p className="hero-slide-subtitle">{slide.subtitle}</p>

                    {/* CTAs */}
                    <div className="hero-slide-cta">
                      <Link
                        to={slide.btnPrimary.to}
                        className="hero-slide-btn-primary"
                      >
                        <span>{slide.btnPrimary.label}</span>
                        <i className="fa fa-arrow-right hero-slide-btn-icon" />
                      </Link>
                      <Link
                        to={slide.btnSecondary.to}
                        className="hero-slide-btn-secondary"
                      >
                        <span>{slide.btnSecondary.label}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Slide counter (bottom right) ── */}
            <div className="hero-slide-counter">
              <span className="hero-slide-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="hero-slide-count-sep" />
              <span className="hero-slide-total">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </SwiperSlide>
        ))}

        {/* ── Custom navigation arrows ── */}
        <button
          className="hero-nav-btn hero-nav-prev"
          aria-label="Previous slide"
        >
          <i className="fa fa-chevron-left" />
        </button>
        <button className="hero-nav-btn hero-nav-next" aria-label="Next slide">
          <i className="fa fa-chevron-right" />
        </button>

        {/* ── Custom pagination dots ── */}
        <div className="hero-swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default HeroSection;
