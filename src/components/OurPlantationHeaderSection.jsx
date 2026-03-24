import { Link } from "react-router-dom";

const OurPlantationHeaderSection = () => {
  return (
    <section className="pt-0 pb-0">
      <div className="full-screen-bg">
        <div className="parallax-img video-background-wrapper">
          <video autoPlay muted loop playsInline className="bg-video">
            <source
              src="https://res.cloudinary.com/avplantations/video/upload/v1774338040/8-1_n2nifd.mp4"
              type="video/mp4"
            />
          </video>
          <div className="video-overlay" />
        </div>

        <div className="hero-text-wrap video-alpha">
          <div className="hero-text white-color">
            <div className="container text-center">
              <h3 className="white-color oswald-font font-30px text-uppercase">
                Timeless Beauty and Heritage
              </h3>
              <h1 className="white-color oswald-font text-uppercase">
                Discover Our Plantations
              </h1>
              <p className="text-center mt-30">
                <Link to="/events" className="btn btn-white btn-circle">
                  See Our Work
                </Link>
                <Link to="/contact-us" className="btn btn-color btn-circle">
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlantationHeaderSection;