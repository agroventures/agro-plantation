import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/",               label: "Home" },
  { to: "/about-us",       label: "About Us" },
  { to: "/events",         label: "Events" },
  { to: "/branch-network", label: "Branch Network" },
  { to: "/our-plantations",label: "Our Plantations" },
  // { to: "/contact-us",     label: "Contact Us" },
];

const Header = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();

  /* ── Scroll handler ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : "site-header-top"}`}>
        <div className="container">
          <div className="site-header-inner">

            {/* ── Logo ── */}
            <Link to="/" className="site-logo" aria-label="Agroventures Home">
              <img
                src={scrolled ? "/images/logo-black.png" : "/images/logo-white.png"}
                alt="Agroventures Plantations"
                className="site-logo-img"
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="site-nav" aria-label="Main navigation">
              <ul className="site-nav-list">
                {navLinks.map((link) => (
                  <li key={link.to} className="site-nav-item">
                    <Link
                      to={link.to}
                      className={`site-nav-link ${isActive(link.to) ? "site-nav-link-active" : ""}`}
                    >
                      {link.label}
                      <span className="site-nav-underline" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── CTA button (desktop) ── */}
            <div className="site-header-cta">
              <Link to="/contact-us" className="site-header-btn">
                <i className="fa fa-leaf site-header-btn-icon" />
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

      {/* ── Mobile menu backdrop ── */}
      <div
        className={`site-mobile-backdrop ${menuOpen ? "site-mobile-backdrop-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile menu drawer ── */}
      <div
        className={`site-mobile-menu ${menuOpen ? "site-mobile-menu-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="site-mobile-header">
          <Link to="/" className="site-mobile-logo" onClick={() => setMenuOpen(false)}>
            <img src="/images/logo-white.png" alt="Agroventures" className="site-mobile-logo-img" />
          </Link>
          <button
            className="site-mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa fa-times" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="site-mobile-nav" aria-label="Mobile navigation">
          <ul className="site-mobile-nav-list">
            {navLinks.map((link, i) => (
              <li
                key={link.to}
                className="site-mobile-nav-item"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <Link
                  to={link.to}
                  className={`site-mobile-nav-link ${isActive(link.to) ? "site-mobile-nav-active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="site-mobile-nav-dot" />
                  {link.label}
                  <i className="fa fa-chevron-right site-mobile-nav-arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer CTA */}
        <div className="site-mobile-footer">
          <Link to="/contact-us" className="site-mobile-cta" onClick={() => setMenuOpen(false)}>
            <i className="fa fa-leaf" />
            Start Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;