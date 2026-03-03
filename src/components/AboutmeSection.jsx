const AboutMeSection = () => {
  return (
    <section className="white-bg pb-0 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-responsive"
              src="/images/director1.png"
              alt="director-img"
            />
          </div>
          <div className="col-md-6 text-left mb-20 mt-50">
            <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
              Director Message
            </h1>
            <p className="mt-20">
              As the Founder of Agroventures Plantations, I am filled with immense
              pride and gratitude for the journey we have undertaken together.
              From the very inception of this company, our vision was clear - to
              revolutionize Sri Lanka's agricultural landscape by fostering
              sustainability, empowering communities, and delivering exceptional
              produce to the world
            </p>
            <p className="mt-20">
              Today, I stand humbled by the strides we have made and the impact
              we have created. Our commitment to sustainable practices has not
              only yielded premium crops but has also preserved the precious
              environment that sustains us. We have demonstrated that
              responsible agriculture can be a powerful force for positive
              change, benefitting both farmers and consumers alike.
            </p>
            <div className="mt-30">
              <div
                className="signature-wrapper"
                style={{ position: "relative", display: "inline-block" }}
              >
                <p
                  className="font-30px dark-green-color mb-0"
                
                >
                  Mr. Nilanga Karunarathne
                </p>
                {/* <div
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "20px",
                    width: "200px",
                    height: "2px",
                    background:
                      "linear-gradient(to right, #004D4D, transparent)",
                  }}
                ></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
