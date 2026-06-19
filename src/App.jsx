import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "../public/assets/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />

      {/* Best Web Badge */}
      <a
        href="https://ebadge.bestweb.lk/api/v1/clicked/agroventures.lk/TopWeb/2026-June/Qualified"
        id="best-web-badge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://ebadge.bestweb.lk/eBadgeSystem/domainNames/agroventures.lk/TopWeb/2026-June/Qualified/image.png"
          alt="logo"
          width="120"
          height="120"
        />
      </a>

      {/* Back to top */}
      <a href="#" id="back-to-top" title="Back to top">
        &uarr;
      </a>
    </Router>
  );
}

export default App;
