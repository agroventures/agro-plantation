import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-0 pb-0">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        effect="fade" 
        speed={1000}
        className="slider-bg"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div
            className="slide-img"
            style={{
              backgroundImage: `url(/images/slides/home-bg-1.webp)`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="hero-text-wrap">
            <div className="hero-text white-color">
              <div className="container text-center">
                <h2 className="font-100">Working Towards</h2>
                <h1 className="font-600">A Brighter Future</h1>
                <h3 className="mt-30">
                  THE PROFOUND REVOULTION SHAPING{' '}
                  <span className="font-700">SRI LANKA'S AGRICULTURAL</span>{' '}
                  INVESTMENT SECTOR
                </h3>
                <p className="text-center mt-30">
                  <Link to="/about-us" className="btn btn-color btn-circle">Read more</Link>{' '}
                  <a className="btn btn-white btn-circle">Get started</a>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div
            className="slide-img"
            style={{
              backgroundImage: `url(/images/slides/home-bg-2.webp)`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="hero-text-wrap">
            <div className="hero-text white-color">
              <div className="container text-center">
                <h2 className="font-100">Premium Quality</h2>
                <h1 className="font-600">Vanilla Cultivation</h1>
                <h3 className="mt-30">
                  From <span className="font-700">SEED TO EXPORT</span> - Excellence in Every Bean
                </h3>
                <p className="text-center mt-30">
                  <Link to="/contact-us" className="btn btn-white btn-circle">Contact Us</Link>{' '}
                  <Link to="/our-plantations" className="btn btn-outline-white btn-circle">Our Plantation</Link>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div
            className="slide-img"
            style={{
              backgroundImage: `url(/images/slides/home-bg-3.webp)`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="hero-text-wrap">
            <div className="hero-text white-color">
              <div className="container text-center">
                <h2 className="font-100">Invest in</h2>
                <h1 className="font-600">Sri Lanka's Future</h1>
                {/* <h3 className="mt-30">
                  <span className="font-700">SUSTAINABLE AGRICULTURE</span> with{' '}
                  <span className="font-700">GUARANTEED RETURNS</span>
                </h3> */}
                <p className="text-center mt-30">
                  <Link to="/contact-us" className="btn btn-outline-white btn-circle">Join Us Today</Link>{' '}
                  <Link to="/about-us" className="btn btn-white btn-circle">Learn More</Link>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;