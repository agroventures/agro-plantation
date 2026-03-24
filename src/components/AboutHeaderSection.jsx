const AboutHeaderSection = () => {
  return (
    <section className="pt-0 pb-0">
      <div className="full-screen-bg">
        <div className="parallax-img video-background-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
          >
            <source src="https://res.cloudinary.com/avplantations/video/upload/v1774338027/6-1_hzllfq.mp4" type="video/mp4" />
            {/* <source src="/videos/about-bg.webm" type="video/webm" /> */}
          </video>
          <div className="video-overlay" />
        </div>

        <div className="hero-text-wrap video-alpha">
          <div className="hero-text white-color">
            <div className="container text-center">
              <h3 className="white-color oswald-font font-30px text-uppercase">
                About
              </h3>
              <h1 className="white-color oswald-font text-uppercase">
                Agroventures Plantations
              </h1>
              <a
                href="https://www.youtube.com/watch?v=DyPH-yGnL9w"
                className="btn btn-white btn-circle popup-youtube mt-30"
                target="_blank"
                rel="noopener noreferrer"
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
