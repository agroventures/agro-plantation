import React from "react";
import { Link } from "react-router-dom";
import FooterGalleriesBox from "./FooterGalleriesBox";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-sm-6 col-md-3">
              <div className="widget widget-text">
                <div className="mb-30">
                  <img
                    src="/images/logo-white.png"
                    alt="AgroVentures Logo"
                    className="mb-10"
                    style={{ maxHeight: 60 }}
                  />
                </div>
                <div className="contact-info">
                  <p className="capitalize font-italic font-400">
                    Rebranding Sri Lanka's Flavour as a Vanilla Exporter
                  </p>
                  <p className="mb-10">
                    <i className="fas fa-phone orange-color mr-10" /> +94 (70)
                    520 0900
                  </p>
                  <p className="mb-10">
                    <i className="fas fa-map-marker-alt orange-color mr-10" />
                    No.253 Kaduwela Road Thalangama Koswatta Battaramulla
                  </p>
                  <p className="mb-20">
                    <i className="fas fa-envelope orange-color mr-10" />
                    info@agroventures.lk
                  </p>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Useful Links</h5>
                <ul>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/our-plantations">Our Plantations</Link>
                  </li>
                  <li>
                    <Link to="/branch-network">Branch Network</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certificates */}
            <div className="col-sm-6 col-md-3">
              <div className="widget widget-text">
                <h5 className="widget-title">Certificates</h5>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "15px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/images/gwp.png"
                    alt="Great Place to Work Badge"
                    style={{ width: "70px", height: "auto" }}
                  />
                  <img
                    src="/images/certificate2.png"
                    alt="Certificate"
                    style={{ width: "120px", height: "auto" }}
                  />
                  <img
                    src="/images/certificate.png"
                    alt="Certificate"
                    style={{ width: "80px", height: "auto" }}
                  />
                </div>
              </div>
            </div>

            {/* Gallery - ALL ORIGINAL IMAGE PATHS PRESERVED EXACTLY */}
            <div className="col-sm-6 col-md-4">
              <FooterGalleriesBox />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Social Media */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <div className="copy-right">
                © 2026.
                <Link
                  to="https://www.ventrax.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fc885d" }}
                >
                  Ventrax.lk
                </Link>{" "}
                - All Right Reserved
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <ul className="social-media">
                <li>
                  <a
                    href="https://www.youtube.com/@AgroVenturesPlantations.Deshan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/agroventuresplantations?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/agroventurespl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/agroventuresplantations/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/agro-ventures-plantations-pvt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
