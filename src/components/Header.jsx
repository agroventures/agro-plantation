import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    // Initialize navbar functionality
    const timer = setTimeout(() => {
      if (window.jQuery) {
        const $ = window.jQuery;

        // Initialize navbar scroll behavior
        $(window).scroll(function () {
          if ($(this).scrollTop() > 50) {
            $(".navbar-fixed").removeClass("navbar-transparent");
            $(".navbar-fixed").addClass("on");
          } else {
            $(".navbar-fixed").addClass("navbar-transparent");
            $(".navbar-fixed").removeClass("on");
          }
        });

        // Initialize navbar toggle
        $(".navbar-toggle").on("click", function () {
          $("#navbar-menu").collapse("toggle");
        });

        // Initialize dropdown functionality
        if ($.fn.dropdown) {
          $(".dropdown-toggle").dropdown();
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Header Start */}
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav on no-full">
        {/* Start Top Search */}
        <div className="top-search">
          <div className="container">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-search" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="input-group-addon close-search">
                <i className="fa fa-times" />
              </span>
            </div>
          </div>
        </div>
        {/* End Top Search */}
        <div className="container">
          {/* Start Header Navigation */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars" />
            </button>
            <Link to="/" className="logo navbar-brand">
              <img
                className="logo logo-display"
                src="/images/logo-white.png"
                alt=""
              />
              <img
                className="logo logo-scrolled"
                src="/images/logo-black.png"
                alt=""
              />
            </Link>
          </div>
          {/* End Header Navigation */}
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeIn"
              data-out="fadeOut"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
 <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
              {/* <li className="dropdown">
                {" "}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  About us
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown"> </li>

                  <li>
                    <Link to="/about-us">About company</Link>
                  </li>
                  <li>
                    <Link to="/our-plantations">Our plantations</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/branch-network">Branch Network</Link>
              </li>
              <li>
                    <Link to="/our-plantations">Our plantations</Link>
                  </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
      </nav>
      {/* Header End */}
    </>
  );
};
export default Header;
