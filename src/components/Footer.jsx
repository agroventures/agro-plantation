import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-sm-6 col-md-4">
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
                    <i className="fas fa-phone blue-color mr-10" /> +94 11 2878766
                  </p>
                  <p className="mb-10">
                    <i className="fas fa-map-marker-alt blue-color mr-10" />
                    No.253 Kaduwela Road Thalangama Koswatta Battaramulla
                  </p>
                  <p className="mb-20">
                    <i className="fas fa-envelope blue-color mr-10" />
                    info@agroventuresplantations.com
                  </p>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Useful Links</h5>
                <ul>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                   <li><Link to="/our-plantations">Our Plantations</Link></li>
                  <li><Link to="/branch-network">Branch Network</Link></li>
                </ul>
              </div>
            </div>

             {/* Great Place to Work - Badge */}
            <div className="col-sm-6 col-md-3">
              {/* <div className="widget widget-text text-center"> */}
                <h5 className="widget-title">Certificates</h5>
                <div style={{ display: "flex", gap: "15px" }}>
                  <img
                    src="/images/gwp.png"
                    alt="Great Place to Work Badge"
                    style={{ width: "80px", height: "auto" }}
                  />
                  <img
                    src="/images/certificate.png"
                    alt="Certificate"
                    style={{ width: "120px", height: "auto" }}
                  />
                </div>
              {/* </div> */}
            </div>

            {/* Gallery - ALL ORIGINAL IMAGE PATHS PRESERVED EXACTLY */}
            <div className="col-sm-6 col-md-3">
              <div className="widget widget-text">
                <h5 className="widget-title">Gallery</h5>
                <ul className="footer-gallery" id="footer-gallery">
                  <li>
                    <div className="footer-gallery-box">
                      <div className="skin-overlay" />
                      <img
                        src="/images/gallery/01.jpg"
                        alt="gallery-1"
                      />
                      <div className="zoom-wrap text-center">
                        <ul className="footer-gallery-zoom">
                          <li>
                            <a
                              className="alpha-lightbox"
                              href="/images/gallery/01-lg.jpg"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer-gallery-box">
                      <div className="skin-overlay" />
                      <img
                        src="/images/gallery/02.jpg"
                        alt="gallery-2"
                      />
                      <div className="zoom-wrap text-center">
                        <ul className="footer-gallery-zoom">
                          <li>
                            <a
                              className="alpha-lightbox"
                              href="/images/gallery/02-lg.jpg"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer-gallery-box">
                      <div className="skin-overlay" />
                      <img
                        src="/images/gallery/03.jpg"
                        alt="gallery-3"
                      />
                      <div className="zoom-wrap text-center">
                        <ul className="footer-gallery-zoom">
                          <li>
                            <a
                              className="alpha-lightbox"
                              href="/images/gallery/03-lg.jpg"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer-gallery-box">
                      <div className="skin-overlay" />
                      <img
                        src="/images/gallery/04.jpg"
                        alt="gallery-4"
                      />
                      <div className="zoom-wrap text-center">
                        <ul className="footer-gallery-zoom">
                          <li>
                            <a
                              className="alpha-lightbox"
                              href="/images/gallery/04-lg.jpg"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer-gallery-box">
                      <div className="skin-overlay" />
                      <img
                        src="/images/gallery/05.jpg"
                        alt="gallery-5"
                      />
                      <div className="zoom-wrap text-center">
                        <ul className="footer-gallery-zoom">
                          <li>
                            <a
                              className="alpha-lightbox"
                              href="/images/gallery/05-lg.jpg"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer-gallery-box">
                      <div className="skin-overlay" />
                      <img
                        src="/images/gallery/06.jpg"
                        alt="gallery-6"
                      />
                      <div className="zoom-wrap text-center">
                        <ul className="footer-gallery-zoom">
                          <li>
                            <a
                              className="alpha-lightbox"
                              href="/images/gallery/06-lg.jpg"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer-gallery-box">
                      <div className="skin-overlay" />
                      <img
                        src="/images/gallery/07.jpg"
                        alt="gallery-7"
                      />
                      <div className="zoom-wrap text-center">
                        <ul className="footer-gallery-zoom">
                          <li>
                            <a
                              className="alpha-lightbox"
                              href="/images/gallery/07-lg.jpg"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer-gallery-box">
                      <div className="skin-overlay" />
                      <img
                        src="/images/gallery/08.jpg"
                        alt="gallery-8"
                      />
                      <div className="zoom-wrap text-center">
                        <ul className="footer-gallery-zoom">
                          <li>
                            <a
                              className="alpha-lightbox"
                              href="/images/gallery/08-lg.jpg"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Copyright & Social Media */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="copy-right">
                © 2026 Agroventures Plantations (Pvt) Ltd . All rights reserved
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <ul className="social-media">
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
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-pinterest" />
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
                  <a href="#" target="_blank" rel="noopener noreferrer">
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