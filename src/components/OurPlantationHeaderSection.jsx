import { Link } from "react-router-dom";

const OurPlantationHeaderSection = () => {
  return (
   <section className="pt-0 pb-0">
      <div className="full-screen-bg">
        <div
          className="parallax-img"
          style={{
            background:
              "url(/images/paralax/paralax6.webp) center center / cover scroll no-repeat",
          }}
        />
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
              <Link to="/events" className="btn btn-white btn-circle">See Our Work</Link>
              <Link to="/contact-us" className="btn btn-color btn-circle">Contact us</Link>
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlantationHeaderSection;
