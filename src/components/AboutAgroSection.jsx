import React, { useState } from "react";

const AboutAgroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="white-bg  pb-50 pt-50" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-60 pb-60">
            <h4 className="text-uppercase">Agroventures Plantations</h4>
            <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
              who we are
            </h1>
            <p className="mt-30">
              Agroventures Plantations (Pvt) Ltd, a pioneering company dedicated
              to the cultivation of vanilla and other export-oriented spices.
              Our vision is to generate USD 1 billion for Sri Lanka by 2030
              through sustainable and large-scale vanilla cultivation. Our
              diverse range includes high-quality spices, vanilla, and various
              other crops that are meticulously grown to meet the stringent
              standards of international markets. Alongside our robust export
              operations, we are equally committed to serving the local market,
              catering to the refined tastes and preferences of Sri Lankan
              consumers.
            </p>
            {isExpanded && (
              <>
                <p className="mt-20">
                  Our unwavering dedication to sustainability is at the core of
                  our operations. We employ advanced, responsible farming
                  practices that ensure minimal environmental impact while
                  maximizing yield and quality. By integrating cutting-edge
                  agricultural technologies with traditional farming knowledge,
                  we maintain a delicate balance between innovation and
                  heritage, ensuring the long-term health and productivity of
                  our lands.
                </p>

                <p className="mt-20">
                  As industry leaders, we pride ourselves on our ethical
                  approach to agriculture. We believe in creating value not just
                  for our customers but for the entire ecosystem involved in our
                  operations. This includes fair labor practices, community
                  engagement, and investment in local economies, all of which
                  are integral to our business model.
                </p>

                <p className="mt-20">
                  Agroventures Plantations offers unparalleled investment
                  opportunities for those who are passionate about ethical and
                  environmentally conscious agriculture. Our initiatives are
                  designed to provide significant returns while promoting
                  sustainability and ecological balance. Investors can be
                  confident that their involvement is contributing to a greater
                  good, fostering a future where agricultural practices are
                  synonymous with responsibility and care for the environment.
                </p>
              </>
            )}
            <p className="text-left mt-30">
              <button
                className="btn btn-color btn-default"
                onClick={toggleExpand}
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-responsive"
              src="/images/about-nature.jpg"
              alt="nature-img"
            />
          </div>
        </div>
      </div>

      {/* Parallax Start */}
      <section
        className="parallax-bg-12 fixed-bg nature-section pt-60 pb-60"
        data-stellar-background-ratio="0.2"
        style={{backgroundColor:"#1f4e04"}}
      >
     
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center white-color">
              <h2 className="text-uppercase">
                "ALL OUR FARMS <span className="green">CAREFULLY</span> TENDERED
                BY OUR EXPERTS"
              </h2>
             
            </div>
          </div>
        </div>
      </section>
      {/* Parallax End */}
    </section>
  );
};

export default AboutAgroSection;
