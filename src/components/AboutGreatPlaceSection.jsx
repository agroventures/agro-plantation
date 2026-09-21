const AboutGreatPlaceSection = () => {
  return (
    <section className="main-section pb-50 pt-50">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
          <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
             great place to work 
            </h1>
            <div className="mt-30">
              <p>
                <span className="dark-green-color font-400">
                  Agro Ventures Plantation
                </span>{" "}
                is Proud to Be officially Recognizes as a{" "}
                <span className="dark-green-color font-400">
                  Great Place to Work®
                </span>{" "}
                in Sri Lanka 2025.
              </p>
              <a className="btn btn-color btn-circle btn-animate mt-20" href="https://greatplacetowork.lk/" target="_blank" rel="noopener noreferrer">
                <span>
                  Visit Site <i class="fa-solid fa-rocket"/>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-0">
          <div className="col-md-12 text-center">
            <img
              src="/images/great-place.jpeg"
              alt="img-1"
              className="box-shadow-hover"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGreatPlaceSection;
