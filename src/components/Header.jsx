import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  {
    label: "About Us",
    children: [
      { to: "/about-us", label: "About Agroventures" },
      { to: "/legal-document", label: "Legal / Documents" },
    ],
  },
  {
    label: "Land",
    children: [
      { to: "/available-properties", label: "Available Properties" },
      { to: "/land-ownership", label: "Land Ownership" },
      { to: "/#landmodel-section", label: "Lease Model", scrollId: "landmodel-section" },
    ],
  },
  {
    label: "Crops",
    children: [
      { to: "/crops/vanilla", label: "Vanilla" },
      { to: "/crops/cinnamon", label: "Cinnamon" },
      { to: "/crops/pepper", label: "Pepper" },
      { to: "/crops/nutmeg", label: "Nutmeg" },
      { to: "/crops/cloves", label: "Cloves" },
      { to: "/crops/cardamom", label: "Cardamom" },
      { to: "/crops/vegetables", label: "Vegetables" },
    ],
  },
  { to: "/agricultural-operations", label: "Agricultural Operations" },
  { to: "https://agroventuresexports.com/", label: "Processing & Exports" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobile, setOpenMobile] = useState(null);
  const location = useLocation();
  const isEventDetail = location.pathname === "/event-detail";
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Close dropdown on route change */
  useEffect(() => {
    setOpenDropdown(null);
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (to) => {
    const path = to.split("#")[0];
    return path === "/"
      ? location.pathname === "/"
      : location.pathname === path;
  };

  const isParentActive = (children) => children.some((c) => isActive(c.to));

  const navigate = useNavigate();

  const handleScrollLink = (scrollId) => {
    setOpenDropdown(null);
    setMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById(scrollId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(scrollId)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  const isDark = scrolled || isEventDetail;

  return (
    <>
      <header
        className={`site-header ${isDark ? "site-header-scrolled" : "site-header-top"}`}
      >
        <div className="container">
          <div className="site-header-inner">
            {/* ── Logo ── */}
            <Link to="/" className="site-logo" aria-label="Agroventures Home">
              <img
                src={
                  isDark ? "/images/logo-black.png" : "/images/logo-white.png"
                }
                alt="Agroventures Plantations"
                className="site-logo-img"
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav
              className="site-nav"
              aria-label="Main navigation"
              ref={dropdownRef}
            >
              <ul className="site-nav-list">
                {navLinks.map((link, i) =>
                  link.children ? (
                    <li
                      key={i}
                      className={`site-nav-item site-nav-has-dropdown${openDropdown === i ? " site-nav-dropdown-open" : ""}`}
                    >
                      <button
                        className={`site-nav-link site-nav-dropdown-trigger${isParentActive(link.children) ? " site-nav-link-active" : ""}`}
                        onClick={() =>
                          setOpenDropdown(openDropdown === i ? null : i)
                        }
                        aria-expanded={openDropdown === i}
                      >
                        {link.label}
                        <i className="fa fa-chevron-down site-nav-caret" />
                        <span className="site-nav-underline" />
                      </button>
                      <ul className="site-dropdown">
                        {link.children.map((child, j) => (
                          <li key={j} className="site-dropdown-item">
                            {child.scrollId ? (
                              <button
                                className="site-dropdown-link"
                                onClick={() => handleScrollLink(child.scrollId)}
                              >
                                <span className="site-dropdown-dot" />
                                {child.label}
                              </button>
                            ) : (
                              <Link
                                to={child.to}
                                className={`site-dropdown-link${isActive(child.to) ? " site-dropdown-link-active" : ""}`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                <span className="site-dropdown-dot" />
                                {child.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={i} className="site-nav-item">
                      <Link
                        to={link.to}
                        className={`site-nav-link${isActive(link.to) ? " site-nav-link-active" : ""}`}
                      >
                        {link.label}
                        <span className="site-nav-underline" />
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            {/* ── CTA button (desktop) ── */}
            <div className="site-header-cta">
              <Link to="/contact-us" className="site-header-btn">
                Contact Us
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className={`site-hamburger ${menuOpen ? "site-hamburger-open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="site-hamburger-bar" />
              <span className="site-hamburger-bar" />
              <span className="site-hamburger-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile backdrop ── */}
      <div
        className={`site-mobile-backdrop ${menuOpen ? "site-mobile-backdrop-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`site-mobile-menu ${menuOpen ? "site-mobile-menu-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="site-mobile-header">
          <Link
            to="/"
            className="site-mobile-logo"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/logo-white.png"
              alt="Agroventures"
              className="site-mobile-logo-img"
            />
          </Link>
          <button
            className="site-mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa fa-times" />
          </button>
        </div>

        <nav className="site-mobile-nav" aria-label="Mobile navigation">
          <ul className="site-mobile-nav-list">
            {navLinks.map((link, i) =>
              link.children ? (
                <li key={i} className="site-mobile-nav-item">
                  <button
                    className={`site-mobile-nav-link site-mobile-nav-parent${isParentActive(link.children) ? " site-mobile-nav-active" : ""}`}
                    onClick={() => setOpenMobile(openMobile === i ? null : i)}
                    aria-expanded={openMobile === i}
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <span className="site-mobile-nav-dot" />
                    {link.label}
                    <i
                      className={`fa fa-chevron-${openMobile === i ? "up" : "down"} site-mobile-nav-arrow`}
                    />
                  </button>
                  <ul
                    className={`site-mobile-submenu${openMobile === i ? " site-mobile-submenu-open" : ""}`}
                  >
                    {link.children.map((child, j) => (
                      <li key={j} className="site-mobile-submenu-item">
                        {child.scrollId ? (
                          <button
                            className="site-mobile-submenu-link"
                            onClick={() => handleScrollLink(child.scrollId)}
                          >
                            <span className="site-mobile-submenu-dot" />
                            {child.label}
                          </button>
                        ) : (
                          <Link
                            to={child.to}
                            className="site-mobile-submenu-link"
                            onClick={() => setMenuOpen(false)}
                          >
                            <span className="site-mobile-submenu-dot" />
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={i}
                  className="site-mobile-nav-item"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <Link
                    to={link.to}
                    className={`site-mobile-nav-link${isActive(link.to) ? " site-mobile-nav-active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="site-mobile-nav-dot" />
                    {link.label}
                    <i className="fa fa-chevron-right site-mobile-nav-arrow" />
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="site-mobile-footer">
          <Link
            to="/contact-us"
            className="site-mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa fa-leaf" />
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
