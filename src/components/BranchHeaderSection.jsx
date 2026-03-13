import { Link } from "react-router-dom";

const BranchHeaderSection = () => {
  return (
    <section className="pt-0 pb-0">
      <div className="full-screen-bg">
        <div
          className="parallax-img"
          style={{
            background:
              "url(/images/paralax/paralax4.webp) center center / cover scroll no-repeat",
          }}
        />
        <div className="hero-text-wrap video-alpha">
          <div className="hero-text white-color">
            <div className="container text-center">
              <h3 className="white-color oswald-font font-30px text-uppercase">
                Our Extensive
              </h3>
              <h1 className="white-color oswald-font text-uppercase">
                Branch Network
              </h1>
              <p className="text-center mt-30">
                <Link to="/about-us" className="btn btn-color btn-circle">
                  About Us
                </Link>
                <Link
                  to="/our-plantations"
                  className="btn btn-white btn-circle"
                >
                  Our Plantations
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BranchHeaderSection;
