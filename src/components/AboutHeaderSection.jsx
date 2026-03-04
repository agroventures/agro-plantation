const AboutHeaderSection = () => {
  return (
    <section className="pt-0 pb-0">
      <div className="full-screen-bg">
        <div
          className="parallax-img"
          style={{
            background:
              "url(/images/paralax/parallax-bg.jpg) center center / cover scroll no-repeat",
          }}
        />
        <div className="hero-text-wrap video-alpha">
          <div className="hero-text white-color">
            <div className="container text-center">
              <h3 className="white-color oswald-font font-30px text-uppercase">
                About
              </h3>
              <h1 className="white-color oswald-font text-uppercase">
               Agroventure Plantation
              </h1>
              {/* <h4 className="white-color oswald-font font-30px mt-30 text-uppercase">
                Creative solutions to improve your business
              </h4> */}
              <a
                href="https://www.youtube.com/watch?v=LP48R_Jmao8"
                className="btn btn-white btn-circle popup-youtube mt-30"
              >
                Our Journey{" "}
                <span className="icon">
                  <i className="fa fa-play" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeaderSection;
