import { useState } from "react";

const OurCultivationPlansSection = () => {
  const [isGoldenExpanded, setIsGoldenExpanded] = useState(false);
  const [isTripleExpanded, setIsTripleExpanded] = useState(false);

  const toggleGoldenExpand = () => {
    setIsGoldenExpanded(!isGoldenExpanded);
  };

  const toggleTripleExpand = () => {
    setIsTripleExpanded(!isTripleExpanded);
  };

  return (
    <section className="main-section pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h1 className="dark-green-color">
              <i className="mdi mdi-leaf" style={{ marginRight: "10px" }} />
              Cultivation plans
            </h1>
            <div className="mt-30">
              <p>
                We are excited to present two unique plans designed to
                contribute to Sri Lanka’s agricultural growth and provide
                agricultureal value creation for our land buyers. By purchasing
                land in the fertile Matale district, you can be part of our
                ambitious project to boost Sri Lanka's export income through
                sustainable vanilla cultivation..
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-6 mb-20">
            <div className="box bordered white-bg box-shadow-hover">
              <div className="mb-30 text-center">
                <img
                  src="/images/vanila-gold.png"
                  className="img-circle"
                  alt="img-1"
                />

                <h5 className="roboto-font">Agroventures</h5>
                <h2 className="oswald-font">
                  <span style={{ color: "#D4AF37" }}>Green</span> Gold Plan
                </h2>
              </div>
              {isGoldenExpanded && (
                <div
                  className="card"
                  style={{
                    border: "1px solid #D4AF37",
                    borderRadius: 12,
                    padding: "20px",
                    background: "linear-gradient(180deg, #ffffff, #fffbe6)",
                  }}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <h5
                        className="text-uppercase"
                        style={{ color: "#D4AF37", letterSpacing: 1 }}
                      >
                        Details
                      </h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <i
                            className="fa fa-file-text-o"
                            aria-hidden="true"
                            style={{ color: "#D4AF37", marginRight: 8 }}
                          />
                          <strong>
                            Project Development Cost (Land Purchase / Land
                            Development / Cultivation):
                          </strong>
                          <br />
                          Buy 10 perches of land for Rs. 105,468 per perch.
                          Minimum purchase: 10 perches.
                          <br />
                          <strong>Total Cost: Rs. 893,750</strong>
                        </li>
                        <li className="list-group-item">
                          <i
                            className="fa fa-shield"
                            aria-hidden="true"
                            style={{ color: "#D4AF37", marginRight: 8 }}
                          />
                          <strong>Land Ownership Documentation:</strong>
                          <br />
                          Ownership of the land is secured through the Land
                          Registry Office of Matale.
                        </li>
                        <li className="list-group-item">
                          <i
                            className="fa fa-file-signature"
                            aria-hidden="true"
                            style={{ color: "#D4AF37", marginRight: 8 }}
                          />
                          <strong>Lease Agreement:</strong>
                          <br />
                          The purchased land is leased to Agroventures
                          Plantations Private Ltd, with registration at the Land
                          Registry.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-20">
                    <h3 className="text-uppercase" style={{ fontSize: 20 }}>
                      Features and Benefits
                    </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-unstyled mb-0">
                          <li className="media mb-15">
                            <span
                              className="fa fa-check-circle"
                              aria-hidden="true"
                              style={{ color: "#2d3e1f", marginRight: 8 }}
                            />
                            <div>
                              <strong>Development:</strong>
                              <br />
                              We fence and develop the land, improve soil
                              quality, and plant vanilla vines.
                            </div>
                          </li>
                          <li className="media mb-15">
                            <span
                              className="fa fa-check-circle"
                              aria-hidden="true"
                              style={{ color: "#2d3e1f", marginRight: 8 }}
                            />
                            <div>
                              <strong>Cultivation:</strong>
                              <br />
                              We manage fertilization (organic), watering,
                              sheltering, hand pollination, and harvesting.
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled mb-0">
                          <li className="media mb-15">
                            <span
                              className="fa fa-check-circle"
                              aria-hidden="true"
                              style={{ color: "#2d3e1f", marginRight: 8 }}
                            />
                            <div>
                              <strong>Processing:</strong>
                              <br />
                              We handle curing, sweating, processing, market
                              preparation, marketing, exporting, and sales.
                            </div>
                          </li>
                          <li className="media mb-15">
                            <span
                              className="fa fa-check-circle"
                              aria-hidden="true"
                              style={{ color: "#2d3e1f", marginRight: 8 }}
                            />
                            <div>
                              <strong>Final Land Repurchase Value:</strong>
                              <br />
                              After 5 years, we will repurchase the developed
                              vanilla-cultivated land for
                              <br />
                              <strong>Rs. 4,000,000</strong>.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-20">
                    <h3 className="text-uppercase" style={{ fontSize: 20 }}>
                      Summary
                    </h3>
                    <div className="row text-center">
                      <div className="col-sm-6">
                        <div
                          className="box bordered"
                          style={{
                            borderColor: "#D4AF37",
                            borderRadius: 10,
                            padding: "15px",
                            marginBottom: "15px",
                          }}
                        >
                          <div style={{ fontSize: 12, opacity: 0.8 }}>
                            <strong>Project Development Cost:</strong>
                          </div>
                          <div style={{ fontSize: 22, color: "#2d3e1f" }}>
                            Rs. 893,750
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div
                          className="box bordered"
                          style={{
                            borderColor: "#D4AF37",
                            borderRadius: 10,
                            padding: "15px",
                            marginBottom: "15px",
                          }}
                        >
                          <div style={{ fontSize: 12, opacity: 0.8 }}>
                            <strong>
                              Final Land Repurchase Value (after 5 years):
                            </strong>{" "}
                          </div>
                          <div style={{ fontSize: 22, color: "#2d3e1f" }}>
                            Rs. 4,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-center mt-30">
                <button
                  className="btn btn-color btn-default"
                  onClick={toggleGoldenExpand}
                >
                  {isGoldenExpanded ? "Read less" : "Read more"}
                </button>
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-20">
            <div className="box bordered white-bg box-shadow-hover">
              <div className="mb-30 text-center">
                <img
                  src="/images/vanila-triple.png"
                  className="img-circle"
                  alt="img-1"
                />
                <h5 className="roboto-font">Agroventures</h5>
                <h2 className="oswald-font">
                  <span style={{ color: "#d3da71ff" }}>Triple</span> Benefit
                  Plan
                </h2>{" "}
              </div>
              {isTripleExpanded && (
                <div
                  className="card"
                  style={{
                    border: "1px solid #d3da71ff",
                    borderRadius: 12,
                    padding: "20px",
                    background: "linear-gradient(180deg, #ffffff, #faffda)",
                  }}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <h5
                        className="text-uppercase"
                        style={{ color: "#8b9554", letterSpacing: 1 }}
                      >
                        Details
                      </h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <i
                            className="fa fa-money"
                            aria-hidden="true"
                            style={{ color: "#8b9554", marginRight: 8 }}
                          />
                          <strong>
                            Project Development Cost (Land Purchase / Land
                            Development / Cultivation):*
                          </strong>
                          <br />
                          Buy 10 perches of land for Rs. 105,468 per perch. The
                          minimum purchase is 10 perches, totaling Rs.
                          1,054,680.
                        </li>
                        <li className="list-group-item">
                          <i
                            className="fa fa-shield"
                            aria-hidden="true"
                            style={{ color: "#8b9554", marginRight: 8 }}
                          />
                          <strong>Legal Security and Bond:*</strong>
                          <br />
                          Ownership of the land is secured through the Land
                          Registry Office of Matale.
                        </li>
                        <li className="list-group-item">
                          <i
                            className="fa fa-file-signature"
                            aria-hidden="true"
                            style={{ color: "#8b9554", marginRight: 8 }}
                          />
                          <strong>Lease Agreement:*</strong>
                          <br />
                          Lease the purchased land to Agroventures Plantations
                          Private Ltd, with the agreement registered at the Land
                          Registry.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-20">
                    <h3 className="text-uppercase" style={{ fontSize: 20 }}>
                      Features and Benefits
                    </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-unstyled mb-0">
                          <li className="media mb-15">
                            <span
                              className="fa fa-check-circle"
                              aria-hidden="true"
                              style={{ color: "#2d3e1f", marginRight: 8 }}
                            />
                            <div>
                              <strong>Development:*</strong>
                              <br />
                              We provide the same land and cultivation services
                              as in the Green Gold Plan.
                            </div>
                          </li>
                          <li className="media mb-15">
                            <span
                              className="fa fa-check-circle"
                              aria-hidden="true"
                              style={{ color: "#2d3e1f", marginRight: 8 }}
                            />
                            <div>
                              <strong>
                                Harvest Payment and Leased Rental:*
                              </strong>
                              <br />
                              Receive a monthly payment of{" "}
                              <strong>Rs. 21,973.</strong>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled mb-0">
                          <li className="media mb-15">
                            <span
                              className="fa fa-check-circle"
                              aria-hidden="true"
                              style={{ color: "#2d3e1f", marginRight: 8 }}
                            />
                            <div>
                              <strong>Additional Crop Cultivation:</strong>
                              <br />
                              Cultivate valuable intercrops such as bananas,
                              ginger, turmeric, cinnamon, and coffee alongside
                              the primary crops.
                            </div>
                          </li>
                          <li className="media mb-15">
                            <span
                              className="fa fa-check-circle"
                              aria-hidden="true"
                              style={{ color: "#2d3e1f", marginRight: 8 }}
                            />
                            <div>
                              <strong className="font-weight-bold">
                                Final Land Repurchase Value:*
                              </strong>
                              <br />
                              After 5 years, we will buy back the developed
                              vanilla-cultivated land for{" "}
                              <strong>Rs. 2,636,700.</strong>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-20">
                    <h3 className="text-uppercase" style={{ fontSize: 20 }}>
                      Summary
                    </h3>
                    <div className="row text-center">
                      <div className="col-sm-4">
                        <div
                          className="box bordered"
                          style={{
                            borderColor: "#d3da71ff",
                            borderRadius: 10,
                            padding: "15px",
                            marginBottom: "15px",
                          }}
                        >
                          <div style={{ fontSize: 12, opacity: 0.8 }}>
                            Project Development Cost :*
                          </div>
                          <div style={{ fontSize: 18, color: "#2d3e1f" }}>
                            Rs. 1,054,680
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div
                          className="box bordered"
                          style={{
                            borderColor: "#d3da71ff",
                            borderRadius: 10,
                            padding: "15px",
                            marginBottom: "15px",
                          }}
                        >
                          <div style={{ fontSize: 12, opacity: 0.8 }}>
                            Harvest Payment and Leased Rental:*
                          </div>
                          <div style={{ fontSize: 18, color: "#2d3e1f" }}>
                            Rs. 21,973 monthly
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div
                          className="box bordered"
                          style={{
                            borderColor: "#d3da71ff",
                            borderRadius: 10,
                            padding: "15px",
                            marginBottom: "15px",
                          }}
                        >
                          <div style={{ fontSize: 12, opacity: 0.8 }}>
                            Final Land Repurchase Value after 5 years:*
                          </div>
                          <div style={{ fontSize: 18, color: "#2d3e1f" }}>
                            Rs. 2,636,700
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <p className="text-center mt-30">
                <button
                  className="btn btn-color btn-default"
                  onClick={toggleTripleExpand}
                >
                  {isTripleExpanded ? "Read less" : "Read more"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurCultivationPlansSection;
